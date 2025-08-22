import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

export default function FeaturedSections() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "Discover our comprehensive range of programs designed to challenge and inspire students at every level.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/about",
    },
    {
      icon: Users,
      title: "Research Community",
      description:
        "Join our vibrant research community and contribute to groundbreaking discoveries that shape the future.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/committees",
    },
    {
      icon: Award,
      title: "Global Recognition",
      description:
        "Learn from world-renowned faculty and industry experts who bring real-world experience to the classroom.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/speakers",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d2561]">Why Choose Learn Beyond?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our institution a leader in education and research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0d2561]/20 group-hover:bg-[#0d2561]/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-[#0d2561]" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-[#0d2561] group-hover:text-[#1a3a7a] transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600">{feature.description}</p>
                <Button className="w-full bg-[#0d2561] hover:bg-[#1a3a7a] text-white group-hover:shadow-lg transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
