"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HEADER_HEIGHT = 120; // px (top banner height)
const NAV_HEIGHT = 48; // px (green bar height)
const SHOW_HIDE_THRESHOLD = 120; // px scroll before we start hiding the header

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [attendDropdown, setAttendDropdown] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const pathname = usePathname()
  const lastY = useRef(0)

  const handleNavClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Hide the top banner (headline) on scroll down, show on scroll up — like Spark '25
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // only start hiding after a little distance so it doesn't flicker at the top
      if (y > SHOW_HIDE_THRESHOLD) {
        if (y > lastY.current) {
          // scrolling down
          setHideHeader(true)
        } else {
          // scrolling up
          setHideHeader(false)
        }
      } else {
        // near top: always show
        setHideHeader(false)
      }
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "Guidelines", href: "/guidelines" },
    { name: "Call for Papers", href: "/call-for-papers" },
    //{ name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Register", href: "/register" },
    { name: "Plagiarism Policy", href: "/plagiarism" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Spacer height so your page content isn't hidden behind fixed bars
  // Keep spacer fixed
const spacerHeight = HEADER_HEIGHT + NAV_HEIGHT + "px"


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Top headline/banner (slides closed on scroll down) */}
        <div
          className="relative overflow-hidden transition-[height,opacity] duration-400 ease-in-out will-change-[height,opacity]"
          style={{
            height: hideHeader ? 0 : HEADER_HEIGHT,
            opacity: hideHeader ? 0 : 1,
          }}
        >
          <div
            className="h-full bg-white"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('/quantum-communications-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 h-full">
              <div className="flex justify-between items-center h-full gap-2 sm:gap-4">
                <div className="flex items-center h-full flex-shrink-0">
  {/* AICTE logo */}
  <div className="w-20 h-20 sm:w-20 sm:h-20 relative flex-shrink-0 mr-2 sm:mr-4">
    <Image
      src="/aicte-logo-official1.png"
      alt="AICTE Logo"
      fill
      className="object-contain"
    />
  </div>

  {/* Text next to AICTE logo */}
  <div className="hidden sm:block">
    <div className="text-sm font-bold text-[#2d3748] leading-tight">
      All India Council for
      <br />
      Technical Education
    </div>
    <div className="text-xs text-[#718096] mt-2 leading-tight">
      Government of India | New Delhi
    </div>
  </div>
</div>


                <div className="flex-1 text-center px-2 sm:px-4 md:px-8 min-w-0 flex flex-col justify-center h-full">
  <h2 className="text-[14px] sm:text-[14px] md:text-xl font-semibold text-green-700 mb-1 truncate">
    AICTE SPONSORED
  </h2>
  <h1 className="text-[11px] sm:text-[13px] md:text-lg text-[#2d3748] leading-tight sm:leading-relaxed font-normal">
      <span className="hidden sm:inline">
        International Conference on Recent Advances in Interdisciplinary
        <br />
        Quantum Computing and Communication&nbsp;Technologies
        <br />
      </span>
    <span className="font-bold text-green-700">(IQCCT'26)</span>
  </h1>
</div>

                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 h-full">
                  <div className="text-right hidden sm:flex flex-col justify-center">
                    <div className="text-sm font-bold text-[#2d3748] leading-tight">
                      KPR Institute of
                      <br />
                      Engineering and
                      <br />
                      Technology
                    </div>
                    <div className="text-xs text-[#718096] mt-2 leading-tight">
                      Learn Beyond | Autonomous, NAAC 'A+'
                      <br />
                      Avinashi Road, Arasur, Coimbatore
                    </div>
                  </div>
                  <div className="w-24 h-24 sm:w-25 sm:h-25 relative flex-shrink-0 flex items-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kpriet%20logo-2ZbJN1Sf9qibemRScHdX9K44LKLG2u.webp"
                      alt="KPR Institute Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Green navigation bar (always visible) */}
        <nav className="bg-green-700 h-12">
          <div className="max-w-7xl mx-auto px-6 h-full">
            <div className="flex items-center h-full">
              {/* Desktop nav */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex items-center">
                  {navLinks.map((link) => (
                    <div key={link.name} className="relative group">
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        className={`text-white hover:text-gray-200 px-4 py-3 text-sm font-medium transition-all duration-300 ease-in-out block transform hover:scale-105 ${
                          pathname === link.href ? "bg-green-800 rounded-md" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Paper (desktop) */}
              <div className="hidden lg:block">
                <a
  href="https://forms.gle/7yVFpyZst52WZGNr9" // 🔗 your link here
  target="_blank"                        // opens in new tab
  rel="noopener noreferrer"
>
  <button className="bg-white text-green-700 px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    Register Now
  </button>
</a>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden ml-auto">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-gray-200 focus:outline-none transition-all duration-200"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden bg-green-700 border-t border-green-600 z-[9998]">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`text-white hover:text-gray-200 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 rounded-md hover:bg-green-800 ${
                      pathname === link.href ? "bg-green-800" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 pb-2">
                  <a
  href="https://forms.gle/7yVFpyZst52WZGNr9" // 🔗 your link here
  target="_blank"                        // opens in new tab
  rel="noopener noreferrer"
>
  <button className="w-full bg-white text-green-700 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
    Register Now
  </button>
</a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer so page content starts below the fixed bars */}
      <div aria-hidden style={{ height: spacerHeight }} />
    </>
  )
}

export default Navbar