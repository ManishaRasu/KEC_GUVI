'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Users, Clock } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    category: 'Web Development',
    level: 'Beginner',
    duration: '8 weeks',
    students: 2341,
    rating: 4.8,
    image: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    category: 'AI/ML',
    level: 'Intermediate',
    duration: '10 weeks',
    students: 1876,
    rating: 4.9,
    image: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    id: 3,
    title: 'DevOps & Cloud Engineering',
    category: 'DevOps',
    level: 'Advanced',
    duration: '12 weeks',
    students: 1245,
    rating: 4.7,
    image: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    id: 4,
    title: 'React Advanced Patterns',
    category: 'Web Development',
    level: 'Advanced',
    duration: '6 weeks',
    students: 892,
    rating: 4.8,
    image: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Featured Courses</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Start your learning journey with our most popular courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${course.image} h-32 w-full`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge>{course.level}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{course.title}</h3>
                
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {course.students.toLocaleString()} students
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(course.rating) ? 'fill-primary text-primary' : 'text-muted'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{course.rating}</span>
                </div>

                <Button className="w-full">Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
