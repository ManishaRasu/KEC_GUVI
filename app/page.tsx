import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import FeaturedCourses from '@/components/featured-courses'
import Footer from '@/components/footer'
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedCourses />
      
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Why Choose KEC Skill Development Portal?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Courses</h3>
              <p className="text-muted-foreground">Comprehensive courses in programming, DevOps, AI/ML, and more</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <Users className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">10K+</div>
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p className="text-muted-foreground">Join thousands of students learning and growing with us</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <Award className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">95%</div>
              <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
              <p className="text-muted-foreground">High placement and certification completion rates</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Student Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">AJ</div>
                <div>
                  <h4 className="font-semibold">Arjun Jayaraman</h4>
                  <p className="text-sm text-muted-foreground">CSE '24</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"The courses here transformed my career. I got placed in a top tech company within 3 months of completing the DevOps course."</p>
              <div className="text-yellow-500 text-sm">★★★★★</div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">PK</div>
                <div>
                  <h4 className="font-semibold">Priya Kumaran</h4>
                  <p className="text-sm text-muted-foreground">ECE '23</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"Excellent learning platform with hands-on projects. The mentors are super helpful and the community is amazing!"</p>
              <div className="text-yellow-500 text-sm">★★★★★</div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">RV</div>
                <div>
                  <h4 className="font-semibold">Rohan Vishnu</h4>
                  <p className="text-sm text-muted-foreground">IT '24</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"From beginner to pro! The structured learning path and real-world projects made all the difference in my skill development."</p>
              <div className="text-yellow-500 text-sm">★★★★★</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-balance">Campus Announcements</h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Kongu Engineering College</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Spring 2025 Placement Drive</h4>
                  <p className="text-muted-foreground">Top companies recruiting across all departments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Internship Opportunities</h4>
                  <p className="text-muted-foreground">Partner companies offering exciting internship programs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Industry Expert Workshops</h4>
                  <p className="text-muted-foreground">Monthly workshops by industry professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 text-white/90">Join thousands of students already learning and advancing their careers</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
