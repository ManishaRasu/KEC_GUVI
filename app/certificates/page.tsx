'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Share2, Award } from 'lucide-react'

const certificateData = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    issueDate: '2024-12-10',
    expiryDate: 'No Expiry',
    credentialId: 'KEC-WDF-2024-12-10-001',
    instructor: 'John Smith',
  },
  {
    id: 2,
    title: 'JavaScript ES6+ Complete Guide',
    issueDate: '2024-11-05',
    expiryDate: 'No Expiry',
    credentialId: 'KEC-JSEG-2024-11-05-002',
    instructor: 'Sarah Johnson',
  },
  {
    id: 3,
    title: 'React Intermediate Patterns',
    issueDate: '2024-10-20',
    expiryDate: 'No Expiry',
    credentialId: 'KEC-RIP-2024-10-20-003',
    instructor: 'Mike Chen',
  },
]

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Certificates</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Download, share, and verify your course completion certificates
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">{certificateData.length}</p>
              <p className="text-sm text-muted-foreground">Certificates Earned</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Verified Certificates</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">Valid</p>
              <p className="text-sm text-muted-foreground">No Expiry</p>
            </Card>
          </div>

          {/* Certificates List */}
          <h2 className="text-2xl font-bold mb-6">Your Certificates</h2>
          <div className="space-y-6">
            {certificateData.map((cert) => (
              <Card key={cert.id} className="overflow-hidden">
                <div className="md:flex">
                  {/* Certificate Preview */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-6 flex items-center justify-center min-h-64 md:min-h-80">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="font-semibold text-foreground">Certificate</p>
                      <p className="text-xs text-muted-foreground mt-2">{cert.credentialId}</p>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{cert.title}</h3>

                      <div className="space-y-3 mb-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Issued Date</p>
                            <p className="font-semibold">{cert.issueDate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Instructor</p>
                            <p className="font-semibold">{cert.instructor}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Credential ID</p>
                            <p className="font-mono text-sm">{cert.credentialId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Expiry</p>
                            <Badge variant="outline">{cert.expiryDate}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 sm:flex-none bg-transparent" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button className="flex-1 sm:flex-none bg-transparent" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Certificate
                      </Button>
                      <Button className="flex-1 sm:flex-none bg-transparent" variant="outline">
                        Verify Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* How to Use */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">How to Use Your Certificates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-3">1</div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground">
                  Download your certificate as a PDF file from this page.
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-3">2</div>
                <h3 className="font-semibold mb-2">Share</h3>
                <p className="text-sm text-muted-foreground">
                  Share your certificates on LinkedIn and other professional networks.
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-3">3</div>
                <h3 className="font-semibold mb-2">Verify</h3>
                <p className="text-sm text-muted-foreground">
                  Others can verify the authenticity of your certificates online.
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
