import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const kprGroups = [
    { name: "KPR Quantum knits", logo: "/quantum-XdBOGqpH.png" },
    { name: "KPR Group of Company", logo: "/kpr_group-DdaCAbSV.png" },
    { name: "KPRCAS", logo: "/kprcas-uWpuEiSi.png" },
    {
      name: "Audi Showroom",
      logo: "/audi-7kdWA23-.png",
    },
    {
      name: "KPRIAS Academy",
      logo: "/kpr_ias-DzjCSCuG.png",
    },
    {
      name: "KPRIET",
      logo: "/kpriet-C-oXDijr.png",
    },
    { name: "KPR Sugar Mill Limited", logo: "/sugar_mill-BScuU2S5.png" },
    { name: "KPR Faso Mens wear", logo: "/faso-rPurKuiL.png" },
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
                      The All India Council for Technical Education (AICTE) is the statutory body 
                      and a national-level council for technical education under the Department of Higher Education, 
                      Ministry of Education, Government of India. Established in 945, AICTE is responsible 
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
                    About KPR Institute of Engineering and Technology
                  </h1>

                  <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                    <p>
                      KPRIET – KPR Institute of Engineering and Technology was established in the year{" "}
                      2009. KPRIET is a{" "}
                        top-notch institute with a strength of 260 eminent faculty members, 4,500 students and 280
                        administrative and support staff
                      . A self-contained campus, located in a lush green environment of about 66 acres,
                      lies in the suburbs of Coimbatore, a metropolitan city of Tamil Nadu, a southern Indian state. The
                      Institute has 12 academic departments with cutting-edge research centres in a
                      variety of engineering and pure science disciplines, encompassing nearly{" "}
                      65 laboratories.
                    </p>
                    <p>
                      Centres of excellence at KPRIET focus on providing transformative learning in{" "}
                      Communications and Quantum Technologies, turning out industry-ready graduates
                      equipped with knowledge in emerging fields like quantum computing, quantum communication, advanced
                      wireless systems, and next-generation networking technologies. The training programmes offered
                      ensure that students are trained in accordance with the diversified needs of the
                      telecommunications and quantum technology industries.
                    </p>
                    <p>
                      KPRIET houses{" "}
                      
                        smart classrooms, well-equipped laboratories with state-of-the-art infrastructure for quantum
                        research, unlimited high-speed wireless internet connectivity
                      
                      , auditoriums and seminar halls with quality audio–visual systems that enables a pursuit of
                      intelligibility and a centralized library with a huge repository focusing on communications and
                      quantum sciences. The campus also features athletics, playground and gym facilities to enhance
                      physical and mental abilities of the students and faculty.
                    </p>
                    <p>
                      Academic alliance and Memoranda of Understanding with various{" "}
                      International and National Universities, and industries in the telecommunications
                      and quantum technology sectors facilitate global education amidst the learners of KPRIET. The
                      alliances promote exchange of students, faculty and industrial experts and encourage joint
                      research projects in quantum communications, 5G/6G technologies, and quantum computing for mutual
                      benefits. The Institution has been{" "}
                      
                        accredited by NAAC and recognized by Department of Scientific and Industrial Research (DSIR)
                      
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
                      The Department of Electronics and Communication Engineering (ECE) at KPRIET 
                      is committed to providing cutting-edge education and research opportunities in the field of 
                      electronics, communication systems, and emerging technologies.
                    </p>
                    <p>
                      With a dedicated team of faculty members, modern laboratories, and strong industry connections, 
                      the department ensures students gain hands-on experience in areas such as 
                       VLSI design, embedded systems, signal processing, wireless communication, 
                      and quantum technologies.
                    </p>
                    <p>
                      The department fosters a culture of innovation through research projects, 
                      industry collaborations, and centers of excellence, empowering students to 
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
