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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div className="space-y-8 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-yellow-400">IQCCT'26</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              International Conference on Recent Advances in Interdisciplinary
Quantum Computing and Communication Technologies
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-lg">📅 April 10-11, 2026</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-lg">📍 KPR Institute of Engineering and Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-lg">🏆 SCOPUS Indexed Publications</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Submit Your Paper
              </button> */}
              <a
  href="https://forms.gle/7yVFpyZst52WZGNr9" // 🔗 your link here
  target="_blank"                        // opens in new tab
  rel="noopener noreferrer"
>
 <button className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
    Register Now
  </button>
</a>

            </div>
          </div>

          {/* Logo + floating icons */}
         
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
