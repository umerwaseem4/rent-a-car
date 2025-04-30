"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, ArrowRight, HelpCircle } from "lucide-react"

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is rent-to-own and how does it work?",
        answer:
          "Rent-to-own is a flexible financing option that allows you to rent a vehicle with the option to purchase it over time. You make regular payments, and a portion of each payment goes toward the eventual purchase of the vehicle. At the end of the agreed term, you'll have the option to make a final payment to own the car outright.",
      },
      {
        question: "What are the benefits of rent-to-own compared to traditional financing?",
        answer:
          "Rent-to-own offers several advantages: lower upfront costs, more flexible approval criteria, the ability to choose virtually any car that meets our basic requirements, customizable payment terms, and a clear path to ownership. It's particularly beneficial for those who may not qualify for traditional auto loans or prefer a more flexible arrangement.",
      },
      {
        question: "How long does the application process take?",
        answer:
          "Most applications receive a preliminary response within 24-48 hours. The complete process, from application to driving away in your car, typically takes 3-7 business days, depending on the specific vehicle and your documentation readiness.",
      },
    ],
  },
  {
    category: "Vehicle Selection",
    questions: [
      {
        question: "Can I choose any car I want?",
        answer:
          "You can select virtually any car that meets our basic criteria for age, condition, and value. This includes vehicles from dealerships, private sellers, online marketplaces, or even our inventory. We generally approve vehicles that are less than 10 years old with fewer than 100,000 miles, though exceptions can be made on a case-by-case basis.",
      },
      {
        question: "What if I haven't found a car yet?",
        answer:
          "No problem! You can still apply and get pre-approved. Once approved, we can help you find a suitable vehicle that matches your needs and budget, or you can continue your search with the confidence of knowing your financing is already arranged.",
      },
      {
        question: "Are there any restrictions on the type of vehicle I can choose?",
        answer:
          "While we're flexible, we do have some basic requirements. The vehicle should generally be less than 10 years old, have fewer than 100,000 miles, have a clean title (no salvage or rebuilt titles), and pass our inspection for safety and reliability. Luxury or exotic vehicles may require additional approval.",
      },
    ],
  },
  {
    category: "Payments & Terms",
    questions: [
      {
        question: "What's the usual term length for a rent-to-own agreement?",
        answer:
          "Our terms typically range from 24 to 48 months, depending on the vehicle's value and your financial situation. We work with you to create a payment plan that fits your budget while ensuring a reasonable path to ownership.",
      },
      {
        question: "How are my payments calculated?",
        answer:
          "Your payments are calculated based on several factors: the purchase price of the vehicle, the length of your term, any down payment you make, applicable taxes and fees, and our service fee. We provide a transparent breakdown of all costs before you sign any agreement.",
      },
      {
        question: "What if I miss a payment?",
        answer:
          "We understand that financial challenges can arise. If you anticipate difficulty making a payment, contact us immediately. We offer a grace period and can work with you on solutions. Persistent missed payments without communication may affect your agreement status and could eventually lead to vehicle recovery.",
      },
      {
        question: "Can I pay off my agreement early?",
        answer:
          "Yes! You can pay off your agreement at any time with no prepayment penalties. Early payoff can save you money on the overall cost of the vehicle. Contact our customer service team for your current payoff amount.",
      },
    ],
  },
  {
    category: "Ownership & Maintenance",
    questions: [
      {
        question: "When do I officially own the car?",
        answer:
          "You officially own the car after making all scheduled payments or paying the remaining balance in full. At that point, we transfer the title to your name, and the vehicle is completely yours.",
      },
      {
        question: "Who is responsible for maintenance and repairs?",
        answer:
          "As the renter and future owner, you're responsible for routine maintenance and repairs. We recommend following the manufacturer's maintenance schedule to keep the vehicle in good condition. Some of our plans include optional maintenance packages for additional peace of mind.",
      },
      {
        question: "Is insurance required?",
        answer:
          "Yes, full coverage insurance is required throughout the term of your agreement, with our company listed as the lienholder. This protects both your investment and ours. We can provide recommendations for insurance providers if needed.",
      },
    ],
  },
  {
    category: "Application & Qualification",
    questions: [
      {
        question: "What do I need to qualify?",
        answer:
          "Our basic requirements include: valid driver's license, proof of steady income, proof of residence, personal references, and the ability to make the initial payment. We consider your overall financial situation rather than just credit scores.",
      },
      {
        question: "Will you check my credit?",
        answer:
          "We may perform a soft credit check as part of our evaluation process, but we consider many factors beyond just credit scores. Our approval process focuses more on your current income stability and ability to make regular payments.",
      },
      {
        question: "What documents do I need to provide?",
        answer:
          "You'll need to provide: government-issued photo ID, proof of income (pay stubs, bank statements, etc.), proof of residence (utility bill, lease agreement, etc.), references, and insurance information. Additional documents may be requested based on your specific situation.",
      },
    ],
  },
]

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">Find answers to common questions about our rent-to-own program</p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for questions..."
                className="pl-10 py-6 text-lg rounded-full"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, index) => (
                <div key={index} className="mb-12">
                  <div
                    className="flex items-center gap-3 mb-6 cursor-pointer"
                    onClick={() => toggleCategory(category.category)}
                  >
                    <HelpCircle className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>

                  <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No matching questions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all categories</p>
                <Button variant="outline" onClick={() => setSearchQuery("")} className="rounded-full">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you with any additional questions or concerns you may have about our rent-to-own
              program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
