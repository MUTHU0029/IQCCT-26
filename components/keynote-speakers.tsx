"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const KeynoteSpeakers = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const speakers = [
    {
      name: "Dr. N. Ramasubramanian",
      title: "Professor",
      organization: "NIT Trichy",
      image: "/nrs.jpeg",
    },
    {
      name: "Dr. Surendiran B",
      title: "Professor",
      organization: "NIT Puducherry",
      image: "/NIT.jpg",
    },
    {
      name: "Dr. Farman Ali",
      title: "Faculty of AI and Engineering",
      organization: "Multimedia University, Malaysia",
      image: "/iqcctspeaker.jpg",
    },
    {
      name: "Samuel Tensingh",
      title: "Digital Backend Engineer",
      organization: "Macquarie University",
      image: "/samuel.jpg",
    },
    {
      name: "Dr. Sundaram Arumugam",
      title: "Associate Professor, School of Engineering Math and Technology",
      organization: "Navajo Technical University, USA",
      image: "/sundaramarumugam.jpg",
    },
  ]

  // Duplicate for infinite animation
  const extendedSpeakers = [...speakers, ...speakers]

  if (!mounted) return null

  return (
    <section className="py-12 bg-white">
      {/* Animation */}
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .carousel {
          animation: slideLeft 10s linear infinite;
        }

        .carousel:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-center px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Keynote Speakers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from industry people and renowned researchers shaping the
            future of technology
          </p>
        </div>

        {/* OUTER RELATIVE WRAPPER (for gradients) */}
        <div className="relative w-full">
          {/* INNER OVERFLOW CLIP (only scrolling area) */}
          <div className="overflow-hidden">
            <div className="carousel flex gap-6">
              {extendedSpeakers.map((speaker, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg
                             transition-all duration-300 hover:shadow-2xl
                             hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2d5a80] to-[#3d5a80]">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {speaker.title}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {speaker.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GRADIENT EDGES (safe now) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/speakers"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300"
        >
          View All Speakers
        </Link>
      </div>
    </section>
  )
}

export default KeynoteSpeakers
