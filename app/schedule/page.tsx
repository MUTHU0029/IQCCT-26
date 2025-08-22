import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Calendar, Coffee, Presentation, Award, BookOpen } from 'lucide-react'

export default function SchedulePage() {
  const schedule = [
    {
      day: "Day 1 - July 18, 2025",
      date: "Friday",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Registration & Welcome Coffee",
          location: "Main Lobby",
          type: "Registration",
          speaker: "",
          icon: Coffee,
          color: "bg-amber-100 text-amber-800",
        },
        {
          time: "9:00 AM - 10:30 AM",
          title: "Opening Ceremony & Keynote Address",
          location: "Main Auditorium",
          type: "Keynote",
          speaker: "Prof. Dr. M. Shridhar",
          icon: Award,
          color: "bg-green-100 text-green-700",
        },
        {
          time: "10:30 AM - 11:00 AM",
          title: "Networking Coffee Break",
          location: "Exhibition Hall",
          type: "Break",
          speaker: "",
          icon: Coffee,
          color: "bg-gray-100 text-gray-800",
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "AI & Machine Learning Session",
          location: "Conference Room A",
          type: "Technical Session",
          speaker: "Multiple Speakers",
          icon: Presentation,
          color: "bg-green-100 text-green-800",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch & Poster Session",
          location: "Dining Hall",
          type: "Lunch",
          speaker: "",
          icon: Users,
          color: "bg-orange-100 text-orange-800",
        },
        {
          time: "1:30 PM - 3:00 PM",
          title: "Smart Systems & IoT Panel",
          location: "Conference Room B",
          type: "Panel Discussion",
          speaker: "Industry Experts",
          icon: BookOpen,
          color: "bg-purple-100 text-purple-800",
        },
        {
          time: "3:00 PM - 3:30 PM",
          title: "Refreshment Break",
          location: "Exhibition Hall",
          type: "Break",
          speaker: "",
          icon: Coffee,
          color: "bg-gray-100 text-gray-800",
        },
        {
          time: "3:30 PM - 5:00 PM",
          title: "Power Electronics Workshop",
          location: "Workshop Room 1",
          type: "Workshop",
          speaker: "Prof. Dr. Po-Ming Lee",
          icon: Presentation,
          color: "bg-teal-100 text-teal-800",
        },
      ],
    },
    {
      day: "Day 2 - July 19, 2025",
      date: "Saturday",
      events: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Robotics & Automation Keynote",
          location: "Main Auditorium",
          type: "Keynote",
          speaker: "Prof. Dr. Kyung Tae Kim",
          icon: Award,
          color: "bg-green-100 text-green-700",
        },
        {
          time: "10:30 AM - 11:00 AM",
          title: "Networking Break",
          location: "Exhibition Hall",
          type: "Break",
          speaker: "",
          icon: Coffee,
          color: "bg-gray-100 text-gray-800",
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "Knowledge Engineering Symposium",
          location: "Conference Room A",
          type: "Symposium",
          speaker: "Research Scholars",
          icon: BookOpen,
          color: "bg-indigo-100 text-indigo-800",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Awards Lunch Ceremony",
          location: "Banquet Hall",
          type: "Awards",
          speaker: "",
          icon: Award,
          color: "bg-yellow-100 text-yellow-800",
        },
        {
          time: "1:30 PM - 3:00 PM",
          title: "Research Paper Presentations",
          location: "Multiple Rooms",
          type: "Presentations",
          speaker: "Selected Authors",
          icon: Presentation,
          color: "bg-green-100 text-green-800",
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Closing Ceremony & Future Directions",
          location: "Main Auditorium",
          type: "Closing",
          speaker: "Conference Committee",
          icon: Award,
          color: "bg-red-100 text-red-800",
        },
      ],
    },
  ]

  const stats = [
    { icon: Calendar, value: "2", label: "Conference Days", color: "text-green-700" },
    { icon: Users, value: "50+", label: "Expert Speakers", color: "text-green-600" },
    { icon: Presentation, value: "100+", label: "Paper Presentations", color: "text-purple-600" },
    { icon: MapPin, value: "5", label: "Parallel Venues", color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-green-700 mb-6">Conference Schedule</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Detailed program for IQCCT'26 featuring keynotes, technical sessions, and networking opportunities
                  </p>
                </div>

                {/* Schedule Overview Stats */}
                <section className="mb-16">
                  <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                      <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                        <CardContent className="p-8">
                          <div className={`inline-flex p-4 rounded-full bg-gray-50 mb-4 ${stat.color}`}>
                            <stat.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-3xl font-bold mb-2 text-green-700">{stat.value}</h3>
                          <p className="text-gray-600 font-medium">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Detailed Schedule */}
                <section>
                  <div className="space-y-16">
                    {schedule.map((day, dayIndex) => (
                      <div key={dayIndex}>
                        <div className="text-center mb-12">
                          <Card className="inline-block hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-700">
                            <CardContent className="px-12 py-6">
                              <h2 className="text-3xl font-bold text-green-700 mb-2">{day.day}</h2>
                              <p className="text-lg text-gray-600">{day.date}</p>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="space-y-6">
                          {day.events.map((event, eventIndex) => (
                            <Card key={eventIndex} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row">
                                  {/* Time Section */}
                                  <div className="bg-gradient-to-br from-green-700 to-green-700 text-white p-6 md:w-48 flex flex-col justify-center">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <Clock className="w-5 h-5" />
                                      <span className="font-semibold">Time</span>
                                    </div>
                                    <p className="text-lg font-bold">{event.time}</p>
                                  </div>

                                  {/* Event Details */}
                                  <div className="flex-1 p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                        <div className={`p-3 rounded-full ${event.color.replace('text-', 'bg-').replace('-800', '-100')}`}>
                                          <event.icon className={`w-6 h-6 ${event.color}`} />
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-bold text-green-700 mb-1">{event.title}</h3>
                                          <Badge className={event.color}>{event.type}</Badge>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                                      <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4 text-green-700" />
                                        <span className="font-medium">{event.location}</span>
                                      </div>
                                      {event.speaker && (
                                        <div className="flex items-center space-x-2">
                                          <Users className="w-4 h-4 text-green-700" />
                                          <span className="font-medium">{event.speaker}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Download Schedule */}
                <section className="mt-20 text-center">
                  <Card className="max-w-3xl mx-auto bg-gradient-to-r from-green-700 to-green-700 text-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-12">
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <Calendar className="w-8 h-8" />
                        <h2 className="text-3xl font-bold">Download Complete Schedule</h2>
                      </div>
                      <p className="text-xl mb-8 opacity-90">Get the full conference program with detailed timings and venue information</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-700 hover:bg-gray-100 py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Download PDF Schedule
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300">
                          <Users className="w-5 h-5 inline mr-2" />
                          Add to Calendar
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
