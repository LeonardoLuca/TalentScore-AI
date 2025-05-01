import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuthenticated = !!token
  
  const isAuthPage = req.nextUrl.pathname.startsWith("/login") || 
                     req.nextUrl.pathname.startsWith("/register")
                     
  const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard") || 
                         req.nextUrl.pathname.startsWith("/profile") || 
                         req.nextUrl.pathname.startsWith("/analysis")

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // Redirect unauthenticated users away from protected pages
  if (!isAuthenticated && isDashboardPage) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/profile/:path*", 
    "/analysis/:path*",
    "/login",
    "/register"
  ],
}