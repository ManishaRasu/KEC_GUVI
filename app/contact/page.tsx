'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-lg text-white/90">
            Have questions about DevOps courses or the KEC × GUVI partnership?
            We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* KEC Support */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">KEC Campus</h3>
              <p className="text-muted-foreground mb-4">
                Kongu Engineering College
                <br />
                Perundurai, Erode
                <br />
                Tamil Nadu, India
              </p>
              <a href="tel:+914294226400" className="text-primary hover:underline">
                +91 429 422 6400
              </a>
            </Card>

            {/* KEC Email Support */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">KEC Support</h3>
              <p className="text-muted-foreground mb-4">
                Email us for academic queries and admission support
              </p>
              <a
                href="mailto:support@kec.ac.in"
                className="text-primary hover:underline font-medium"
              >
                support@kec.ac.in
              </a>
            </Card>

            {/* GUVI Support */}
            <Card className="p-8 text-center hover:shadow-lg transition">
              <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GUVI Support</h3>
              <p className="text-muted-foreground mb-4">
                Contact GUVI for course-related assistance and DevOps training
              </p>
              <a
                href="mailto:courses@guvi.in"
                className="text-secondary hover:underline font-medium"
              >
                courses@guvi.in
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 bg-muted/30">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Course inquiry, Placement support, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={submitted}
                >
                  <Send size={18} />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>

                {submitted && (
                  <p className="text-green-600 text-center font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </Card>

            {/* Quick Links */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/courses"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <span className="text-primary">→</span> Explore All Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schedule"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <span className="text-primary">→</span> View Class Schedule
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <span className="text-primary">→</span> About KEC × GUVI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/certificates"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <span className="text-primary">→</span> Certificate Programs
                    </Link>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Response Time</h3>
                <p className="text-muted-foreground mb-4">
                  We aim to respond to all inquiries within 24 hours during business hours.
                  For urgent matters, please call directly.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
