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
      image: "/hod.jpeg",
    },
  ]

  const conferenceCoordinators = [
    { name: "Dr.MURALIDHARAN J", affiliation: " Associate Professor - KPRIET, Coimbatore, India" },
  ]

  const technicalCommittee = [
   { name: "Dr. Indra J", title: "Professor, KPRIET" },
  { name: "Dr. Kalamani M", title: "Professor, KPRIET" },
  { name: "Dr. Venugopal D", title: "Professor, KPRIET" },
  { name: "Dr. Seethalakshmi V", title: "Professor, KPRIET" },
  { name: "Dr. Kalirajan K", title: "Professor, KPRIET" },
  { name: "Dr. Maheswar R", title: "Professor, KPRIET" },
  { name: "Dr. Jai Shankar B", title: "Professor, KPRIET" },
  { name: "Dr. Gurumoorthy K B", title: "Associate Professor, KPRIET" },
  { name: "Dr. Jaikumar R", title: "Associate Professor, KPRIET" },
  { name: "Dr. Murugan K", title: "Associate Professor, KPRIET" },
  { name: "Dr. Finney Daniel Shadrach S", title: "Associate Professor, KPRIET" },
  { name: "Dr. Arijit De", title: "Associate Professor, KPRIET" },
  { name: "Mr. Jakir Hussain G K", title: "Assistant Professor , KPRIET" },
  { name: "Dr. Prasad J", title: "Assistant Professor , KPRIET" },
  { name: "Dr. Jagadesh T", title: "Assistant Professor , KPRIET" },
  { name: "Dr. Nithya S", title: "Assistant Professor , KPRIET" },
  { name: "Dr. Venkatesh T", title: "Assistant Professor , KPRIET" },
  { name: "Ms. Archita Hore", title: "Assistant Professor , KPRIET" },
  { name: "Mr. Pradeep Kumar G", title: "Assistant Professor, KPRIET" },
  { name: "Mr. Balamurali S", title: "Assistant Professor, KPRIET" },
  { name: "Dr. Singaram M", title: "Assistant Professor, KPRIET" },
  { name: "Mrs. Priyadharshini S", title: "Assistant Professor, KPRIET" },
  { name: "Mr. Shanmugaraja T", title: "Assistant Professor, KPRIET" },
  { name: "Mr. Ram Nivas D", title: "Assistant Professor, KPRIET" },
  { name: "Mrs. Gunanandhini S", title: "Assistant Professor, KPRIET" },
  { name: "Mrs. Suganyadevi S", title: "Assistant Professor, KPRIET" },
  { name: "Ms. Saranya M D", title: "Assistant Professor, KPRIET" },
  { name: "Ms. Supriya M", title: "Assistant Professor, KPRIET" },
  { name: "Dr. Rima Deka", title: "Assistant Professor, KPRIET" },
  { name: "Mr. Debashish Pal", title: "Assistant Professor, KPRIET" },
  { name: "Mr. Ashish Ranjan Shadangi", title: "Assistant Professor, KPRIET" },
  { name: "Dr. Himangshu Deka", title: "Assistant Professor, KPRIET" },
  { name: "Ms. Anju T S", title: "Assistant Professor, KPRIET" },
  { name: "Dr. Sharmi Ganguly", title: "Assistant Professor, KPRIET" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-10 pb-10">
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

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-2xl mx-auto">
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
