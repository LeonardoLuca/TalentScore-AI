"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function LoginError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted-foreground mb-6">
          {error.message || "An error occurred during login. Please try again."}
        </p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}