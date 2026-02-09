'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Calendar, Clock, Users, MapPin, Video } from 'lucide-react'
import { useState } from 'react'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  const scheduleData: Record<string, any[]> = {
    Monday: [
      {
        id: 1,
        course: 'Python Fundamentals',
        time: '10:00 AM - 11:30 AM',
        instructor: 'Dr. Ramesh Kumar',
        type: 'Live Class',
        room: 'Room 301',
        students: 45,
      },
      {
        id: 2,
        course: 'Web Development Basics',
        time: '2:00 PM - 3:30 PM',
        instructor: 'Priya Sharma',
        type: 'Live Class',
        room: 'Lab 2',
        students: 38,
      },
      {
        id: 3,
        course: 'Data Structures',
        time: '4:00 PM - 5:30 PM',
        instructor: 'Anil Kumar',
        type: 'Recording Session',
        room: 'Online',
        students: 52,
      },
    ],
    Tuesday: [
      {
        id: 4,
        course: 'React.js Advanced',
        time: '9:00 AM - 10:30 AM',
        instructor: 'Deepak Singh',
        type: 'Live Class',
        room: 'Room 401',
        students: 30,
      },
      {
        id: 5,
        course: 'Database Design',
        time: '11:00 AM - 12:30 PM',
        instructor: 'Anjali Patel',
        type: 'Live Class',
        room: 'Lab 1',
        students: 42,
      },
      {
        id: 6,
        course: 'AI/ML Basics',
        time: '3:00 PM - 4:30 PM',
        instructor: 'Dr. Rajesh Gupta',
        type: 'Live Class',
        room: 'Seminar Hall',
        students: 65,
      },
    ],
    Wednesday: [
      {
        id: 7,
        course: 'DevOps Fundamentals',
        time: '10:00 AM - 11:30 AM',
        instructor: 'Vikram Singh',
        type: 'Live Class',
        room: 'Room 302',
        students: 28,
      },
      {
        id: 8,
        course: 'Cloud Computing',
        time: '1:00 PM - 2:30 PM',
        instructor: 'Neha Verma',
        type: 'Live Class',
        room: 'Lab 3',
        students: 35,
      },
    ],
    Thursday: [
      {
        id: 9,
        course: 'JavaScript Mastery',
        time: '10:00 AM - 11:30 AM',
        instructor: 'Arjun Menon',
        type: 'Live Class',
        room: 'Room 201',
        students: 40,
      },
      {
        id: 10,
        course: 'System Design',
        time: '2:00 PM - 3:30 PM',
        instructor: 'Dr. Suresh Kumar',
        type: 'Workshop',
        room: 'Room 501',
        students: 25,
      },
    ],
    Friday: [
      {
        id: 11,
        course: 'Project Showcase',
        time: '10:00 AM - 12:00 PM',
        instructor: 'Multiple Instructors',
        type: 'Student Projects',
        room: 'Auditorium',
        students: 150,
      },
      {
        id: 12,
        course: 'Q&A Session',
        time: '2:00 PM - 3:30 PM',
        instructor: 'All Faculty',
        type: 'Doubt Clearing',
        room: 'Online',
        students: 200,
      },
    ],
  }

  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Hackathon 2025',
      date: 'March 15-17, 2025',
      location: 'Main Campus',
      participants: '300+',
      description: 'Annual 48-hour coding competition',
    },
    {
      id: 2,
      title: 'Industry Expert Talk - Google',
      date: 'March 20, 2025',
      location: 'Auditorium',
      participants: '500+',
      description: 'Learn about Google Cloud technologies',
    },
    {
      id: 3,
      title: 'Placement Drive - TCS',
      date: 'March 25-26, 2025',
      location: 'Campus',
      participants: '200+',
      description: 'Campus recruitment by TCS',
    },
  ]

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'Live Class':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Workshop':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'Recording Session':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Student Projects':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'Doubt Clearing':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Class Schedule</h1>
          </div>
          <p className="text-lg text-muted-foreground">View all your classes and upcoming events</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Weekly Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Weekly Timetable</h2>

          {/* Day Selection */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="space-y-4">
            {scheduleData[selectedDay].map((session) => (
              <Card key={session.id} className="p-6 hover:shadow-lg transition">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{session.course}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getTypeStyles(session.type)}`}>
                          {session.type}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users size={16} />
                        <span>{session.instructor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{session.room}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users size={16} />
                        <span>{session.students} Students Enrolled</span>
                      </div>
                    </div>
                    <Link href="/dashboard">
                      <Button className="w-full mt-4">Join Class</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-6 hover:shadow-lg transition border-2 border-primary/20">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
