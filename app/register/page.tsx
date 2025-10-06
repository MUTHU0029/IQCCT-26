"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const handleRegisterClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open("https://forms.google.com/your-form-url", "_blank")
  }

  const registrationData = [
    {
      category: "Student Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Academician / Professional Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Research Scholars",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Industry Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Foreign Student Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Foreign Academician / Professional Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Foreign Research Scholars",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
    {
      category: "Foreign Industry Members",
      earlyBird: "9,500 INR",
      late: "10,000 INR",
      isbn: "500 INR",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6 text-green-700">Registration</h1>

              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Learn How to Register for <strong>IQCCT'26</strong>: A guide to submitting your paper for the premier
                 International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies that brings together researchers,
                  academicians, industry professionals, and students to explore cutting-edge advancements in quantum
                  computing, quantum communication, 5G/6G technologies, and next-generation communication systems.
                </p>
              <a
  href="https://forms.gle/7yVFpyZst52WZGNr9"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-md hover:bg-green-800 transition-all duration-300">
    Register Now
  </button>
</a>

              </div>
            </div>

            {/* Registration Fee Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-green-700 border-l-4 border-green-700 pl-4">
                Registration fee
              </h2>

              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                            Details
                          </th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                            Early Bird Registration
                          </th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                            Late Registration
                          </th>
                          {/* <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                            ISBN Proceedings
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {registrationData.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                              {row.category}
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-gray-700">{row.earlyBird}</td>
                            <td className="border border-gray-300 px-6 py-4 text-gray-700">{row.late}</td>
                            {/* <td className="border border-gray-300 px-6 py-4 text-gray-700">{row.isbn}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Early Bird Registration:</span>
                      <span className="font-medium">March 20, 2026</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Late Registration:</span>
                      <span className="font-medium">April 1, 2026</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Conference Date:</span>
                      <span className="font-medium">April 10-11, 2026</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Registration Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Conference attendance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Lunch and refreshments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Conference materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Participation certificate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Access to all sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <Card className="bg-green-700 text-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help with Registration?</h3>
                  <p className="text-lg mb-6 opacity-90">Contact our registration team for any queries or assistance</p>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Email:</p>
                      <p>registration@kpriet.ac.in</p>
                      <p>iqcct2025@kpriet.ac.in</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Phone:</p>
                      <p>+91 422 2669000</p>
                      <p>+91 422 2669001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
