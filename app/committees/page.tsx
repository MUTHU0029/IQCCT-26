import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CommitteesPage() {
  const managementTeam = [
    {
      name: "Dr. K.P. Ramasamy",
      title: "Chairman",
      image: "/chair.jpg",
    },
    {
      name: "Ms. M. Gayathri",
      title: "Secretary",
      image: "/mam.jpg",
    },
    {
      name: "Dr. A.M. Natarajan",
      title: "Chief Executive",
      image: "/secr.jpg",
    },
    {
      name: "Dr. D.Saravanan",
      title: "Principal",
      image: "/prin.jpg",
    },
  ]

  const conferenceChairs = [
    {
      name: "Dr. M. Kathirvelu",
      title: "Professor & Head, ECE, KPRIET",
      image: "/placeholder.svg?height=200&width=200&text=Dr+Kathirvelu",
    },
    {
      name: "K. Mohana Sundaram",
      title: "Professor & Head, EE, KPRIET",
      image: "/placeholder.svg?height=200&width=200&text=K+Mohana",
    },
  ]

  const conferenceCoordinators = [
    { name: "Dr. S. Finney Daniel Shadrach", affiliation: "KPRIET, Coimbatore, India" },
    { name: "Dr. G. Saravanan", affiliation: "KPRIET, Coimbatore, India" },
  ]

  const technicalCommittee = [
    { name: "Dr. Indra J", title: "Professor, Communications Systems, KPRIET" },
    { name: "Dr. Kalamani M", title: "Professor, Quantum Technologies, KPRIET" },
    { name: "Dr. Venugopal D", title: "Professor, Wireless Communications, KPRIET" },
    { name: "Dr. Ramesh S M", title: "Professor, Signal Processing, KPRIET" },
    { name: "Dr. Seethalakshmi V", title: "Professor, Quantum Computing, KPRIET" },
    { name: "Dr. Kalirajan K", title: "Professor, Network Security, KPRIET" },
    { name: "Dr. Maheswar R", title: "Professor, Optical Communications, KPRIET" },
    { name: "Dr. Jai Shankar B", title: "Professor, Quantum Cryptography, KPRIET" },
    { name: "Dr. V. S. Chandrika", title: "Professor, 5G/6G Technologies, KPRIET" },
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
                  <h1 className="text-5xl font-bold text-green-700 mb-6">Committees</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Meet the distinguished committee members organizing IQCCT'25 - International Conference on
                    Communications and Quantum Technologies
                  </p>
                </div>

                {/* Management Team Section */}
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-green-700 mb-12 border-l-4 border-green-700 pl-4">
                    Management Team
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {managementTeam.map((member, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="relative w-32 h-32 mx-auto mb-6">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-gray-600">{member.title}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conference Chairs Section */}
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-green-700 mb-12 border-l-4 border-green-700 pl-4">
                    Conference Chairs
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {conferenceChairs.map((chair, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="relative w-40 h-40 mx-auto mb-6">
                          <Image
                            src={chair.image || "/placeholder.svg"}
                            alt={chair.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{chair.name}</h3>
                        <p className="text-gray-600">{chair.title}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conference Coordinators Section */}
                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    Conference Coordinators
                  </h2>

                  <div className="space-y-6">
                    {conferenceCoordinators.map((coordinator, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <h3 className="text-lg font-bold text-gray-900">{coordinator.name}</h3>
                        <span className="text-gray-600">-</span>
                        <p className="text-gray-600">{coordinator.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technical Committee Section */}
                <section>
                  <h2 className="text-3xl font-bold text-green-700 mb-8 border-l-4 border-green-700 pl-4">
                    Technical Committee
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Our technical committee comprises experts in communications and quantum technologies who will review
                    and evaluate all submitted papers.
                  </p>

                  <div className="space-y-6">
                    {technicalCommittee.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                        <span className="text-gray-600">-</span>
                        <p className="text-gray-600">{member.title}</p>
                      </div>
                    ))}
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
