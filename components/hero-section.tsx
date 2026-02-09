import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:pt-20 sm:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
                Learn. Build. Get Certified.
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Elevate your skills with industry-leading courses at Kongu Engineering College. Get certified and launch your career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm flex items-center justify-center min-h-96">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    KEC
                  </div>
                  <p className="text-lg font-semibold text-primary">Skill Development Portal</p>
                  <p className="text-sm text-muted-foreground">Powered by Kongu Engineering College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
