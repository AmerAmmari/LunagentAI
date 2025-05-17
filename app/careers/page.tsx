import Header from "@/components/header"
import Footer from "@/components/footer"
import CareersHero from "@/components/careers-hero"
import CareersValues from "@/components/careers-values"
import CareersOpenings from "@/components/careers-openings"
import CareersCta from "@/components/careers-cta"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 bg-texture">
        <Header />
          <main>
            <CareersHero />
            <CareersValues />
            <CareersOpenings />
            <CareersCta />
          </main>
        <Footer />
    </div>
  )
}
