"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Globe } from "lucide-react"

export default function InteractiveStats() {
  const [counts, setCounts] = useState({ students: 0, courses: 0, awards: 0, countries: 0 })

  const finalCounts = { students: 10000, courses: 500, awards: 50, countries: 25 }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, finalValue),
        }))
      }, stepDuration)
    })

    setTimeout(() => {
      timers.forEach((timer) => clearInterval(timer))
      setCounts(finalCounts)
    }, duration)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  const stats = [
    {
      icon: Users,
      value: Math.floor(counts.students),
      suffix: "+",
      label: "Students Worldwide",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: BookOpen,
      value: Math.floor(counts.courses),
      suffix: "+",
      label: "Courses Available",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Award,
      value: Math.floor(counts.awards),
      suffix: "+",
      label: "Awards Won",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Globe,
      value: Math.floor(counts.countries),
      suffix: "+",
      label: "Countries Reached",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d2561]">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we're making a difference in education worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#0d2561]">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
