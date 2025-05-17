"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/components/language-provider"

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(true)
    } catch (err) {
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
            {isSubmitting ? t("sending") : t("sendMessage")}
          </Button>
        </form>
      )}
    </div>
  )
}
