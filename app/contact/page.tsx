"use client"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "KPR Institute of Engineering and Technology",
        "Avinashi Road, Arasur, Coimbatore - 641407",
        "Tamil Nadu, India",
      ],
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        // "Main Office: +91 9944032043",
        "Conference Desk: +91 9944032043",
        "Available: Mon-Fri, 9 AM - 4 PM",
      ],
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        // "General: info@kpriet.ac.in",
        "iqcct26@kpriet.ac.in",
        // "Registration: registration@kpriet.ac.in",
      ],
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-10 pb-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-700 via-green-700 to-green-700 bg-clip-text text-transparent mb-6">
              Contact IQCCT'26
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about the International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies? We're here
              to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                  <CardHeader className="bg-green-700 text-white p-8">
                    <CardTitle className="text-3xl flex items-center space-x-3">
                      <Send className="w-8 h-8" />
                      <span>Send us a Message</span>
                    </CardTitle>
                    <p className="text-green-100 mt-2 text-lg">We'll respond within 24 hours</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full h-14 border-2 border-gray-200 focus:border-green-700 focus:ring-2 focus:ring-green-200 rounded-xl transition-all duration-200 text-lg"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-14 border-2 border-gray-200 focus:border-green-700 focus:ring-2 focus:ring-green-200 rounded-xl transition-all duration-200 text-lg"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-14 border-2 border-gray-200 focus:border-green-700 focus:ring-2 focus:ring-green-200 rounded-xl transition-all duration-200 text-lg"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                          Message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full h-48 border-2 border-gray-200 focus:border-green-700 focus:ring-2 focus:ring-green-200 rounded-xl resize-none transition-all duration-200 text-lg"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Send className="w-6 h-6 mr-3" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${info.borderColor} overflow-hidden group`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-4 rounded-2xl ${info.bgColor} ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-xl mb-3 ${info.color}`}>{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 mb-2 text-base leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Enhanced Map Section */}
               <Card className="bg-white/80 backdrop-blur-sm overflow-hidden shadow-2xl">
  <CardHeader className="bg-green-700 text-white">
    <CardTitle className="flex items-center space-x-2 text-xl">
      <MapPin className="w-8 h-8" />
      <span>Campus Location</span>
    </CardTitle>
  </CardHeader>

  <CardContent className="p-0">
    <div className="relative w-full h-100">
      {/* Image fully covers the box */}
      <Image
        src="/kpriet1.jpg"   // make sure this file exists in /public
        alt="Campus Location"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Bottom-aligned content that spans full width */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center text-white">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-700/90 rounded-full mb-4 shadow-lg">
          <MapPin className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-1">Visit Our Campus</h3>
        <p className="text-lg font-medium">KPRIET, Coimbatore</p>
        <a
  href="https://www.google.com/maps?q=11.077184404774087,77.14180955122056"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
    <MapPin className="w-4 h-4 mr-2" />
    Open in Google Maps
  </Button>
</a>

      </div>
    </div>
  </CardContent>
</Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
