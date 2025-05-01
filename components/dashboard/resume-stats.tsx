'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, FileText, ArrowUpRight, Clock } from "lucide-react"

export function ResumeStats() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Resume Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Total Resumes</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">3</p>
              <div className="flex items-center text-sm text-green-500 font-medium">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>33%</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Avg Score</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">82.7</p>
              <div className="flex items-center text-sm text-green-500 font-medium">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>5%</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Last Upload</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">2 days ago</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Improvement</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">+9 points</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}