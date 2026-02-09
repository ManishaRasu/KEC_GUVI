'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Award, Clock, Users, Settings, LogOut } from 'lucide-react'

const enrolledCourses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    progress: 65,
    instructor: 'John Smith',
    nextSession: '2025-02-15 10:00 AM',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    progress: 45,
    instructor: 'Sarah Johnson',
    nextSession: '2025-02-16 02:00 PM',
  },
  {
    id: 3,
    title: 'React Advanced Patterns',
    progress: 80,
    instructor: 'Mike Chen',
    nextSession: '2025-02-17 03:30 PM',
  },
]

const certificates = [
  { id: 1, title: 'Web Development Fundamentals', issueDate: '2024-12-10', status: 'Completed' },
  { id: 2, title: 'JavaScript ES6+ Complete Guide', issueDate: '2024-11-05', status: 'Completed' },
]

const upcomingSessions = [
  { id: 1, course: 'Web Development Fundamentals', date: '2025-02-15', time: '10:00 AM', instructor: 'John Smith' },
  { id: 2, course: 'Python for Data Science', date: '2025-02-16', time: '02:00 PM', instructor: 'Sarah Johnson' },
  { id: 3, course: 'React Advanced Patterns', date: '2025-02-17', time: '03:30 PM', instructor: 'Mike Chen' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-2">Welcome back, Student!</h1>
                <p className="text-lg text-muted-foreground">
                  You're progressing well. Keep up the great work!
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Settings size={18} />
                </Button>
                <Button variant="outline" size="sm">
                  <LogOut size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Courses Enrolled</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                </div>
                <BookOpen className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Certificates</p>
                  <p className="text-3xl font-bold text-foreground">2</p>
                </div>
                <Award className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Learning Hours</p>
                  <p className="text-3xl font-bold text-foreground">156</p>
                </div>
                <Clock className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Leaderboard Rank</p>
                  <p className="text-3xl font-bold text-foreground">#45</p>
                </div>
                <Users className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="sessions">Live Sessions</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>

            {/* Enrolled Courses Tab */}
            <TabsContent value="courses" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Enrolled Courses</h2>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Button>Continue</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Next session: {course.nextSession}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Live Sessions Tab */}
            <TabsContent value="sessions" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Upcoming Live Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <Card key={session.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{session.course}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {session.instructor}</p>
                      </div>
                      <Badge>Upcoming</Badge>
                    </div>
                    <p className="text-sm mb-4">
                      📅 {session.date} at {session.time}
                    </p>
                    <Button className="w-full md:w-auto">Join Session</Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">Issued on {cert.issueDate}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Share
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
