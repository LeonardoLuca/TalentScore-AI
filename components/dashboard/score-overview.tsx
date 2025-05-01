'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart, FileCheck, Award, Scroll } from "lucide-react"

// Mock data - would come from API in real app
const mockScores = {
  skills: 78,
  experience: 85,
  education: 92,
  format: 74
}

export function ScoreOverview() {
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600 dark:bg-green-500"
    if (score >= 60) return "bg-yellow-600 dark:bg-yellow-500"
    return "bg-red-600 dark:bg-red-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Score Overview</CardTitle>
        <CardDescription>Your latest resume scoring breakdown.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scores">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="scores">Scores</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          <TabsContent value="scores" className="pt-4 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">Skills</span>
                  </div>
                  <span className="text-sm font-medium">{mockScores.skills}/100</span>
                </div>
                <Progress value={mockScores.skills} className={getProgressColor(mockScores.skills)} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart className="h-4 w-4 text-primary" />
                    <span className="font-medium">Experience</span>
                  </div>
                  <span className="text-sm font-medium">{mockScores.experience}/100</span>
                </div>
                <Progress value={mockScores.experience} className={getProgressColor(mockScores.experience)} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Scroll className="h-4 w-4 text-primary" />
                    <span className="font-medium">Education</span>
                  </div>
                  <span className="text-sm font-medium">{mockScores.education}/100</span>
                </div>
                <Progress value={mockScores.education} className={getProgressColor(mockScores.education)} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <span className="font-medium">Format</span>
                  </div>
                  <span className="text-sm font-medium">{mockScores.format}/100</span>
                </div>
                <Progress value={mockScores.format} className={getProgressColor(mockScores.format)} />
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Your resume scores well in education but could use improvement in formatting and skills presentation.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="trends">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-muted-foreground mb-4">
                Score trends will appear after you have multiple analyses.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}