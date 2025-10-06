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
<div className="space-y-6 text-gray-700 leading-relaxed text-justify">
  <p>
    The International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies (IQCCT'26) is a distinguished event hosted by KPR Institute of Engineering and Technology (KPRIET). This conference provides a vibrant forum for researchers, scholars, industry experts, and students to present their innovative work and breakthroughs in the fields of communication, quantum computing, quantum cryptography, and next-generation quantum technologies.
  </p>

  <p>
    With the swift advancement of quantum technologies and next-generation communication systems, areas such as quantum computing, quantum communication, 5G/6G networks, IoT-based communications, and quantum cryptography are shaping innovation across diverse industries. IQCCT'26 is designed to foster meaningful dialogue, knowledge exchange, and collaborative opportunities through keynote talks, technical sessions, and interactive workshops conducted by leading experts in quantum technologies and communication domains.
  </p>

  <p>
    We cordially invite researchers, academicians, and technology enthusiasts to participate in IQCCT'26 at KPRIET. Together, let us delve into pioneering ideas in quantum technologies, advance next-generation communication systems, and contribute to shaping the future of quantum-driven innovations.
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

      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">
              Accepted papers will be published in SCOPUS Indexed AIP/IEEE/Springer Conference Proceedings.
            </h1>

            <div className="flex justify-center items-center space-x-6 flex-wrap gap-8">
              <div className="flex items-center">
                <Image src="/Scopus_logo-MoAY4mVa.svg" alt="Scopus" width={200} height={120} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/ieesb-sUBJznvs.png" alt="IEEE" width={200} height={120} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/springer.jpg" alt="Springer" width={200} height={120} className="object-contain" />
              </div>
              <div className="flex items-center">
                <Image src="/download.jpg" alt="AIP" width={200} height={120} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <KeynoteSpeakers />

      {/* Countdown Timer Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-6">
          <CountdownTimer/>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join IQCCT'26</h2>
          <p className="text-xl mb-8 opacity-90">
            Submit your research paper in International Conference on Recent Advances in Interdisciplinary
Quantum Computing and Communication Technologies(IQCCT'26)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/7yVFpyZst52WZGNr9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
