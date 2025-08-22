import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Prof. Dr. M. Shridhar",
      title: "Professor Emeritus",
      location: "USA",
      image: "/placeholder.svg?height=300&width=300&text=Prof+Shridhar",
    },
    {
      name: "Ir. Eur. Ing. Ts. Dr. Lau Chee Yong",
      title: "Assistant Professor",
      location: "Malaysia",
      image: "/placeholder.svg?height=300&width=300&text=Dr+Lau",
    },
    {
      name: "Prof. Dr. Po-Ming Lee",
      title: "Professor",
      location: "Taiwan",
      image: "/placeholder.svg?height=300&width=300&text=Prof+Lee",
    },
    {
      name: "Prof. Dr. Kyung Tae Kim",
      title: "Professor",
      location: "South Korea",
      image: "/placeholder.svg?height=300&width=300&text=Prof+Kim",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2d5a80]">Keynote Speakers</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d5a80] mb-2">{speaker.name}</h3>
                <p className="text-gray-600 mb-1">{speaker.title}</p>
                <p className="text-gray-500 text-sm">{speaker.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#2d5a80] hover:bg-[#3d6a90] text-white px-8 py-3">View All</Button>
        </div>
      </div>
    </section>
  )
}
