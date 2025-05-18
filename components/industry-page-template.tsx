"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import { Check } from "lucide-react"
import ContactForm from "@/components/contact-form"
import GradientBackground from "@/components/gradient-background"

interface IndustryPageTemplateProps {
  industry: string
}

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const { t } = useLanguage()

  // Get the industry-specific translations
  const title = t(`${industry}Title` as any) || ""
  const subtitle = t(`${industry}Subtitle` as any) || ""
  const description = t(`${industry}Description` as any) || ""
  const challenges = t(`${industry}Challenges` as any) || []
  const solutions = t(`${industry}Solutions` as any) || []
  const benefits = t(`${industry}Benefits` as any) || []

  // Define key benefits for each industry
  const keyBenefits = {
    healthcare: [
      {
        title: "Improved Patient Outcomes",
        description:
          "AI-powered diagnostics and personalized treatment plans lead to better patient outcomes and higher satisfaction rates.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Streamlined workflows and automated administrative tasks reduce costs and allow staff to focus on patient care.",
      },
      {
        title: "Enhanced Research Capabilities",
        description:
          "Advanced data analysis accelerates medical research, drug discovery, and development of new treatments.",
      },
    ],
    finance: [
      {
        title: "Fraud Prevention",
        description:
          "Real-time monitoring and advanced pattern recognition detect and prevent fraudulent activities before they cause damage.",
      },
      {
        title: "Personalized Banking",
        description:
          "AI-driven insights enable tailored financial advice and product recommendations for each customer.",
      },
      {
        title: "Risk Management",
        description:
          "Sophisticated models assess credit risk more accurately, reducing defaults while expanding lending opportunities.",
      },
    ],
    retail: [
      {
        title: "Customer Experience",
        description:
          "Personalized shopping experiences and recommendations increase customer satisfaction and loyalty.",
      },
      {
        title: "Inventory Optimization",
        description:
          "AI-powered demand forecasting reduces stockouts and overstock situations, optimizing inventory levels.",
      },
      {
        title: "Competitive Pricing",
        description: "Dynamic pricing strategies maximize revenue while maintaining competitive market position.",
      },
    ],
    manufacturing: [
      {
        title: "Predictive Maintenance",
        description:
          "AI algorithms predict equipment failures before they occur, reducing downtime and maintenance costs.",
      },
      {
        title: "Quality Control",
        description: "Automated inspection systems detect defects with greater accuracy than manual inspection.",
      },
      {
        title: "Supply Chain Optimization",
        description: "End-to-end visibility and predictive analytics improve supply chain resilience and efficiency.",
      },
    ],
    education: [
      {
        title: "Personalized Learning",
        description: "Adaptive learning platforms adjust to each student's needs, improving engagement and outcomes.",
      },
      {
        title: "Early Intervention",
        description:
          "Predictive analytics identify at-risk students early, enabling timely support and reducing dropout rates.",
      },
      {
        title: "Administrative Efficiency",
        description: "Automated administrative tasks free up educators to focus on teaching and student interaction.",
      },
    ],
    marketing: [
      {
        title: "Targeted Campaigns",
        description: "AI-driven audience segmentation ensures marketing messages reach the most receptive audiences.",
      },
      {
        title: "Content Optimization",
        description: "Data-driven insights guide content creation that resonates with your target audience.",
      },
      {
        title: "Customer Journey Mapping",
        description: "Comprehensive tracking and analysis optimize every touchpoint in the customer journey.",
      },
    ],
  }

  // Define workflow examples for each industry
  const workflowExamples = {
    healthcare: {
      title: "Patient Journey Optimization",
      description:
        "Our AI system analyzes patient data to streamline the entire care journey, from appointment scheduling to follow-up care.",
      steps: [
        "Patient books appointment through AI-powered scheduling system that finds optimal time slots",
        "Pre-visit questionnaires are automatically sent and analyzed to prepare clinicians",
        "During visit, AI assists with diagnosis by analyzing symptoms against medical database",
        "Post-visit, system generates personalized care plans and schedules follow-ups",
        "Continuous monitoring through connected devices with alerts for concerning changes",
      ],
      result:
        "This integrated approach has helped our healthcare clients reduce administrative time by 35% while improving patient satisfaction scores by 28%.",
    },
    finance: {
      title: "Automated Loan Processing",
      description:
        "Our AI-powered loan processing system reduces approval times from days to minutes while improving accuracy.",
      steps: [
        "Customer submits loan application through digital portal",
        "AI instantly verifies identity and authenticates documents",
        "Credit risk assessment algorithm analyzes financial history and current market conditions",
        "System generates personalized loan offers based on risk profile",
        "Digital contract generation and e-signature process completes the transaction",
      ],
      result:
        "Financial institutions using this system have seen a 65% reduction in processing time and a 40% decrease in default rates.",
    },
    retail: {
      title: "Omnichannel Customer Experience",
      description: "Our retail automation platform creates seamless shopping experiences across all channels.",
      steps: [
        "Customer behavior is tracked across online and in-store touchpoints",
        "AI generates personalized product recommendations based on preferences and history",
        "Inventory management system ensures product availability across all channels",
        "Automated marketing campaigns target customers with relevant offers at optimal times",
        "Post-purchase follow-up maintains engagement and encourages repeat business",
      ],
      result:
        "Retailers implementing this system have experienced a 45% increase in repeat purchases and a 30% boost in average order value.",
    },
    manufacturing: {
      title: "Smart Factory Workflow",
      description: "Our manufacturing automation system optimizes production from raw materials to finished products.",
      steps: [
        "AI-powered demand forecasting informs production scheduling",
        "Automated quality control inspects incoming raw materials",
        "Real-time production monitoring adjusts parameters for optimal efficiency",
        "Predictive maintenance prevents equipment failures and downtime",
        "Automated packaging and logistics coordination streamlines distribution",
      ],
      result:
        "Manufacturers using this system have achieved 23% higher production efficiency and reduced quality issues by 37%.",
    },
    education: {
      title: "Adaptive Learning Platform",
      description: "Our education workflow automation creates personalized learning experiences for each student.",
      steps: [
        "Initial assessment determines student's knowledge level and learning style",
        "AI generates personalized curriculum and learning materials",
        "Continuous assessment adjusts difficulty and approach based on performance",
        "Early warning system identifies struggling students for instructor intervention",
        "Automated progress reports keep students, parents, and educators informed",
      ],
      result:
        "Educational institutions using this platform have seen a 42% improvement in student engagement and a 31% increase in subject mastery.",
    },
    marketing: {
      title: "Campaign Optimization Workflow",
      description: "Our marketing automation platform maximizes campaign performance through continuous optimization.",
      steps: [
        "AI analyzes customer data to identify high-value segments",
        "Content generation tools create personalized messaging for each segment",
        "Automated A/B testing determines most effective creative elements",
        "Real-time campaign monitoring adjusts budget allocation to best-performing channels",
        "Post-campaign analysis generates insights for future marketing efforts",
      ],
      result:
        "Marketing teams using this workflow have achieved 53% higher conversion rates and 38% lower customer acquisition costs.",
    },
  }

  // Get the specific benefits and workflow example for this industry
  const industryBenefits = keyBenefits[industry as keyof typeof keyBenefits] || []
  const workflowExample = workflowExamples[industry as keyof typeof workflowExamples] || {
    title: "",
    description: "",
    steps: [],
    result: "",
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <SectionTransition className="relative pt-32 pb-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <GradientBackground intensity="subtle" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-4">
                {t("industriesTitle")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{subtitle}</p>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          </div>
        </SectionTransition>

        {/* Combined Challenges & Solutions Section */}
        <SectionTransition className="py-16 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Challenges & Solutions</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenges Column */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-theme-primary">{t("industryChallenges")}</h3>
                  <div className="space-y-4">
                    {Array.isArray(challenges) &&
                      challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Check className="h-4 w-4 text-theme-primary" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Solutions Column */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-theme-primary">{t("industrySolutions")}</h3>
                  <div className="space-y-4">
                    {Array.isArray(solutions) &&
                      solutions.map((solution, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <Check className="h-4 w-4 text-theme-primary" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Key Benefits Section */}
        <SectionTransition className="py-16 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t("industryBenefits")}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industryBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600"
                  >
                    <h3 className="text-xl font-bold mb-3 text-theme-primary">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Workflow Example Section */}
        <SectionTransition className="py-16 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Workflow Automation Example</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                See how our AI solutions can transform your operations with this real-world example
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">{workflowExample.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{workflowExample.description}</p>

                <div className="space-y-6 mb-8">
                  {workflowExample.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-theme-primary text-white rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-700 dark:text-gray-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{workflowExample.result}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition className="py-16 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Interested? See how we can help you grow and modernize your business
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer comprehensive solutions including custom workflow automation, website development, and training
                programs to ensure your team can effectively use the new systems. Our approach is tailored to your
                specific needs, ensuring a seamless transition and maximum ROI.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Custom Workflows</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Tailored automation solutions designed specifically for your business processes
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Website Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Modern, responsive websites integrated with your business systems
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Comprehensive Training</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Hands-on training programs to ensure your team can maximize the new technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Contact Section */}
        <SectionTransition className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("industryContact")}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ready to transform your {title.toLowerCase()} operations with AI? Contact us today to learn how our
                solutions can address your specific challenges.
              </p>
              <ContactForm />
            </div>
          </div>
        </SectionTransition>
      </main>
      <Footer />
    </div>
  )
}
