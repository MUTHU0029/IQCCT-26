"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const targetDate = new Date("2026-04-10T00:00:00")

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate.getTime() - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null)

  useEffect(() => {
    // Only start countdown on the client
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  if (!timeLeft) {
    // During SSR → render nothing (avoids hydration mismatch)
    return null
  }

  return (
    <div className="text-center py-0">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Conference Countdown</h3>
        <p className="text-gray-600">Time remaining until IQCCT'26</p>
      </div>

      <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
        {/* Days */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600 mb-2">DAYS</div>
          <div className="flex space-x-1">
            {formatNumber(timeLeft.days).split("").map((digit, index) => (
              <div
                key={index}
                className="w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
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
            {formatNumber(timeLeft.hours).split("").map((digit, index) => (
              <div
                key={index}
                className="w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
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
            {formatNumber(timeLeft.minutes).split("").map((digit, index) => (
              <div
                key={index}
                className="w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg"
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
            {formatNumber(timeLeft.seconds).split("").map((digit, index) => (
              <div
                key={index}
                className="w-16 h-20 bg-gradient-to-br from-green-600 to-green-800 text-white text-3xl font-bold flex items-center justify-center rounded-lg shadow-lg "
              >
                {digit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 space-y-2">
        <div className="text-sm text-gray-500">
          Conference Date: April 10-11, 2026
        </div>
      </div>
    </div>
  )
}
