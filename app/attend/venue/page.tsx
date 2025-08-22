import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Car, Plane, Train, Users, Wifi, Shield } from "lucide-react"

export default function VenuePage() {
  const venueFeatures = [
    {
      title: "Main Auditorium",
      capacity: "500 seats",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: ["Air Conditioned", "Audio/Visual Equipment", "High-Speed WiFi", "Live Streaming Facility"],
    },
    {
      title: "Conference Halls",
      capacity: "3 Halls (150 seats each)",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: ["Projectors & Screens", "Sound System", "Breakout Rooms", "Recording Facility"],
    },
    {
      title: "Exhibition Area",
      capacity: "20 Stalls",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: ["Display Boards", "Power Supply", "Internet Connectivity", "Refreshment Area"],
    },
  ]

  const facilities = [
    { icon: Car, title: "Parking", description: "Ample parking space for 200+ vehicles", color: "text-green-600" },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Unlimited WiFi and connectivity",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Business Center",
      description: "Printing, scanning, and secretarial services",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security and surveillance",
      color: "text-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-green-700 mb-6">Conference Venue</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    KPR Institute of Engineering and Technology - A world-class venue for IQCCT'25 - International
                    Conference on Communications and Quantum Technologies
                  </p>
                </div>

                {/* Venue Overview */}
                <section className="mb-16">
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-700">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h2 className="text-3xl font-bold mb-6 text-green-700">
                            KPR Institute of Engineering and Technology
                          </h2>
                          <div className="space-y-4 text-gray-700">
                            <div className="flex items-start space-x-3">
                              <MapPin className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-semibold">Address:</p>
                                <p>Avinashi Road, Arasur, Coimbatore - 641407</p>
                                <p>Tamil Nadu, India</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Phone className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-semibold">Contact:</p>
                                <p>+91 422 2669000</p>
                                <p>+91 422 2669001</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Mail className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-semibold">Email:</p>
                                <p>info@kpriet.ac.in</p>
                                <p>iqcct2025@kpriet.ac.in</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/collegebg.jpg-7QCy0b95qugjlAY4TQFKw4okeIrtfb.jpeg"
                            alt="KPR Institute Campus - Aerial View"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Transportation */}
                <section className="mb-16">
                  <h2 className="text-4xl font-bold text-center mb-12 text-green-700">How to Reach</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardHeader className="bg-green-50 rounded-t-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-full bg-white">
                            <Plane className="w-6 h-6 text-green-600" />
                          </div>
                          <CardTitle className="text-xl text-green-700">By Air</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          <strong>Coimbatore International Airport</strong>
                          <br />
                          Distance: 25 km (45 minutes)
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Taxi/Cab services available</li>
                          <li>• Airport shuttle service</li>
                          <li>• Car rental facilities</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardHeader className="bg-green-50 rounded-t-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-full bg-white">
                            <Train className="w-6 h-6 text-green-600" />
                          </div>
                          <CardTitle className="text-xl text-green-700">By Train</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          <strong>Coimbatore Junction</strong>
                          <br />
                          Distance: 20 km (40 minutes)
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Well connected to major cities</li>
                          <li>• Taxi/Auto services available</li>
                          <li>• Bus connectivity to campus</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardHeader className="bg-green-50 rounded-t-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-full bg-white">
                            <Car className="w-6 h-6 text-green-600" />
                          </div>
                          <CardTitle className="text-xl text-green-700">By Road</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          <strong>NH 544 (Avinashi Road)</strong>
                          <br />
                          Well connected by highways
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• From Bangalore: 350 km</li>
                          <li>• From Chennai: 500 km</li>
                          <li>• From Kochi: 200 km</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
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
