'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
    setIsDark(!isDark)
  }

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            KEC
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">KEC Portal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/courses" className="text-foreground hover:text-primary transition">
            Courses
          </Link>
          <Link href="/schedule" className="text-foreground hover:text-primary transition">
            Schedule
          </Link>
          <Link href="/leaderboard" className="text-foreground hover:text-primary transition">
            Leaderboard
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-muted rounded-lg transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-4">
          <Link href="/courses" className="block text-foreground hover:text-primary">
            Courses
          </Link>
          <Link href="/schedule" className="block text-foreground hover:text-primary">
            Schedule
          </Link>
          <Link href="/leaderboard" className="block text-foreground hover:text-primary">
            Leaderboard
          </Link>
          <Link href="/about" className="block text-foreground hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="block text-foreground hover:text-primary">
            Contact
          </Link>
          <div className="flex items-center gap-2 py-2">
            <span className="text-sm text-muted-foreground flex-1">Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-muted rounded-lg transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="flex gap-2 pt-4">
            <Link href="/login" className="flex-1">
              <Button variant="outline" className="w-full bg-transparent">
                Login
              </Button>
            </Link>
            <Link href="/register" className="flex-1">
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
