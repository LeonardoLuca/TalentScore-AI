import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UploadResume } from "@/components/dashboard/upload-resume"
import { RecentAnalyses } from "@/components/dashboard/recent-analyses"
import { ScoreOverview } from "@/components/dashboard/score-overview"
import { ResumeStats } from "@/components/dashboard/resume-stats"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome {userName} to TalentScore-AI. Upload your resume and get detailed analysis."
      >
        <Link href="/analysis/new">
          <Button>Start New Analysis</Button>
        </Link>
      </DashboardHeader>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-2 lg:col-span-4">
          <UploadResume />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <ResumeStats />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <div className="col-span-2 lg:col-span-4">
          <RecentAnalyses />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <ScoreOverview />
        </div>
      </div>
    </DashboardShell>
  )
}