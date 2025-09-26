import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, FileText, Download, Users, Clock, Award } from "lucide-react"

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: "Submission Guidelines",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Papers must be original and not published elsewhere",
        "Maximum length: 8 pages including references",
        "Use the provided template format",
        "Include abstract (150-250 words)",
        "Keywords: 3-5 relevant keywords related to communications or quantum technologies",
      ],
    },
    {
      title: "Review Process",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        "Double-blind peer review process",
        "Minimum 2 reviewers per paper with expertise in communications/quantum fields",
        "Review period: 4-6 weeks",
        "Authors notified of decision via email",
        "Revision period: 2 weeks if accepted with revisions",
      ],
    },
    {
      title: "Presentation Guidelines",
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      items: [
        "Presentation time: 15 minutes + 5 minutes Q&A",
        "Use provided IQCCT'25 presentation template",
        "Test equipment before presentation",
        "Bring backup on USB drive",
        "Dress code: Business formal",
      ],
    },
    {
      title: "Publication Standards",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        "IEEE/Springer formatting required for communications papers",
        "AIP formatting for quantum technology papers",
        "Plagiarism check mandatory",
        "Camera-ready version needed",
        "Copyright form submission required",
      ],
    },
    {
      title: "Technical Requirements",
      icon: Users,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      items: [
        "PDF format only",
        "Maximum file size: 10MB",
        "Figures must be high resolution (300 DPI minimum)",
        "References in IEEE format",
        "English language only",
      ],
    },
    {
      title: "Important Deadlines",
      icon: Clock,
      color: "text-red-600",
      bgColor: "bg-red-50",
      items: [
        "Paper submission: May 31, 2025",
        "Notification: June 10, 2025",
        "Camera-ready: June 18, 2025",
        "Registration: July 1, 2025",
        "Conference: July 18, 2025",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold  text-green-700 mb-8 ">Guidelines</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Important guidelines for authors and participants of IQCCT'26 - International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies to ensure a successful conference experience
                  </p>
                </div>

                {/* Guidelines Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {guidelines.map((section, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-700"
                    >
                      <CardHeader className={`${section.bgColor} rounded-t-lg`}>
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-full bg-white ${section.color}`}>
                            <section.icon className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-xl text-[#2d5a80]">{section.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Download Section */}
                <section className="text-center">
                  <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-700">
                    <CardContent className="p-12">
                      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
                        <div className="text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                            <div className="p-4 rounded-full bg-blue-50">
                              <Download className="w-8 h-8 text-green-700" />
                            </div>
                            <h2 className="text-3xl font-bold text-green-700">Download Templates</h2>
                          </div>
                          <p className="text-gray-600 text-lg mb-6">
                            Get the official IQCCT'26 templates and guidelines documents to ensure your submission meets
                            all requirements for communications and quantum technology papers
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center w-full">
  <button className="flex items-center justify-center border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-4 px-6 sm:px-8 rounded-lg font-semibold text-lg transition-all duration-300 w-full sm:w-auto">
    <FileText className="w-5 h-5 inline mr-2" />
    Download Paper Template
  </button>

  <button className="flex items-center justify-center border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-4 px-6 sm:px-8 rounded-lg font-semibold text-lg transition-all duration-300 w-full sm:w-auto">
    <Users className="w-5 h-5 inline mr-2" />
    Download Presentation Template
  </button>

  <button className="flex items-center justify-center bg-gray-100 text-green-700 hover:bg-gray-200 py-4 px-6 sm:px-8 rounded-lg font-semibold text-lg transition-all duration-300 w-full sm:w-auto">
    <Download className="w-5 h-5 inline mr-2" />
    Complete Guidelines PDF
  </button>
</div>

                      </div>
                    </CardContent>
                  </Card>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
