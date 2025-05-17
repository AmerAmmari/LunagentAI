import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zentropic AI - AI-Powered Solutions for Business Growth",
  description: "We help businesses leverage cutting-edge technology to drive growth, efficiency, and innovation.",
  keywords: ["Zentropic AI", "AI", "business growth", "technology solutions"],
  icons: {
    icon: "/favicon.ico",
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
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <PageTransition>{children}</PageTransition>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
