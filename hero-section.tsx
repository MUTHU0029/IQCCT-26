"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const backgroundImages = [
    "/placeholder.svg?height=800&width=1400&text=Campus+Aerial+View",
    "/placeholder.svg?height=800&width=1400&text=Modern+Technology+Lab",
    "/placeholder.svg?height=800&width=1400&text=Conference+Hall+Interior"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [backgroundImages.length])

  return (
    <div className="relative h-screen mt-24 overflow-hidden">
      {/* Sliding Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: "brightness(0.7)",
          }}
        />
      ))}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Learn Beyond Logo */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-20 h-20 relative">
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Logo"
                  alt="Learn Beyond Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold">Learn Beyond</h3>
              </div>
            </div>

            {/* Conference Title */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                International Conference on
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-white mb-8">Conference Date: 18 July 2025</p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2d5a80] hover:bg-[#3d6a90] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                Submit Your Paper
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#2d5a80] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
