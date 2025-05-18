"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-md mx-auto">
            <div className="text-9xl font-bold text-theme-primary">404</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {language === "en" ? "Page Not Found" : "Page Non Trouvée"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              {language === "en"
                ? "Sorry, we couldn't find the page you're looking for."
                : "Désolé, nous n'avons pas pu trouver la page que vous recherchez."}
            </p>
            <Link href="/">
              <Button className="bg-theme-primary hover:bg-theme-primaryDark text-white">
                <Home className="mr-2 h-4 w-4" />
                {language === "en" ? "Back to Home" : "Retour à l'Accueil"}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
