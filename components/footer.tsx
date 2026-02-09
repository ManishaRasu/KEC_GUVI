import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-foreground">KEC × GUVI</h3>
            <p className="text-sm text-muted-foreground">
              Master DevOps with KEC and GUVI collaboration. Learn industry-standard tools and get certified.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">DevOps Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses" className="hover:text-primary transition">Docker Essentials</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">Kubernetes Fundamentals</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">CI/CD with Jenkins</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition">AWS DevOps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition">About Partnership</Link></li>
              <li><Link href="/schedule" className="hover:text-primary transition">Class Schedule</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              <li><Link href="/leaderboard" className="hover:text-primary transition">Leaderboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Kongu Engineering College × GUVI DevOps Portal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
