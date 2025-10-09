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
      icon: Calendar,
      title: "Early Bird Registration",
      date: "March 20, 2026",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Conference Date",
      date: "April 10-11, 2026",
      color: "text-green-600",
    },
  ]

  // 8 Tracks with Topics
  const tracks = [
    {
      title: "Quantum Computing",
      image: "/quantum-computing-circuit.png",
      topics: [
        "Quantum Computing Architectures & Algorithms",
        "Quantum Communication Protocols",
        "Quantum Sensing & Metrology",
        "Post-Quantum Cryptography",
        "Quantum Cryptographic Systems",
        "Privacy and Trust in Quantum Networks",
        "Quantum Computing Architectures & Algorithms",
        "Quantum Communication Protocols",
        "Quantum Sensing & Metrology",
        "Quantum Internet & Satellite Communication",
      ],
    },
    {
      title: "Communication Technologies",
      image: "/5g-wireless-networks.png",
      topics: [
        "mmWave and THz Communication",
        "Massive MIMO and Beamforming",
        "6G Vision: AI-native, Holographic, and Semantic Layers",
        "Next-Gen Communication Systems From 5G to 6G and Beyond",
        "Advances in Wireless and Optical Communication",
        "Intelligent Protocols for Adaptive Communication",
        "Quantum-Safe Communication Architectures for the Post-Quantum Era",
        "Inclusive Communication Technologies for Assistive and Remote Access",
      ],
    },
    {
      title: "Quantum Computing and VLSI",
      image: "/qav.jpg",
      topics: [
        "Design methodologies for quantum-compatible VLSI circuits",
        "VLSI implementation of quantum error correction circuits",
        "Fabrication techniques for quantum-VLSI hybrid chips",
        "Low-power VLSI design for quantum control electronics",
        "Timing and synchronization challenges in quantum-VLSI systems",
        "Fault-tolerant VLSI design for quantum computing applications",
        "Quantum accelerators embedded in classical VLSI chips",
        "VLSI design for quantum machine learning processors",
      ],
    },
    {
      title: "Quantum Computing with AI and ML",
      image: "/qaai.jpg",
      topics: [
        "Quantum machine learning Algorithms and architectures",
        "Quantum-enhanced neural networks and deep learning",
        "Quantum data encoding and feature extraction",
        "Quantum support vector machines and classifiers",
        "Quantum reinforcement learning for dynamic systems",
        "Quantum generative models QGANs and beyond",
        "Quantum optimization for ML hyperparameter tuning",
        "Simulating quantum systems using ML techniques",
        "ML-driven error mitigation in quantum processors",
      ],
    },
    {
      title: "Quantum and IoT",
      image: "/iot-devices-network.png",
      topics: [
        "Quantum-safe cryptography for IoT networks",
        "Quantum key distribution (QKD) in IoT environments",
        "Quantum-IoT hybrid system architectures",
        "Embedding quantum sensors in IoT devices",
        "Quantum communication protocols for IoT",
        "Quantum entanglement for ultra-reliable IoT data transfer",
        "Quantum machine learning for IoT data streams",
        "Quantum-enhanced anomaly detection in sensor networks",
        "Quantum-IoT in healthcare monitoring systems",
        "Quantum IoT for energy grid optimization",
      ],
    },
    {
      title: "Communication System and VLSI",
      image: "/cav.jpg",
      topics: [
        "VLSI implementation of MIMO systems for 5G and 6G",
        "VLSI-based error correction coding (ECC) for high-speed data transmission",
        "ASIC/FPGA design for communication protocols",
        "VLSI design for real-time DSP in communication",
        "VLSI-based adaptive filters for noise reduction",
        "Machine learning integration in VLSI for smart communication",
        "Neuromorphic VLSI for next-gen communication systems",
        "VLSI design for mmWave and terahertz communication",
        "VLSI circuits for IoT and edge communication devices",
        "Quantum VLSI for secure communication systems",
      ],
    },
    {
      title: "Communication with AI and ML",
      image: "/comwithAI.jpg",
      topics: [
        "AI-driven optimization in wireless networks",
        "ML-based adaptive modulation and coding",
        "Reinforcement learning for dynamic spectrum access",
        "AI for predictive network traffic management",
        "Neural networks for channel estimation in MIMO systems",
        "Federated learning for edge communication devices",
        "AI-powered network slicing in software-defined networks (SDN)",
        "AI in satellite and space communication",
        "AI-powered drone-to-drone communication systems",
        "Smart vehicular communication using deep learning",
      ],
    },
    {
      title: "Communication Systems and IoT",
      image: "/comwithIOT.jpg",
      topics: [
        "Low-power wide-area networks (LPWAN) for IoT",
        "5G and 6G integration with IoT devices",
        "Secure communication protocols for medical IoT",
        "Blockchain for decentralized IoT communication",
        "Edge AI for real-time decision-making in IoT systems",
        "IoT communication in smart cities: traffic, lighting, and waste management",
        "Industrial IoT (IIoT): predictive maintenance and automation",
        "IoT-enabled healthcare communication systems",
        "Interoperability challenges in multi-protocol IoT systems",
        "The Future of IoT Communication: Beyond 6G",
      ],
    },
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-6 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-lg border border-gray-200 rounded-lg">
            <CardContent className="p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-10">
              
              {/* Header Section */}
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-4 sm:mb-6">
                  Call for Papers
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
                  IQCCT'26 - International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies
                </p>
              </div>

              {/* Research Tracks */}
              <div className="space-y-8 sm:space-y-10">
                {tracks.map((track, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700"
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        {index % 2 === 0 ? (
                          <>
                            <div className="relative h-48 sm:h-56 lg:h-64 bg-green-600 rounded-lg overflow-hidden">
                              <Image
                                src={track.image}
                                alt={track.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 sm:mb-6">{track.title}</h2>
                              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                                {track.topics.map((topic, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 sm:mb-6">{track.title}</h2>
                              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                                {track.topics.map((topic, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="relative h-48 sm:h-56 lg:h-64 bg-green-600 rounded-lg overflow-hidden">
                              <Image
                                src={track.image}
                                alt={track.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Important Dates & Additional Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                
                {/* Important Dates */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-6 flex items-center space-x-2 sm:space-x-3">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Important Dates</span>
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {dates.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 bg-gray-50 rounded-lg">
                          <div className={`p-2 sm:p-3 rounded-full bg-white ${item.color} shadow-sm`}>
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-green-700 text-sm sm:text-base mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm font-medium">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Follow Us */}
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 sm:mb-6">Follow IQCCT'25</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          <span className="font-medium text-sm sm:text-base">LinkedIn Updates</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                          <span className="font-medium text-sm sm:text-base">Instagram</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                          <span className="font-medium text-sm sm:text-base">Conference Website</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resources */}
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 sm:mb-6">Resources</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <span className="text-xl sm:text-2xl">📄</span>
                          <span className="font-medium text-sm sm:text-base">Conference Brochure</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <span className="text-xl sm:text-2xl">📋</span>
                          <span className="font-medium text-sm sm:text-base">Submission Guidelines</span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors duration-200">
                          <span className="text-xl sm:text-2xl">📝</span>
                          <span className="font-medium text-sm sm:text-base">Paper Template</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Publication Opportunity */}
      <div className="text-center px-4 sm:px-6 lg:px-8 mb-8">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Publication Opportunity</h2>
            <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-4">
              Accepted papers will be published in SCOPUS Indexed AIP/IEEE/Springer Conference Proceedings.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Authors are invited to submit high-quality research papers on Communications and Quantum
              Technologies, including but not limited to the above tracks.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
