import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Calendar, Coffee, Presentation, Award, BookOpen } from 'lucide-react'

export default function SchedulePage() {
  const schedule = [
    {
      day: "April 10-11, 2026",
      date: "Friday-Saturday",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Registration ",
          location: "Main Lobby",
          type: "Registration",
          speaker: "",
          icon: Coffee,
          color: "bg-amber-100 text-amber-800",
        },
        // {
        //   time: "9:00 AM - 10:30 AM",
        //   title: "Opening Ceremony & Keynote Address",
        //   location: "Main Auditorium",
        //   type: "Keynote",
        //   speaker: "Prof. Dr. M. Shridhar",
        //   icon: Award,
        //   color: "bg-green-100 text-green-700",
        // },
        // {
        //   time: "10:30 AM - 11:00 AM",
        //   title: "Networking Coffee Break",
        //   location: "Exhibition Hall",
        //   type: "Break",
        //   speaker: "",
        //   icon: Coffee,
        //   color: "bg-gray-100 text-gray-800",
        // },
        // {
        //   time: "11:00 AM - 12:30 PM",
        //   title: "AI & Machine Learning Session",
        //   location: "Conference Room A",
        //   type: "Technical Session",
        //   speaker: "Multiple Speakers",
        //   icon: Presentation,
        //   color: "bg-green-100 text-green-800",
        // },
        // {
        //   time: "12:30 PM - 1:30 PM",
        //   title: "Lunch & Poster Session",
        //   location: "Dining Hall",
        //   type: "Lunch",
        //   speaker: "",
        //   icon: Users,
        //   color: "bg-orange-100 text-orange-800",
        // },
        // {
        //   time: "1:30 PM - 3:00 PM",
        //   title: "Smart Systems & IoT Panel",
        //   location: "Conference Room B",
        //   type: "Panel Discussion",
        //   speaker: "Industry Experts",
        //   icon: BookOpen,
        //   color: "bg-purple-100 text-purple-800",
        // },
        // {
        //   time: "3:00 PM - 3:30 PM",
        //   title: "Refreshment Break",
        //   location: "Exhibition Hall",
        //   type: "Break",
        //   speaker: "",
        //   icon: Coffee,
        //   color: "bg-gray-100 text-gray-800",
        // },
        // {
        //   time: "3:30 PM - 5:00 PM",
        //   title: "Power Electronics Workshop",
        //   location: "Workshop Room 1",
        //   type: "Workshop",
        //   speaker: "Prof. Dr. Po-Ming Lee",
        //   icon: Presentation,
        //   color: "bg-teal-100 text-teal-800",
        // },
      ],
    },
    // {
    //   day: "Day 2 - July 19, 2025",
    //   date: "Saturday",
    //   events: [
    //     {
    //       time: "9:00 AM - 10:30 AM",
    //       title: "Robotics & Automation Keynote",
    //       location: "Main Auditorium",
    //       type: "Keynote",
    //       speaker: "Prof. Dr. Kyung Tae Kim",
    //       icon: Award,
    //       color: "bg-green-100 text-green-700",
    //     },
    //     {
    //       time: "10:30 AM - 11:00 AM",
    //       title: "Networking Break",
    //       location: "Exhibition Hall",
    //       type: "Break",
    //       speaker: "",
    //       icon: Coffee,
    //       color: "bg-gray-100 text-gray-800",
    //     },
    //     {
    //       time: "11:00 AM - 12:30 PM",
    //       title: "Knowledge Engineering Symposium",
    //       location: "Conference Room A",
    //       type: "Symposium",
    //       speaker: "Research Scholars",
    //       icon: BookOpen,
    //       color: "bg-indigo-100 text-indigo-800",
    //     },
    //     {
    //       time: "12:30 PM - 1:30 PM",
    //       title: "Awards Lunch Ceremony",
    //       location: "Banquet Hall",
    //       type: "Awards",
    //       speaker: "",
    //       icon: Award,
    //       color: "bg-yellow-100 text-yellow-800",
    //     },
    //     {
    //       time: "1:30 PM - 3:00 PM",
    //       title: "Research Paper Presentations",
    //       location: "Multiple Rooms",
    //       type: "Presentations",
    //       speaker: "Selected Authors",
    //       icon: Presentation,
    //       color: "bg-green-100 text-green-800",
    //     },
    //     {
    //       time: "3:00 PM - 4:00 PM",
    //       title: "Closing Ceremony & Future Directions",
    //       location: "Main Auditorium",
    //       type: "Closing",
    //       speaker: "Conference Committee",
    //       icon: Award,
    //       color: "bg-red-100 text-red-800",
    //     },
    //   ],
    // },
  ]

  const stats = [
    { icon: Calendar, value: "2", label: "Conference Days", color: "text-green-700" },
    // { icon: Users, value: "50+", label: "Expert Speakers", color: "text-green-600" },
    { icon: Presentation, value: "100+", label: "Paper Presentations", color: "text-purple-600" },
    { icon: MapPin, value: "5", label: "Parallel Venues", color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
      <Navbar />

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                <span>Event Timeline</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-green-700 to-green-700 bg-clip-text text-transparent mb-4">
                Conference Schedule
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed program for IQCCT'26 featuring keynotes, technical sessions, and networking opportunities
              </p>
            </div>

            {/* Schedule Overview Stats */}
            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-3 ${stat.color}`}>
                        <stat.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-1">{stat.value}</h3>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Detailed Schedule */}
            <section>
              <div className="space-y-8">
                {schedule.map((day, dayIndex) => (
                  <div key={dayIndex}>
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-3 bg-green-700 text-white px-6 py-3 rounded-lg shadow-md">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <h2 className="text-2xl font-bold">{day.day}</h2>
                          <p className="text-sm text-green-100">{day.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {day.events.map((event, eventIndex) => (
                        <Card key={eventIndex} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-0 overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              {/* Time Section */}
                              <div className="bg-gradient-to-br from-green-700 to-green-800 text-white px-6 py-4 md:w-40 flex flex-col justify-center">
                                <div className="flex items-center space-x-2 text-green-100 text-xs mb-1">
                                  <Clock className="w-4 h-4" />
                                  <span className="font-semibold">TIME</span>
                                </div>
                                <p className="text-base font-bold">{event.time}</p>
                              </div>

                              {/* Event Details */}
                              <div className="flex-1 p-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-full ${event.color.replace('text-', 'bg-').replace('-800', '-100')}`}>
                                      <event.icon className={`w-5 h-5 ${event.color}`} />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                                      <Badge className={`${event.color} text-xs`}>{event.type}</Badge>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-green-700 flex-shrink-0" />
                                    <span className="font-medium">{event.location}</span>
                                  </div>
                                  {event.speaker && (
                                    <div className="flex items-center space-x-2">
                                      <Users className="w-4 h-4 text-green-700 flex-shrink-0" />
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
            <section className="mt-14">
              <Card className="bg-gradient-to-r from-green-700 to-green-800 text-white hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Download Complete Schedule</h2>
                      </div>
                      <p className="text-green-100">Get the full conference program with detailed timings and venue information</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-white text-green-700 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Download PDF
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap">
                        <Users className="w-4 h-4 inline mr-2" />
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
