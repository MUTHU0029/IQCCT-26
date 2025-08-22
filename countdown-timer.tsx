"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 325,
    hours: 12,
    minutes: 34,
    seconds: 45,
  })

  useEffect(() => {
    // Simple counter that increments every second to test if timer works
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
      
      // Also try to update the countdown
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="text-center py-16">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[#2d5a80] mb-2">Conference Countdown</h3>
        <p className="text-gray-600">Time remaining until SPARK'25</p>
      </div>
      
      
      <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
        {/* Days */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600 mb-2">DAYS</div>
          <div className="flex space-x-1">
            {formatNumber(timeLeft.days)
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  className="w-16 h-20 bg-[#2d5a80] text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
                >
                  {digit}
                </div>
              ))}
          </div>
        </div>

        {/* Hours */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600 mb-2">HOURS</div>
          <div className="flex space-x-1">
            {formatNumber(timeLeft.hours)
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  className="w-16 h-20 bg-[#2d5a80] text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
                >
                  {digit}
                </div>
              ))}
          </div>
        </div>

        {/* Minutes */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600 mb-2">MINUTES</div>
          <div className="flex space-x-1">
            {formatNumber(timeLeft.minutes)
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  className="w-16 h-20 bg-[#2d5a80] text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
                >
                  {digit}
                </div>
              ))}
          </div>
        </div>

        {/* Seconds */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600 mb-2">SECONDS</div>
          <div className="flex space-x-1">
            {formatNumber(timeLeft.seconds)
              .split("")
              .map((digit, index) => (
                <div
                  key={index}
                  className="w-16 h-20 bg-[#2d5a80] text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg animate-bounce"
                >
                  {digit}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Debug Info */}
      <div className="mt-6 space-y-2">
        <div className="text-sm text-gray-500">
          Conference Date: July 18, 2025
        </div>
        <div className="text-lg font-bold text-blue-600">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </div>
    </div>
  )
}
<div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse"></div>