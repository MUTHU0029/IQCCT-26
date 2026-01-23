const ImportantDates = () => {
  const dates = [
    {
      event: "Paper Submission Deadline",
      date: "February 28, 2026",
      status: "upcoming",
    },
    {
      event: "Notification of Acceptance",
      date: "March 10, 2026",
      status: "upcoming",
    },
    {
      event: "Camera Ready Submission",
      date: "March 20, 2026",
      status: "upcoming",
    },
    {
      event: "Registration",
      date: "March 25, 2026",
      status: "upcoming",
    },
    {
      event: "Conference Dates",
      date: "April 10-11, 2026",
      status: "conference",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-700">
      <h3 className="text-xl font-bold  text-green-700 mb-8">Important Dates</h3>

      <div className="space-y-4">
        {dates.map((item, index) => (
          <div key={index} className="flex flex-col space-y-1 pb-4 border-b border-gray-100 last:border-b-0">
            <div className="flex items-start justify-between">
              <h4 className="font-medium text-gray-800 text-sm leading-tight flex-1 pr-2">{item.event}</h4>
              {item.status === "conference" }
            </div>
            <p className="text-[#2d5a80] font-semibold text-sm">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <a
          href="https://forms.gle/7yVFpyZst52WZGNr9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full bg-green-700 text-white py-2 px-4 rounded-lg font-medium text-sm  hover:bg-yellow-300 transition-colors">
            Register Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default ImportantDates
