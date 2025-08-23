import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"
import KeynoteSpeakers from "@/components/keynote-speakers"
import ImportantDates from "@/components/important-dates"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Keep the existing Hero Section */}
      <HeroSection />

      {/* Conference Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* About Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-green-700 mb-6 border-l-4 border-green-700 pl-4">
                  About IQCCT'26
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The International Conference on Communications and Quantum Technologies (IQCCT'25) is a prestigious
                    event organized by KPR Institute of Engineering and Technology (KPRIET). This conference serves as a
                    dynamic platform for researchers, academicians, industry professionals, and students to showcase
                    their latest findings and advancements in communications, quantum computing, quantum cryptography,
                    and emerging quantum technologies.
                  </p>

                  <p>
                    With the rapid evolution of quantum technologies and advanced communication systems, fields such as
                    quantum computing, quantum communication, 5G/6G networks, IoT communications, and quantum
                    cryptography are driving innovation across industries. IQCCT'25 aims to facilitate insightful
                    discussions, knowledge sharing, and collaboration through keynote addresses, technical sessions, and
                    interactive workshops led by experts in quantum technologies and communications.
                  </p>

                  <p>
                    We warmly welcome all researchers, scholars, and technology enthusiasts to be a part of IQCCT'25 at
                    KPRIET. Join us as we explore groundbreaking ideas in quantum technologies, advance communication
                    systems, and shape the future of quantum-enabled technologies.
                  </p>
                </div>
              </div>

              {/* Important Dates Sidebar */}
              <div className="lg:col-span-1">
                <ImportantDates />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">
              Accepted papers will be published in SCOPUS Indexed AIP/IEEE/Springer Conference Proceedings.
            </h1>

            <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
              <div className="flex items-center">
                <Image src="/scopus-logo.png" alt="Scopus" width={120} height={60} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/ieee-logo.png" alt="IEEE" width={120} height={60} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/springer-logo.png" alt="Springer" width={120} height={60} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/aip-logo.png" alt="AIP" width={120} height={60} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <KeynoteSpeakers />

      {/* Countdown Timer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <CountdownTimer/>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join IQCCT'25</h2>
          <p className="text-xl mb-8 opacity-90">
            Submit your research paper in Communications and Quantum Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Submit Paper
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
