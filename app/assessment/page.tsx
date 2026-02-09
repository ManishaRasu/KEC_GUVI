'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const assessments = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    category: 'Programming',
    difficulty: 'Beginner',
    duration: '30 mins',
    questions: 20,
    points: 100,
    completed: true,
    score: 95,
  },
  {
    id: 2,
    title: 'React Concepts',
    category: 'Web Development',
    difficulty: 'Intermediate',
    duration: '45 mins',
    questions: 30,
    points: 150,
    completed: true,
    score: 87,
  },
  {
    id: 3,
    title: 'Python Data Structures',
    category: 'AI/ML',
    difficulty: 'Intermediate',
    duration: '50 mins',
    questions: 35,
    points: 180,
    completed: false,
  },
  {
    id: 4,
    title: 'DevOps Basics',
    category: 'DevOps',
    difficulty: 'Advanced',
    duration: '60 mins',
    questions: 40,
    points: 200,
    completed: false,
  },
  {
    id: 5,
    title: 'Machine Learning Advanced',
    category: 'AI/ML',
    difficulty: 'Advanced',
    duration: '90 mins',
    questions: 50,
    points: 250,
    completed: false,
  },
  {
    id: 6,
    title: 'AWS Solutions',
    category: 'DevOps',
    difficulty: 'Advanced',
    duration: '75 mins',
    questions: 45,
    points: 220,
    completed: false,
  },
]

export default function AssessmentPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<typeof assessments[0] | null>(null)

  const completedCount = assessments.filter((a) => a.completed).length
  const totalPoints = assessments.filter((a) => a.completed).reduce((sum, a) => sum + (a.score ? 0 : 0), 0) +
    assessments
      .filter((a) => a.completed)
      .reduce((sum, a) => sum + (a.points || 0), 0)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Skill Assessments</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Test your knowledge and earn points by completing skill assessments
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Assessments Completed</p>
              <p className="text-4xl font-bold text-primary mb-2">{completedCount}</p>
              <Progress value={(completedCount / assessments.length) * 100} className="h-2" />
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Points Earned</p>
              <p className="text-4xl font-bold text-primary">
                {assessments
                  .filter((a) => a.completed)
                  .reduce((sum, a) => sum + a.points, 0)}
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Average Score</p>
              <p className="text-4xl font-bold text-primary">
                {assessments.filter((a) => a.completed).length > 0
                  ? Math.round(
                      assessments.filter((a) => a.completed).reduce((sum, a) => sum + (a.score || 0), 0) /
                        assessments.filter((a) => a.completed).length,
                    )
                  : 0}
                %
              </p>
            </Card>
          </div>

          {/* Assessment Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Assessments</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {assessments.map((assessment) => (
                <Card key={assessment.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{assessment.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{assessment.category}</Badge>
                        <Badge>{assessment.difficulty}</Badge>
                      </div>
                    </div>
                    {assessment.completed && (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>

                  <div className="space-y-3 my-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{assessment.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Questions</span>
                      <span className="font-semibold">{assessment.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Points</span>
                      <span className="font-bold text-primary">{assessment.points} pts</span>
                    </div>
                  </div>

                  {assessment.completed ? (
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Your Score</span>
                          <span className="font-bold text-green-600">{assessment.score}%</span>
                        </div>
                        <Progress value={assessment.score || 0} className="h-2" />
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Retake Assessment
                      </Button>
                    </div>
                  ) : (
                    <Button className="w-full">
                      Start Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">About Assessments</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Why Take Assessments?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Test your knowledge and identify weak areas</li>
                  <li>✓ Earn points and climb the leaderboard</li>
                  <li>✓ Get recognized for your skills</li>
                  <li>✓ Showcase achievements to employers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Assessment Rules</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• You have the specified time to complete</li>
                  <li>• No external help or resources allowed</li>
                  <li>• You can retake assessments anytime</li>
                  <li>• Best score will be recorded</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
