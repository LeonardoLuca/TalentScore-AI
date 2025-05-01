'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tighter md:text-6xl mb-4">
              Elevate Your Resume with <span className="text-primary">AI Analysis</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              TalentScore-AI analyzes your resume against industry standards and provides 
              actionable feedback to help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="pt-4 flex items-center space-x-2 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800" />
                ))}
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium">4,000+</span> professionals improved their resumes this month
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative lg:absolute lg:inset-0 rounded-lg overflow-hidden shadow-xl border bg-white dark:bg-gray-900">
              <div className="p-4 sm:p-6 h-[480px] w-full">
                <Image
                  src="https://images.pexels.com/photos/3786748/pexels-photo-3786748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Resume Analysis Dashboard"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}