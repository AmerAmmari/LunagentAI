import Header from "@/components/header"
import Hero from "@/components/hero"
import BusinessProcess from "@/components/business-process"
import Features from "@/components/features"
import Industries from "@/components/industries"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 bg-texture">
      <Header />
        <main>
          <Hero />
          <BusinessProcess />
          <Features />
          <Industries />
          <Testimonials />
          <Pricing />
          <Cta />
        </main>
      <Footer />
    </div>
  )
}
