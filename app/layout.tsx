import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import ScrollManager from "@/components/scroll-manager"
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Lunagent AI",
  description: "Transform Your Business with AI Solutions",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <LanguageProvider>
            <Suspense fallback={null}>
              <ScrollManager />
            </Suspense>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
