"use client"

import type React from "react"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavigation(e, "/#hero")}>
                <div className="h-14 w-14 relative">
                  <Image src="/logonoBG.png" alt="Zentropic AI Logo" fill className="object-contain" priority />
                </div>
                <span className="text-xl font-bold text-white">Zentropic AI</span>
              </Link>
            </div>
            <p className="text-sm">
              Empowering businesses with intelligent AI solutions to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm hover:text-purple-400 transition-colors"
                  onClick={(e) => handleNavigation(e, "/careers")}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <strong>Email:</strong> info@zentropic.ai
              </li>
              <li className="text-sm">
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li className="text-sm">
                <strong>Address:</strong> 123 AI Boulevard, Tech City, TC 98765
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} Zentropic AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
