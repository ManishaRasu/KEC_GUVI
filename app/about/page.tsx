import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Award, Users, Zap, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-5xl font-bold mb-4 text-balance">About KEC Skill Development Portal</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Empowering students and professionals with world-class technical education and skill development.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide accessible, industry-aligned, and comprehensive skill development programs that 
                empower students and professionals to build successful careers in the technology industry.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading platform for technical skill development, recognized globally for producing 
                competent professionals who drive innovation and technology adoption across industries.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Commitment to highest quality in education and training
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a collaborative learning environment for all
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously adapting to latest industry trends and technologies
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Creating meaningful career opportunities for our learners
                </p>
              </Card>
            </div>
          </div>

          {/* About KEC */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">About Kongu Engineering College</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Kongu Engineering College is a premier educational institution dedicated to producing industry-ready engineers 
              and technical professionals. With a strong focus on practical learning, innovation, and career development, 
              KEC has been a trusted name in technical education for years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This Skill Development Portal is an initiative by KEC to extend quality technical education beyond campus, 
              making it accessible to students worldwide. Our experienced faculty and industry partners ensure that all courses 
              are relevant, up-to-date, and aligned with current industry demands.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Instructors</h3>
                    <p className="text-muted-foreground">Learn from industry professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Flexible Learning</h3>
                    <p className="text-muted-foreground">Learn at your own pace with lifetime course access</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Recognized Certificates</h3>
                    <p className="text-muted-foreground">Earn verified certificates valued by top companies</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Hands-on Projects</h3>
                    <p className="text-muted-foreground">Build real-world projects to strengthen your portfolio</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Career Support</h3>
                    <p className="text-muted-foreground">Get guidance for interviews and job placements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Community Support</h3>
                    <p className="text-muted-foreground">Connect with peers and get help from mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              Have questions? We'd love to hear from you. Reach out to our support team anytime.
            </p>
            <div className="space-y-2">
              <p className="text-lg"><span className="font-semibold">Email:</span> support@kec.edu.in</p>
              <p className="text-lg"><span className="font-semibold">Phone:</span> +91 (0) 123-456-7890</p>
              <p className="text-lg"><span className="font-semibold">Address:</span> Kongu Engineering College, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
