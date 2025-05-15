import Header from "@/components/header"
import Footer from "@/components/footer"
import EmailUs from "@/components/email-us"
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 bg-texture">
      <Header />
        <main>
          <Suspense fallback={null}>
            <EmailUs />
          </Suspense>
        </main>
      <Footer />
    </div>
  )
}
