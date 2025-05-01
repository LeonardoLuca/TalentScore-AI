import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, AlertTriangle, FileText, Download, Share2 } from "lucide-react"

// Mock data - in a real app, this would come from an API call
const mockAnalysis = {
  id: "1",
  resumeId: "r1",
  fileName: "software-engineer-resume.pdf",
  fileUrl: "https://example.com/resume.pdf",
  overallScore: 85,
  skillsScore: 82,
  experienceScore: 88,
  educationScore: 90,
  formatScore: 78,
  createdAt: "2023-11-15T10:30:00Z",
  updatedAt: "2023-11-15T10:35:00Z",
  feedback: "Strong technical resume with good experience details. Could improve the formatting and add more quantifiable achievements.",
  strengths: [
    "Strong technical skill set",
    "Good progression in career",
    "Relevant education background",
    "Clear experience descriptions"
  ],
  weaknesses: [
    "Limited quantifiable achievements",
    "Some formatting inconsistencies",
    "Could expand on projects section",
    "Missing certifications"
  ],
  suggestions: [
    "Add metrics to demonstrate impact in previous roles",
    "Include relevant certifications",
    "Improve formatting consistency",
    "Add a brief professional summary"
  ],
  keywords: [
    "software engineer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "AWS",
    "cloud",
    "development"
  ]
}

export default function AnalysisDetailsPage({ params }: { params: { id: string } }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-600"
    if (score >= 60) return "bg-yellow-600"
    return "bg-red-600"
  }
  
  const getScoreText = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    return "Needs Improvement"
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Resume Analysis"
        text={`Analysis for ${mockAnalysis.fileName} • ${formatDate(mockAnalysis.createdAt)}`}
      >
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </DashboardHeader>
      
      <div className="grid gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{mockAnalysis.overallScore}</div>
                <div className={`px-2 py-1 rounded-full text-white text-xs font-medium ${getScoreColor(mockAnalysis.overallScore)}`}>
                  {getScoreText(mockAnalysis.overallScore)}
                </div>
              </div>
              <Progress value={mockAnalysis.overallScore} className={`mt-2 ${getScoreColor(mockAnalysis.overallScore)}`} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAnalysis.skillsScore}</div>
              <Progress value={mockAnalysis.skillsScore} className={`mt-2 ${getScoreColor(mockAnalysis.skillsScore)}`} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAnalysis.experienceScore}</div>
              <Progress value={mockAnalysis.experienceScore} className={`mt-2 ${getScoreColor(mockAnalysis.experienceScore)}`} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Format</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAnalysis.formatScore}</div>
              <Progress value={mockAnalysis.formatScore} className={`mt-2 ${getScoreColor(mockAnalysis.formatScore)}`} />
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Resume Summary</CardTitle>
                <CardDescription>General overview of your resume performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">General Feedback</h3>
                  <p className="text-muted-foreground">{mockAnalysis.feedback}</p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Strengths</h3>
                    <ul className="space-y-2">
                      {mockAnalysis.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Areas for Improvement</h3>
                    <ul className="space-y-2">
                      {mockAnalysis.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
                <CardDescription>Section-by-section breakdown of your resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Skills Assessment</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Technical Skills</span>
                      <span className="font-medium">85/100</span>
                    </div>
                    <Progress value={85} className="bg-green-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>Soft Skills</span>
                      <span className="font-medium">70/100</span>
                    </div>
                    <Progress value={70} className="bg-yellow-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>Skill Relevance</span>
                      <span className="font-medium">90/100</span>
                    </div>
                    <Progress value={90} className="bg-green-600" />
                  </div>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your technical skills are strong, but consider expanding on soft skills like leadership and communication.
                  </p>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-medium mb-3">Experience Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Achievement Focus</span>
                      <span className="font-medium">75/100</span>
                    </div>
                    <Progress value={75} className="bg-yellow-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>Role Clarity</span>
                      <span className="font-medium">88/100</span>
                    </div>
                    <Progress value={88} className="bg-green-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>Progression</span>
                      <span className="font-medium">92/100</span>
                    </div>
                    <Progress value={92} className="bg-green-600" />
                  </div>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your career progression is well demonstrated, but try to focus more on quantifiable achievements rather than just responsibilities.
                  </p>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-medium mb-3">Format & Readability</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Layout</span>
                      <span className="font-medium">80/100</span>
                    </div>
                    <Progress value={80} className="bg-green-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>ATS Compatibility</span>
                      <span className="font-medium">65/100</span>
                    </div>
                    <Progress value={65} className="bg-yellow-600" />
                    
                    <div className="flex justify-between items-center mt-4">
                      <span>Consistency</span>
                      <span className="font-medium">72/100</span>
                    </div>
                    <Progress value={72} className="bg-yellow-600" />
                  </div>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your resume layout is good, but needs improvement for ATS compatibility. Ensure consistent formatting throughout.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="keywords" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Analysis</CardTitle>
                <CardDescription>Important keywords detected in your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockAnalysis.keywords.map((keyword, index) => (
                    <div key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-medium mb-3">Keyword Impact</h3>
                  <p className="text-muted-foreground mb-4">
                    Your resume includes many relevant keywords for your field, which helps with ATS (Applicant Tracking System) scanning. 
                    However, consider adding more industry-specific terms to increase visibility.
                  </p>
                  
                  <h4 className="font-medium text-sm mb-2">Suggested Additional Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-muted px-3 py-1 rounded-full text-sm">full-stack</div>
                    <div className="bg-muted px-3 py-1 rounded-full text-sm">agile</div>
                    <div className="bg-muted px-3 py-1 rounded-full text-sm">CI/CD</div>
                    <div className="bg-muted px-3 py-1 rounded-full text-sm">DevOps</div>
                    <div className="bg-muted px-3 py-1 rounded-full text-sm">microservices</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
                <CardDescription>Actionable steps to enhance your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {mockAnalysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="bg-card border rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Suggestion {index + 1}</h4>
                          <p className="text-muted-foreground">{suggestion}</p>
                          
                          {index === 0 && (
                            <div className="mt-3 bg-muted p-3 rounded text-sm">
                              <span className="font-medium">Example: </span>
                              <span className="text-muted-foreground">
                                "Improved system performance by 40% through code optimization" instead of 
                                "Responsible for improving system performance"
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link href="/resources/resume-tips">
                    <Button variant="outline" className="w-full">
                      View All Resume Resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}