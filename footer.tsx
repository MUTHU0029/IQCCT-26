"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "Speakers", href: "/speakers" },
    { name: "Contact Us", href: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-300" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
  ]

  const resourceLinks = [
    { name: "Guidelines", href: "/guidelines" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Plagiarism Policy", href: "/plagiarism" },
    { name: "Submit Paper", href: "/submit" },
  ]

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "info@learnbeyond.edu", href: "mailto:info@learnbeyond.edu" },
    { icon: MapPin, text: "123 Education Street, Knowledge City", href: "#" },
  ]

  return (
    <footer className="bg-[#0d2561] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Learn Beyond Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Learn Beyond</h3>
                <p className="text-sm text-gray-400 font-medium">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Pioneering the future of education through innovation, research, and global collaboration. Join our
              community of learners and researchers making a difference worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-[#0d2561] ${social.color} hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:text-[#0d2561] transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-[#0d2561] transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:text-[#0d2561] transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-[#0d2561] transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Contact Info</h4>
            <ul className="space-y-5">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      className="flex items-start space-x-3 text-gray-300 hover:text-[#0d2561] transition-colors duration-300 group"
                    >
                      <div className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0 group-hover:text-[#0d2561] transition-colors duration-300">
                        <contact.icon className="w-full h-full" />
                      </div>
                      <span className="text-sm leading-relaxed">{contact.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-3 text-gray-300">
                      <div className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">
                        <contact.icon className="w-full h-full" />
                      </div>
                      <span className="text-sm leading-relaxed">{contact.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">© 2025 Learn Beyond. All rights reserved.</div>

          {/* Additional Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-[#0d2561] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#0d2561] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-[#0d2561] transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#0d2561] transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0d2561] hover:bg-[#1a3a7a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}
