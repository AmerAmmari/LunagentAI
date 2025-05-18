"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import SectionTransition from "@/components/section-transition"
import GradientBackground from "@/components/gradient-background"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { useEffect } from "react"

export default function ContactPage() {
  const { t, language } = useLanguage()

  // Ensure page title and meta description are translated
  useEffect(() => {
    // Update document title based on language
    document.title = language === "en" ? "Contact Us | Zentropic AI" : "Contactez-Nous | Zentropic AI"

    // You could also update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "en"
          ? "Get in touch with our team to learn how we can help your business grow with AI solutions."
          : "Contactez notre équipe pour découvrir comment nous pouvons aider votre entreprise à se développer avec des solutions d'IA.",
      )
    }
  }, [language])

  // Founders data
  const founders = [
    {
      name: "Alex Johnson",
      role: language === "en" ? "CEO & Co-Founder" : "PDG et Co-Fondateur",
      bio:
        language === "en"
          ? "Alex has over 15 years of experience in AI and machine learning, previously leading AI research at Tech Innovations Inc. With a PhD in Computer Science from MIT, Alex is passionate about making AI accessible to businesses of all sizes."
          : "Alex possède plus de 15 ans d'expérience en IA et en apprentissage automatique, ayant précédemment dirigé la recherche en IA chez Tech Innovations Inc. Avec un doctorat en informatique du MIT, Alex est passionné par l'accessibilité de l'IA aux entreprises de toutes tailles.",
      image: "/ceo-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@zentropicai.com",
      },
    },
    {
      name: "Sarah Chen",
      role: language === "en" ? "CTO & Co-Founder" : "Directrice Technique et Co-Fondatrice",
      bio:
        language === "en"
          ? "Sarah is a renowned expert in natural language processing and computer vision. Before co-founding Zentropic AI, she was the lead engineer at AI Solutions, where she developed groundbreaking algorithms for data analysis and prediction."
          : "Sarah est une experte renommée en traitement du langage naturel et en vision par ordinateur. Avant de co-fonder Zentropic AI, elle était ingénieure principale chez AI Solutions, où elle a développé des algorithmes révolutionnaires pour l'analyse et la prédiction de données.",
      image: "/cto-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@zentropicai.com",
      },
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <SectionTransition className="relative pt-32 pb-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <GradientBackground intensity="subtle" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-4">
                {t("contactTitle")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {language === "en" ? "Get in Touch" : t("contactPageSubtitle")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {language === "en"
                  ? "Have questions about our services? Ready to start your AI journey? We're here to help."
                  : t("contactPageDescription")}
              </p>
            </div>
          </div>
        </SectionTransition>

        {/* Meet the Founders Section */}
        <SectionTransition className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === "en" ? "Meet the Founders" : t("meetFoundersTitle")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "en"
                  ? "Our leadership team brings decades of experience in AI, machine learning, and business transformation."
                  : t("meetFoundersDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm"
                >
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                    <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-theme-primary font-medium mb-3">{founder.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{founder.bio}</p>
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={founder.social.linkedin}
                      className="text-gray-500 hover:text-theme-primary dark:text-gray-400 dark:hover:text-theme-primary"
                      aria-label={`${founder.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="text-gray-500 hover:text-theme-primary dark:text-gray-400 dark:hover:text-theme-primary"
                      aria-label={`${founder.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="text-gray-500 hover:text-theme-primary dark:text-gray-400 dark:hover:text-theme-primary"
                      aria-label={`Email ${founder.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>

        {/* Contact Form Section */}
        <SectionTransition className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {language === "en" ? "Contact Us" : t("contactUsTitle")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {language === "en"
                    ? "Fill out the form and our team will get back to you within 24 hours."
                    : t("contactUsDescription")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-theme-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "en" ? "Email" : t("emailLabel")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@zentropicai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-theme-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "en" ? "Phone" : t("phoneLabel")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-theme-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "en" ? "Office" : t("officeLabel")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Tech Street, Suite 100
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">{language === "en" ? "Follow Us" : t("followUsLabel")}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white dark:bg-gray-700 p-2 rounded-full text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-white dark:bg-gray-700 p-2 rounded-full text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">
                  {language === "en" ? "Send Us a Message" : t("sendMessageTitle")}
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </SectionTransition>
      </main>
      <Footer />
    </div>
  )
}
