"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("news")

  const news = [
    {
      title: "New AI Research Center Opens",
      excerpt: "State-of-the-art facility will advance artificial intelligence research and education.",
      date: "March 15, 2024",
      category: "Research",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "3 min read",
    },
    {
      title: "International Partnership Announced",
      excerpt: "Collaboration with leading universities worldwide to enhance global education.",
      date: "March 12, 2024",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "2 min read",
    },
    {
      title: "Student Innovation Awards 2024",
      excerpt: "Celebrating outstanding student projects and innovations across all disciplines.",
      date: "March 10, 2024",
      category: "Awards",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 min read",
    },
  ]

  const events = [
    {
      title: "Annual Research Symposium",
      date: "April 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "Conference",
    },
    {
      title: "Guest Lecture: Future of Education",
      date: "April 15, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Lecture Hall A",
      type: "Lecture",
    },
    {
      title: "Student Orientation Week",
      date: "April 8-12, 2024",
      time: "Various Times",
      location: "Campus Wide",
      type: "Orientation",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d2561]">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest news, events, and developments at Learn Beyond
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "news" ? "bg-[#0d2561] text-white shadow-md" : "text-gray-600 hover:text-[#0d2561]"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "events" ? "bg-[#0d2561] text-white shadow-md" : "text-gray-600 hover:text-[#0d2561]"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* News Tab */}
        {activeTab === "news" && (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#0d2561] text-white">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-[#0d2561] group-hover:text-[#1a3a7a] transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#0d2561] hover:bg-[#1a3a7a] text-white group-hover:shadow-lg transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="border-[#0d2561] text-[#0d2561]">
                          {event.type}
                        </Badge>
                        <h3 className="text-xl font-semibold text-[#0d2561]">{event.title}</h3>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>📍</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="mt-4 md:mt-0 bg-[#0d2561] hover:bg-[#1a3a7a] text-white">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#0d2561] to-[#1a3a7a] text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest news and updates</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-[#0d2561] hover:bg-gray-100 px-8 py-3">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
