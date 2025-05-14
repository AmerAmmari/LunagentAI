"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lunagent AI has completely transformed how we analyze customer data. The insights we've gained have directly contributed to a 35% increase in customer retention.",
      author: "Sarah Johnson",
      title: "CMO, TechVision Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Implementing Lunagent's AI solutions has streamlined our operations and reduced manual processing time by 70%. Their team's expertise is unmatched.",
      author: "Michael Chen",
      title: "CTO, Innovate Solutions",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The predictive analytics tools from Lunagent have given us a competitive edge in our market. We can now anticipate trends before they happen.",
      author: "Jessica Williams",
      title: "Data Director, Global Retail",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-purple-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our clients have to say about their experience working with Lunagent AI.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-12">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 150 + 200} direction={i % 2 === 0 ? "up" : "down"}>
              <Card className="overflow-hidden dark:border-gray-800 dark:bg-gray-900 transition-all hover:shadow-lg duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col gap-4">
                  <Quote className="h-8 w-8 text-purple-300" />
                  <p className="text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
