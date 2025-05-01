'use client'

import { FileTerminal as FileAnalytics, BadgeCheck, BarChart, Lightbulb, Upload, Eye, LineChart, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Upload className="w-10 h-10 text-primary" />,
    title: "Easy Resume Upload",
    description: "Simply upload your resume in PDF, DOC, or DOCX format. Our system handles the rest.",
  },
  {
    icon: <FileAnalytics className="w-10 h-10 text-primary" />,
    title: "AI-Powered Analysis",
    description: "Our AI extracts and analyzes every aspect of your resume to provide comprehensive insights.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: "Detailed Scoring",
    description: "Get scores across key areas: skills, experience, education, and formatting.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Actionable Suggestions",
    description: "Receive practical tips to improve your resume and boost your chances of getting noticed.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: "Industry Benchmarking",
    description: "See how your resume compares to industry standards and successful candidates.",
  },
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: "ATS Compatibility",
    description: "Ensure your resume is optimized for Applicant Tracking Systems used by employers.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: "Progress Tracking",
    description: "Track improvements over time as you refine your resume based on feedback.",
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Fast Processing",
    description: "Get complete analysis in seconds, not hours. Save time in your job application process.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Features() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">How TalentScore-AI Works</h2>
          <p className="paragraph">
            Our AI-powered platform analyzes your resume across multiple dimensions, providing you with actionable insights to stand out in the job market.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg border bg-card shadow-sm card-hover"
              variants={item}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}