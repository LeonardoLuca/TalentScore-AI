'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Eye, ChevronRight, AlertCircle } from "lucide-react"
import Link from "next/link"

// This would typically come from API
const mockAnalyses = [
  {
    id: "1",
    fileName: "software-engineer-resume.pdf",
    date: "2023-11-10T14:30:00Z",
    overallScore: 85,
  },
  {
    id: "2",
    fileName: "product-manager-resume.docx",
    date: "2023-11-05T09:15:00Z",
    overallScore: 72,
  },
  {
    id: "3", 
    fileName: "data-scientist-cv.pdf",
    date: "2023-10-28T16:45:00Z",
    overallScore: 91,
  }
]

export function RecentAnalyses() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    if (score >= 60) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>Your recently analyzed resumes.</CardDescription>
          </div>
          <Link href="/analysis/history">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        {mockAnalyses.length > 0 ? (
          <div className="space-y-4">
            {mockAnalyses.map((analysis) => (
              <div key={analysis.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium truncate max-w-[180px] sm:max-w-xs">{analysis.fileName}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(analysis.date)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getScoreColor(analysis.overallScore)}>
                    {analysis.overallScore}/100
                  </Badge>
                  <Link href={`/analysis/${analysis.id}`}>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-3" />
            <h3 className="text-lg font-medium mb-1">No analyses yet</h3>
            <p className="text-muted-foreground mb-4">Upload your first resume to get started.</p>
            <Link href="/analysis/new">
              <Button>Start New Analysis</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}