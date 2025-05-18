"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/components/language-provider"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [emailJSInitialized, setEmailJSInitialized] = useState(false)

  // Initialize EmailJS once on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (publicKey) {
        try {
          emailjs.init(publicKey)
          setEmailJSInitialized(true)
        } catch (err) {
          console.error("Error initializing EmailJS:", err)
          setError("Failed to initialize email service")
        }
      } else {
        console.warn("EmailJS public key not found")
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Get environment variables directly
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    // Check if EmailJS environment variables are available
    if (!serviceId || !templateId || !emailJSInitialized) {
      setError("Email service is not configured properly. Please contact the administrator.")
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare template parameters
      const templateParams = {
        to_email: "amerammari44@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams)

      if (response.status === 200) {
        // Reset form and show success message
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(t("errorMessage"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">{t("thankYou")}</h4>
          <p className="text-green-600 dark:text-green-300">{t("wellBeInTouch")}</p>
          <Button
            className="mt-4 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setIsSubmitted(false)}
          >
            {t("sendAnother")}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("name")}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("yourName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("yourEmail")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("message")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("yourMessage")}
              rows={5}
              required
            />
          </div>
          {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
          <Button type="submit" className="w-full bg-cyan-500 text-white hover:bg-cyan-600" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("sending")}
              </>
            ) : (
              t("sendMessage")
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
