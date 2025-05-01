import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserAuthForm } from '@/components/auth/user-auth-form'
import { Github } from 'lucide-react'
import { Features } from '@/components/landing/features'
import { HeroSection } from '@/components/landing/hero-section'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">TalentScore-AI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <HeroSection />
        <Features />
        
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Ready to analyze your resume?</h2>
              <p className="paragraph max-w-2xl mx-auto">
                Join thousands of job seekers who are improving their resumes and landing their dream jobs.
              </p>
            </div>
            <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-md border">
              <div className="text-center mb-6">
                <h3 className="heading-3 mb-2">Get Started</h3>
                <p className="paragraph">Sign up in seconds to start analyzing your resume.</p>
              </div>
              <UserAuthForm />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  By signing up, you agree to our <Link href="/terms" className="underline underline-offset-4 hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}