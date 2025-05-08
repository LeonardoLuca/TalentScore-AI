import { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "@/components/auth/user-auth-form"

export const metadata: Metadata = {
  title: "Login | TalentScore-AI",
  description: "Login to your TalentScore-AI account",
}

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      {/* Left side with blue background */}
     <div className="hidden lg:flex lg:w-1/2 bg-blue-800 relative items-center justify-center p-12">
        {/* header fixo no canto superior-esquerdo */}
        <header className="absolute top-0 left-0 p-6">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <span className="text-xl font-bold text-white">TalentScore-AI</span>
            </Link>
          </div>
        </header>

        {/* conteúdo centralizado */}
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-xl mb-8">
            Sign in to continue improving your resume and tracking your progress with our AI-powered platform.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-white/20 p-2 rounded-full mr-4">✓</span>
              Instant Resume Analysis
            </li>
            <li className="flex items-center">
              <span className="bg-white/20 p-2 rounded-full mr-4">✓</span>
              Personalized Feedback
            </li>
            <li className="flex items-center">
              <span className="bg-white/20 p-2 rounded-full mr-4">✓</span>
              Progress Tracking
            </li>
          </ul>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>

          <UserAuthForm />

          <div className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              By signing in, you agree to our{" "}
              <Link
                href="/terms"
                className="hover:text-brand underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="hover:text-brand underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
            
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link 
                href="/register" 
                className="text-blue-600 hover:text-blue-500 underline underline-offset-4"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}