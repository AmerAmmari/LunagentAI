"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import EmailUs from "@/components/email-us"
import { useEffect } from "react"

export default function ContactPage() {
  // Handle scroll behavior for the contact page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 bg-texture">
      <Header />
      <main>
        <EmailUs />
      </main>
      <Footer />
    </div>
  )
}
