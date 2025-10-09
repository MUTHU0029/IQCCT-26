import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              {/* <Image
                src="/iqcct-2025-logo.png"
                alt="IQCCT'26 Conference Logo"
                width={64}
                height={64}
                className="object-contain"
              /> */}
              <div>
                <h3 className="text-2xl font-bold text-green-400">IQCCT'26</h3>
                <p className="text-sm text-gray-300">
                 International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Organized by KPR Institute of Engineering and Technology - A premier platform for researchers,
              academicians, and industry professionals to showcase advancements in communications and quantum
              technologies.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kpriet%20logo-2ZbJN1Sf9qibemRScHdX9K44LKLG2u.webp"
                alt="KPR Institute Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <p className="text-gray-400 text-xs">
                  Learn Beyond | Autonomous, NAAC 'A+' <br />
                  Avinashi Road, Arasur, Coimbatore - 641407
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/call-for-papers"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Call for Papers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Speakers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Registration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/plagiarism"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>→</span>
                  <span>Plagiarism Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <span>muralidharan.j@kpriet.ac.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 9944032043</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>🌐</span>
                <span>www.kpriet.ac.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📅</span>
                <span>April 10-11, 2026</span>
              </p>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-green-400">Publication Partners</h5>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">SCOPUS</span>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">IEEE</span>
                <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Springer</span>
                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">AIP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 IQCCT'26 - KPR Institute of Engineering and Technology. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
