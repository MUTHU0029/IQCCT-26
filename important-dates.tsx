import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Send, CheckCircle, Users } from "lucide-react"

export default function ImportantDates() {
  const dates = [
    {
      icon: Send,
      title: "Paper Submission Deadline",
      date: "May 31, 2025",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Notification of Acceptance",
      date: "June 10, 2025",
      color: "text-green-600",
    },
    {
      icon: Calendar,
      title: "Camera-Ready Submission",
      date: "June 18, 2025",
      color: "text-orange-600",
    },
    {
      icon: Users,
      title: "Conference Date",
      date: "July 18, 2025",
      color: "text-purple-600",
    },
  ]

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl text-[#2d5a80] flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Important Dates</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {dates.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full bg-gray-100 ${item.color}`}>
              <item.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2d5a80] text-sm leading-tight mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
