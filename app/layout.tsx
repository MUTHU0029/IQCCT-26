import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IQCCT'26 - International Conference on Quantum Computing and Communication Technologies",
  description:
    "International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies (IQCCT'26) hosted by KPR Institute of Engineering and Technology. Submit research papers, join keynote speakers, and explore quantum innovations.",
  keywords: "quantum computing, communication technologies, conference, IQCCT'26, KPRIET, quantum cryptography, 5G, 6G, IoT",
  authors: [{ name: "IQCCT'26" }],
  creator: "KPRIET",
  publisher: "KPRIET",
  formatDetection: {
    email: false,
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "IQCCT'26 - Quantum Computing & Communication Technologies Conference",
    description:
      "International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies at KPRIET",
    url: "https://iqcct.in",
    siteName: "IQCCT'26",
    images: [
      {
        url: "https://iqcct.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IQCCT'26 Conference",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQCCT'26 - Quantum Computing Conference",
    description:
      "International Conference on Recent Advances in Interdisciplinary Quantum Computing and Communication Technologies",
    images: ["https://iqcct.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://iqcct.in",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased ">
        <div className="page-transition">{children}</div>
      </body>
    </html>
  )
}
