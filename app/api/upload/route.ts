// This file handles file uploads using the uploadthing library
// It processes resume files and triggers the analysis process

import { NextResponse } from "next/server"
import { createUploadthing, type FileRouter } from "uploadthing/next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

// Initialize uploadthing's file handler
const f = createUploadthing()

// Define the upload router with file type restrictions and handlers
export const uploadRouter = {
  // Configure resume uploader with file type and size limits
  resumeUploader: f({ 
    pdf: { maxFileSize: "10MB" }, 
    "application/msword": { maxFileSize: "10MB" }, 
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "10MB" } 
  })
    // Middleware to check authentication before upload
    .middleware(async ({ req }) => {
      const session = await getServerSession(authOptions)
      
      if (!session) throw new Error("Unauthorized")
      
      return { userId: session.user.id }
    })
    // Handler that runs after successful upload
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("File:", file)

      // Save resume information to database
      const resume = await db.resume.create({
        data: {
          userId: metadata.userId,
          fileName: file.name,
          fileUrl: file.url,
          fileType: file.type,
          fileSize: file.size,
        },
      })

      // Trigger resume processing via Supabase Edge Function
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/process-resume`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            fileUrl: file.url,
            fileName: file.name,
            fileType: file.type,
            userId: metadata.userId,
            resumeId: resume.id
          }),
        })

        if (!response.ok) {
          console.error("Error processing resume:", await response.text())
        }
      } catch (error) {
        console.error("Error calling resume processing:", error)
      }

      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

// API route handlers
export async function GET() {
  return NextResponse.json({ message: "Upload API ready" })
}

export async function POST() {
  return NextResponse.json(
    { message: "Upload API should be called through uploadthing" }, 
    { status: 400 }
  )
}