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
    The <b>International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies (IQCCT'26)</b> is a distinguished event hosted by <b>KPR Institute of Engineering and Technology (KPRIET)</b>. This conference provides a vibrant forum for <b>researchers</b>, <b>scholars</b>, <b>industry experts</b>, and <b>students</b> to present their <b>innovative work</b> and <b>breakthroughs</b> in the fields of <b>communication</b>, <b>quantum computing</b>, <b>quantum cryptography</b>, and <b>next-generation quantum technologies</b>.
  </p>

  <p>
    With the swift advancement of <b>quantum technologies</b> and <b>next-generation communication systems</b>, areas such as <b>quantum computing</b>, <b>quantum communication</b>, <b>5G/6G networks</b>, <b>IoT-based communications</b>, and <b>quantum cryptography</b> are shaping <b>innovation</b> across diverse industries. <b>IQCCT'26</b> is designed to foster <b>meaningful dialogue</b>, <b>knowledge exchange</b>, and <b>collaborative opportunities</b> through <b>keynote talks</b>, <b>technical sessions</b>, and <b>interactive workshops</b> conducted by leading <b>experts</b> in <b>quantum technologies</b> and <b>communication domains</b>.
  </p>

  <p>
    We cordially invite <b>researchers</b>, <b>academicians</b>, and <b>technology enthusiasts</b> to participate in <b>IQCCT'26</b> at <b>KPRIET</b>. Together, let us delve into <b>pioneering ideas</b> in <b>quantum technologies</b>, advance <b>next-generation communication systems</b>, and contribute to shaping the <b>future of quantum-driven innovations</b>.
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
