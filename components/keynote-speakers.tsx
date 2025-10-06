import Image from "next/image"

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Dr. N. Ramasubramanian",
      title: "Professor",
      organization: "NIT Trichy",
      image: "/nrs.jpeg",
      topic: "Future of Artificial Intelligence in Smart Systems",
    },
    {
      name: "Dr. Surendiran . B",
      title: "Professor",
      organization: "NIT Puducherry",
      image: "/NIT.jpg",
      topic: "Autonomous Robotics and Human-Machine Interaction",
    },
    {
      name: "Dr. Farman Ali",
      title: "Faculty of AI and Engineering",
      organization: "Multimedia University, Malaysia",
      image: "/iqcctspeaker.jpg",
      topic: "Sustainable Power Electronics for Smart Grids",
    },
  ]

  return (
    <section className="py-0 bg-white">
      <div className="container-center px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Keynote Speakers</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and renowned researchers who are shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
  {speakers.map((speaker, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-80"
    >
      {/* Image section */}
      <div className="relative h-48 bg-gradient-to-br from-[#2d5a80] to-[#3d5a80]">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-700 mb-2">{speaker.name}</h3>
        <p className="text-gray-600 font-medium mb-1">{speaker.title}</p>
        <p className="text-gray-500 text-sm mb-4">{speaker.organization}</p>

        <div className="border-t pt-4 mt-auto">
          {/* <p className="text-sm text-gray-700 font-medium">Topic:</p> */}
          {/* <p className="text-sm text-gray-600 italic">{speaker.topic}</p> */}
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="text-center mt-12">
          {/* <button className="bg-green-700 text-white px-8 py-3 rounded-full font-medium  transition-colors">
            View All Speakers
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default KeynoteSpeakers
