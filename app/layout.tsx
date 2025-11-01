import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Acme } from "next/font/google"
import "./globals.css"

const acme = Acme({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Le Jardin Restaurant Abidjan - Cuisine Africaine et Internationale",
  description:
    "Découvrez Le Jardin au Sofitel Hôtel Ivoire à Cocody, Abidjan : restaurant gastronomique offrant une fusion de cuisine africaine et internationale dans un cadre tropical élégant avec vue sur la lagune.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${acme.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
