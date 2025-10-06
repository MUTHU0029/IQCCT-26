import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const kprGroups = [
    { name: "KPR Quantum knits", logo: "/kpr-quantum-logo.png" },
    { name: "KPR Group of Company", logo: "/kpr-group-logo.png" },
    { name: "KPRCAS Institutions", logo: "/kprcas-logo.png" },
    {
      name: "Audi Showroom",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audi-0A7K1zthmpXpDviU3uzS0KTJiILjIr.png",
    },
    {
      name: "KPRIAS Academy",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kpr%20ias.jpg-9nYOt8B55kGCz6LZYxcEuTIEACZ7Cg.jpeg",
    },
    {
      name: "KPRIET Institutions",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kpriet%20logo-2ZbJN1Sf9qibemRScHdX9K44LKLG2u.webp",
    },
    { name: "KPR Sugar Mill Limited", logo: "/sugar-mill-logo.png" },
    { name: "KPR Faso Mens wear", logo: "/faso-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                
                {/* About AICTE Section */}
                <section className="mb-24">
                  <h1 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    About AICTE
                  </h1>
                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                    <p>
                      The <strong>All India Council for Technical Education (AICTE)</strong> is the statutory body 
                      and a national-level council for technical education under the <strong>Department of Higher Education</strong>, 
                      Ministry of Education, Government of India. Established in <strong>1945</strong>, AICTE is responsible 
                      for the proper planning, formulation, and maintenance of norms and standards in technical education 
                      across the country.
                    </p>
                    <p>
                      AICTE plays a crucial role in promoting innovation, research, and quality improvement in 
                      engineering and management institutions. It provides financial support for research projects, 
                      faculty development programs, conferences, and student-centric initiatives aimed at enhancing 
                      the employability and technical skills of graduates. Through its various schemes and sponsorships, 
                      AICTE encourages academic excellence and fosters collaborations between academia, industry, 
                      and research organizations.
                    </p>
                  </div>
                </section>

                {/* About KPR Institution Section */}
                <section className="mb-24">
                  <h1 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    About KPR Institution of Engineering and Technology
                  </h1>

                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                    <p>
                      <strong>KPRIET</strong> – KPR Institute of Engineering and Technology was established in the year{" "}
                      <strong>2009</strong>. KPRIET is a{" "}
                      <strong>
                        top-notch institute with a strength of 260 eminent faculty members, 4,500 students and 280
                        administrative and support staff
                      </strong>
                      . A self-contained campus, located in a <strong>lush green environment of about 66 acres</strong>,
                      lies in the suburbs of Coimbatore, a metropolitan city of Tamil Nadu, a southern Indian state. The
                      Institute has <strong>12 academic departments with cutting-edge research centres</strong> in a
                      variety of engineering and pure science disciplines, encompassing nearly{" "}
                      <strong>65 laboratories</strong>.
                    </p>
                    <p>
                      Centres of excellence at KPRIET focus on providing transformative learning in{" "}
                      <strong>Communications and Quantum Technologies</strong>, turning out industry-ready graduates
                      equipped with knowledge in emerging fields like quantum computing, quantum communication, advanced
                      wireless systems, and next-generation networking technologies. The training programmes offered
                      ensure that students are trained in accordance with the diversified needs of the
                      telecommunications and quantum technology industries.
                    </p>
                    <p>
                      KPRIET houses{" "}
                      <strong>
                        smart classrooms, well-equipped laboratories with state-of-the-art infrastructure for quantum
                        research, unlimited high-speed wireless internet connectivity
                      </strong>
                      , auditoriums and seminar halls with quality audio–visual systems that enables a pursuit of
                      intelligibility and a centralized library with a huge repository focusing on communications and
                      quantum sciences. The campus also features athletics, playground and gym facilities to enhance
                      physical and mental abilities of the students and faculty.
                    </p>
                    <p>
                      Academic alliance and Memoranda of Understanding with various{" "}
                      <strong>International and National Universities</strong>, and industries in the telecommunications
                      and quantum technology sectors facilitate global education amidst the learners of KPRIET. The
                      alliances promote exchange of students, faculty and industrial experts and encourage joint
                      research projects in quantum communications, 5G/6G technologies, and quantum computing for mutual
                      benefits. The Institution has been{" "}
                      <strong>
                        accredited by NAAC and recognized by Department of Scientific and Industrial Research (DSIR)
                      </strong>
                      .
                    </p>
                  </div>
                </section>

                {/* KPR Groups Section */}
                <section className="mb-24">
                  <h2 className="text-3xl font-bold text-green-700 mb-12 border-l-4 border-green-700 pl-4">
                    KPR Groups include's
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                    {kprGroups.map((group, index) => (
                      <div key={index} className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <Image
                            src={group.logo || "/placeholder.svg?height=80&width=80"}
                            alt={group.name}
                            fill
                            className="object-contain rounded-full border border-gray-200"
                          />
                        </div>
                        <p className="text-sm text-gray-700 leading-tight">{group.name}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* About ECE Section */}
                <section>
                  <h1 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    About ECE
                  </h1>

                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                    <p>
                      The Department of <strong>Electronics and Communication Engineering (ECE)</strong> at KPRIET 
                      is committed to providing cutting-edge education and research opportunities in the field of 
                      electronics, communication systems, and emerging technologies.
                    </p>
                    <p>
                      With a dedicated team of faculty members, modern laboratories, and strong industry connections, 
                      the department ensures students gain hands-on experience in areas such as 
                      <strong> VLSI design, embedded systems, signal processing, wireless communication, 
                      and quantum technologies</strong>.
                    </p>
                    <p>
                      The department fosters a culture of innovation through <strong>research projects, 
                      industry collaborations, and centers of excellence</strong>, empowering students to 
                      become future-ready engineers who can contribute to technological advancements 
                      in communication and computing.
                    </p>
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
