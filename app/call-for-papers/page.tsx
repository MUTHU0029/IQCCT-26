import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Send, CheckCircle, Users, Linkedin, Instagram, Globe } from "lucide-react"
import Image from "next/image"

export default function CallForPapersPage() {
  const dates = [
    {
      icon: Send,
      title: "Paper Submission Deadline",
      date: "January 31, 2026",
      color: "text-green-600",
    },
    {
      icon: CheckCircle,
      title: "Notification of Acceptance",
      date: "February 20, 2026",
      color: "text-green-600",
    },
    {
      icon: Calendar,
      title: "Camera-Ready Submission",
      date: "March 1, 2026",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Conference Date",
      date: "April 10-11, 2026",
      color: "text-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                <div className="space-y-12">
                  {/* Header Section */}
                  <div className="text-center">
                    <h1 className="text-5xl font-bold text-green-700 mb-8">Call for Papers</h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      IQCCT'25 - International Conference on Communications and Quantum Technologies
                    </p>
                  </div>

                  {/* Publication Info */}
                 

                  {/* Research Tracks */}
                  <div className="space-y-12">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="relative h-64 bg-green-600 rounded-lg overflow-hidden">
                            <Image
                              src="/5g-wireless-networks.png"
                              alt="5G Wireless Networks and Communications"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-green-700 mb-6">
                              Track 1: Advanced Communications Technologies
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>5G/6G Wireless Communication Systems</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Massive MIMO and Beamforming Technologies</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Software-Defined Networking (SDN) and NFV</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Optical Communication and Photonics</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Satellite Communication and Space Networks</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>IoT and Machine-to-Machine Communications</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="order-2 lg:order-1">
                            <h2 className="text-2xl font-bold text-green-700 mb-6">
                              Track 2: Quantum Technologies & Computing
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Communication and Cryptography</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Computing Algorithms and Applications</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Key Distribution (QKD) Systems</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Error Correction and Fault Tolerance</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Machine Learning and AI</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Sensors and Metrology</span>
                              </li>
                            </ul>
                          </div>
                          <div className="relative h-64 bg-purple-600 rounded-lg overflow-hidden order-1 lg:order-2">
                            <Image
                              src="/quantum-computing-circuit.png"
                              alt="Quantum Computing Circuit"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="relative h-64 bg-green-600 rounded-lg overflow-hidden">
                            <Image
                              src="/iot-devices-network.png"
                              alt="IoT Devices Network and Hybrid Systems"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-green-700 mb-6">
                              Track 3: Hybrid Communication-Quantum Systems
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum-Enhanced Communication Networks</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Post-Quantum Cryptography for 5G/6G</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum Internet and Distributed Computing</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Security in Quantum Communication Systems</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Quantum-Classical Interface Technologies</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span>Network Protocols for Quantum Communications</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Important Dates and Additional Info */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Important Dates */}
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center space-x-3">
                          <Calendar className="w-6 h-6" />
                          <span>Important Dates</span>
                        </h3>
                        <div className="space-y-6">
                          {dates.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                              <div className={`p-3 rounded-full bg-white ${item.color} shadow-sm`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-green-700 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-lg font-medium">{item.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Information */}
                    <div className="space-y-8">
                      {/* Follow Us */}
                      <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-green-700 mb-6">Follow IQCCT'25</h3>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <Linkedin className="w-6 h-6 text-blue-600" />
                              <span className="font-medium">LinkedIn Updates</span>
                            </div>
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <Instagram className="w-6 h-6 text-pink-600" />
                              <span className="font-medium">Instagram</span>
                            </div>
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <Globe className="w-6 h-6 text-green-600" />
                              <span className="font-medium">Conference Website</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* More Details */}
                      <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-green-700 mb-6">Resources</h3>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <span className="text-2xl">📄</span>
                              <span className="font-medium">Conference Brochure</span>
                            </div>
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <span className="text-2xl">📋</span>
                              <span className="font-medium">Submission Guidelines</span>
                            </div>
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                              <span className="text-2xl">📝</span>
                              <span className="font-medium">Paper Template</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
       <div className="text-center">
                    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200">
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-green-700 mb-4">Publication Opportunity</h2>
                        <p className="text-lg font-semibold text-gray-900 mb-4">
                          Accepted papers will be published in SCOPUS Indexed AIP/IEEE/Springer Conference Proceedings.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Authors are invited to submit high-quality research papers on Communications and Quantum
                          Technologies, including but not limited to the following tracks:
                        </p>
                      </CardContent>
                    </Card>
                  </div>
      <Footer />
    </div>
  )
}
