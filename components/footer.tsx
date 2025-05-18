"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-12 md:py-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Zentropic AI Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Zentropic AI</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300">{t("heroDescription")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-theme-primary dark:text-gray-400 dark:hover:text-theme-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t("companyTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t("useCasesTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry1Title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/finance"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry2Title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/retail"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry3Title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry4Title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/education"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry5Title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/marketing"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("industry6Title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t("legalTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-theme-primary dark:text-gray-300 dark:hover:text-theme-primary"
                >
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4 mt-6 text-gray-900 dark:text-white">{t("contactTitle")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Email: info@zentropicai.com</li>
              <li className="text-gray-600 dark:text-gray-300">{t("phone")}: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Zentropic AI. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
