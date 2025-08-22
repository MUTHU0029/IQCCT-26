import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Prof. Dr. John Preskill",
      title: "Professor of Theoretical Physics",
      university: "California Institute of Technology",
      country: "USA",
      expertise: "Quantum Computing & Information Theory",
      image: "/placeholder.svg?height=200&width=200&text=Prof+Preskill",
    },
    {
      name: "Dr. Artur Ekert",
      title: "Professor of Quantum Physics",
      university: "University of Oxford",
      country: "UK",
      expertise: "Quantum Cryptography & Communication",
      image: "/placeholder.svg?height=200&width=200&text=Dr+Ekert",
    },
    {
      name: "Prof. Dr. Andrea Alù",
      title: "Professor of Physics",
      university: "City University of New York",
      country: "USA",
      expertise: "Metamaterials & Wireless Communications",
      image: "/placeholder.svg?height=200&width=200&text=Prof+Alu",
    },
    {
      name: "Dr. Charles Bennett",
      title: "Research Staff Member",
      university: "IBM Research",
      country: "USA",
      expertise: "Quantum Key Distribution",
      image: "/placeholder.svg?height=200&width=200&text=Dr+Bennett",
    },
    {
      name: "Prof. Dr. Shanhui Fan",
      title: "Professor of Electrical Engineering",
      university: "Stanford University",
      country: "USA",
      expertise: "Photonic Quantum Systems",
      image: "/placeholder.svg?height=200&width=200&text=Prof+Fan",
    },
    {
      name: "Dr. Jian-Wei Pan",
      title: "Professor of Physics",
      university: "University of Science and Technology of China",
      country: "China",
      expertise: "Quantum Communication Networks",
      image: "/placeholder.svg?height=200&width=200&text=Dr+Pan",
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
                {/* Header Section */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-green-700 mb-8 ">Keynote Speakers</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Distinguished experts in Communications and Quantum Technologies who will share their insights at
                    IQCCT'26
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700"
                    >
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          fill
                          className="object-cover rounded-full border-4 border-white shadow-lg"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h3>
                      <p className="text-green-700 font-semibold mb-1">{speaker.title}</p>
                      <p className="text-gray-600 text-sm mb-2">{speaker.university}</p>
                      <p className="text-gray-500 text-sm mb-3">{speaker.country}</p>
                      <div className="bg-blue-50 rounded-lg p-3 mt-4">
                        <p className="text-xs font-semibold text-green-700 mb-1">Area of Expertise</p>
                        <p className="text-sm text-green-700">{speaker.expertise}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center">
                  <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-green-700">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-green-700 mb-4">More Speakers to be Announced</h2>
                      <p className="text-gray-600 text-lg">
                        We are continuously adding more distinguished speakers from leading institutions worldwide. Stay
                        tuned for updates on additional keynote presentations covering the latest advances in quantum
                        technologies and communications systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
