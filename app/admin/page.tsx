'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Users, BookOpen, BarChart3, Plus, Edit2, Trash2 } from 'lucide-react'

const students = [
  { id: 1, name: 'Arjun Verma', email: 'arjun@kec.edu.in', coursesEnrolled: 3, status: 'Active' },
  { id: 2, name: 'Priya Singh', email: 'priya@kec.edu.in', coursesEnrolled: 2, status: 'Active' },
  { id: 3, name: 'Rahul Kumar', email: 'rahul@kec.edu.in', coursesEnrolled: 4, status: 'Active' },
  { id: 4, name: 'Sneha Sharma', email: 'sneha@kec.edu.in', coursesEnrolled: 1, status: 'Inactive' },
]

const courses = [
  { id: 1, title: 'Web Development', instructor: 'John Smith', students: 234, status: 'Active' },
  { id: 2, title: 'Python for Data Science', instructor: 'Sarah Johnson', students: 187, status: 'Active' },
  { id: 3, title: 'React Advanced', instructor: 'Mike Chen', students: 89, status: 'Active' },
  { id: 4, title: 'DevOps Basics', instructor: 'Alex Kumar', students: 156, status: 'Coming Soon' },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-lg text-muted-foreground">Manage courses, students, and analytics</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                  <p className="text-3xl font-bold">10,234</p>
                </div>
                <Users className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
                  <p className="text-3xl font-bold">42</p>
                </div>
                <BookOpen className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Enrollments</p>
                  <p className="text-3xl font-bold">8,456</p>
                </div>
                <BarChart3 className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
                  <p className="text-3xl font-bold">87%</p>
                </div>
                <BarChart3 className="w-10 h-10 text-primary/30" />
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-4">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Students</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Courses</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-border hover:bg-muted/50">
                          <td className="px-6 py-4 font-semibold">{student.name}</td>
                          <td className="px-6 py-4">{student.email}</td>
                          <td className="px-6 py-4">{student.coursesEnrolled}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                student.status === 'Active'
                                  ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                                  : 'bg-gray-500/20 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {student.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Manage Courses</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Course
                </Button>
              </div>

              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Course Title</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Instructor</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Students</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b border-border hover:bg-muted/50">
                          <td className="px-6 py-4 font-semibold">{course.title}</td>
                          <td className="px-6 py-4">{course.instructor}</td>
                          <td className="px-6 py-4">{course.students}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                course.status === 'Active'
                                  ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                                  : 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                              }`}
                            >
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Analytics</h2>
              <Card className="p-8 text-center">
                <p className="text-muted-foreground mb-4">Analytics dashboard coming soon</p>
                <p className="text-sm text-muted-foreground">
                  Detailed insights about student progress, course completion rates, and engagement metrics will be available here.
                </p>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Portal Settings</h2>
              <Card className="p-6 space-y-6">
                <div>
                  <Label htmlFor="portal-name">Portal Name</Label>
                  <Input
                    id="portal-name"
                    defaultValue="KEC Skill Development Portal"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Portal Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Learn. Build. Get Certified at Kongu Engineering College"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    defaultValue="support@kec.edu.in"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input
                    id="phone"
                    defaultValue="+91 (0) 123-456-7890"
                    className="mt-2"
                  />
                </div>

                <div className="flex gap-3">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
