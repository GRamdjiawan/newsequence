import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "New Sequence | Real Estate Media",
    template: "%s | New Sequence",
  },
  description: "Professional real estate photography, videography, and 3D rendering services",
  keywords: ["real estate", "photography", "videography", "3D renders", "property media"],
  openGraph: {
    title: "New Sequence | Real Estate Media",
    description: "Professional real estate photography, videography, and 3D rendering services",
    url: "https://newsequence.com",
    siteName: "New Sequence",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
