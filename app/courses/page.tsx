'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Star, Users, Clock, Search } from 'lucide-react'
import { useState } from 'react'

const allCourses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    category: 'Web Development',
    level: 'Beginner',
    duration: '8 weeks',
    students: 2341,
    rating: 4.8,
    price: 'Free',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    category: 'AI/ML',
    level: 'Intermediate',
    duration: '10 weeks',
    students: 1876,
    rating: 4.9,
    price: 'Free',
  },
  {
    id: 3,
    title: 'DevOps & Cloud Engineering',
    category: 'DevOps',
    level: 'Advanced',
    duration: '12 weeks',
    students: 1245,
    rating: 4.7,
    price: 'Free',
  },
  {
    id: 4,
    title: 'React Advanced Patterns',
    category: 'Web Development',
    level: 'Advanced',
    duration: '6 weeks',
    students: 892,
    rating: 4.8,
    price: 'Free',
  },
  {
    id: 5,
    title: 'Machine Learning with TensorFlow',
    category: 'AI/ML',
    level: 'Advanced',
    duration: '14 weeks',
    students: 645,
    rating: 4.9,
    price: 'Free',
  },
  {
    id: 6,
    title: 'Kubernetes Mastery',
    category: 'DevOps',
    level: 'Advanced',
    duration: '10 weeks',
    students: 523,
    rating: 4.6,
    price: 'Free',
  },
  {
    id: 7,
    title: 'JavaScript ES6+ Complete Guide',
    category: 'Programming',
    level: 'Intermediate',
    duration: '8 weeks',
    students: 3156,
    rating: 4.7,
    price: 'Free',
  },
  {
    id: 8,
    title: 'AWS Solutions Architect',
    category: 'DevOps',
    level: 'Advanced',
    duration: '16 weeks',
    students: 876,
    rating: 4.8,
    price: 'Free',
  },
]

const categories = ['All', 'Programming', 'Web Development', 'AI/ML', 'DevOps']
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = allCourses.filter((course) => {
    const matchCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchLevel = selectedLevel === 'All' || course.level === selectedLevel
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchLevel && matchSearch
  })

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
            <p className="text-lg text-muted-foreground">
              Choose from hundreds of courses and start learning today
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Badge
                      key={level}
                      variant={selectedLevel === level ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Found
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge>{course.level}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {course.students.toLocaleString()} students
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
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
                      <span className="text-lg font-bold text-primary">{course.price}</span>
                    </div>

                    <Button className="w-full">Enroll Now</Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No courses found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
