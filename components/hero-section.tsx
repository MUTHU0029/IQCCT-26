"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    '/kpriet1.jpg',
    '/kpriet5.jpg',
    '/kpriet3.webp'
  ]

  // Auto change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 2000) // every 4s
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative h-screen  overflow-hidden">
      {/* Background slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            filter: 'brightness(0.6)',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

{/* Content */}
<div className="relative z-10 h-140 flex items-center justify-center text-center px-6">
  <div className="space-y-8 text-white flex flex-col items-center max-w-4xl">
    
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
      Welcome to <span className="text-yellow-400">IQCCT'26</span>
    </h1>

   <p className="text-lg md:text-4xl text-gray-200 font-bold leading-relaxed">
      AICTE Sponsored
    </p>
    <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
      International Conference on Recent Advances in Interdisciplinary
      Quantum Computing and Communication Technologies
    </p>

    <div className="space-y-3">
      <div className="flex items-center justify-center space-x-3">
        <span className="text-lg">📅 April 10–11, 2026</span>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <span className="text-lg">📍 KPR Institute of Engineering and Technology</span>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <span className="text-lg">🏆 SCOPUS Indexed Publications</span>
      </div>
    </div>

    {/* Button */}
    <div className="pt-4">
      <a
        href="https://forms.gle/wAnqcuu5UH5QLPGW6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
          Register Now
        </button>
      </a>
    </div>

  </div>
</div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}