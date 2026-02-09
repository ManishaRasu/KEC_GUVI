'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy, Medal, Flame } from 'lucide-react'

const leaderboardData = [
  { rank: 1, name: 'Arjun Verma', points: 4850, level: 'Expert', streak: 32 },
  { rank: 2, name: 'Priya Singh', points: 4720, level: 'Expert', streak: 28 },
  { rank: 3, name: 'Rahul Kumar', points: 4650, level: 'Advanced', streak: 25 },
  { rank: 4, name: 'Sneha Sharma', points: 4580, level: 'Advanced', streak: 22 },
  { rank: 5, name: 'Vikas Patel', points: 4450, level: 'Advanced', streak: 20 },
  { rank: 6, name: 'Anjali Desai', points: 4320, level: 'Advanced', streak: 18 },
  { rank: 7, name: 'Rohan Singh', points: 4200, level: 'Intermediate', streak: 15 },
  { rank: 8, name: 'Divya Nair', points: 4150, level: 'Intermediate', streak: 14 },
  { rank: 9, name: 'Karan Gupta', points: 4080, level: 'Intermediate', streak: 12 },
  { rank: 10, name: 'Meera Iyer', points: 3950, level: 'Intermediate', streak: 10 },
]

const getMedalColor = (rank: number) => {
  switch (rank) {
    case 1:
      return 'text-yellow-500'
    case 2:
      return 'text-gray-400'
    case 3:
      return 'text-orange-500'
    default:
      return 'text-gray-300'
  }
}

const getMedalIcon = (rank: number) => {
  if (rank <= 3) {
    return <Medal className={`w-6 h-6 ${getMedalColor(rank)}`} />
  }
  return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Leaderboard</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Compete with thousands of learners and reach the top
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Top 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {leaderboardData.slice(0, 3).map((student) => (
              <Card key={student.rank} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {getMedalIcon(student.rank)}
                </div>
                <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                <div className="flex justify-center gap-2 mb-4">
                  <Badge>{student.level}</Badge>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{student.points}</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  {student.streak} day streak
                </p>
              </Card>
            ))}
          </div>

          {/* Full Leaderboard */}
          <div>
            <Tabs defaultValue="overall" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="overall">Overall</TabsTrigger>
                <TabsTrigger value="monthly">This Month</TabsTrigger>
              </TabsList>

              <TabsContent value="overall" className="space-y-4">
                <Card className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted border-b border-border">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Student</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Level</th>
                          <th className="px-6 py-4 text-right text-sm font-semibold">Points</th>
                          <th className="px-6 py-4 text-right text-sm font-semibold">Streak</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboardData.map((student, index) => (
                          <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center">
                                {getMedalIcon(student.rank)}
                              </div>
                            </td>
                            <td className="px-6 py-4 font-semibold">{student.name}</td>
                            <td className="px-6 py-4">
                              <Badge variant="outline">{student.level}</Badge>
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-primary">
                              {student.points}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Flame className="w-4 h-4 text-orange-500" />
                                <span>{student.streak}d</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="monthly" className="space-y-4">
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">Monthly leaderboard resets on the 1st of each month.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* How Points Work */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">How Points Work?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Complete Courses</h3>
                <p className="text-sm text-muted-foreground">
                  Earn points by completing courses and passing quizzes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Daily Streaks</h3>
                <p className="text-sm text-muted-foreground">
                  Maintain daily learning streaks to earn bonus points.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Challenge Others</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in competitions and skill assessments for extra points.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
