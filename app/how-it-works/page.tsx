import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Car, ClipboardCheck, CreditCard, Key } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Rent-to-Own Process Works</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've simplified the car ownership journey with a transparent, flexible process designed around your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Car",
                description:
                  "Find your perfect vehicle from any dealership, marketplace, or our inventory. Unlike traditional leasing, you're not limited to specific models or years.",
                details: [
                  "Browse dealerships or online marketplaces",
                  "Consider private sellers or our pre-approved inventory",
                  "Select a vehicle that fits your needs and budget",
                  "Share the vehicle details with our team",
                ],
                image: "/placeholder.svg?height=600&width=800",
                icon: <Car className="h-8 w-8 text-primary" />,
              },
              {
                step: "02",
                title: "Vehicle Evaluation & Approval",
                description:
                  "Our team evaluates the vehicle to ensure it's a good investment for both parties. We check its condition, history, and value.",
                details: [
                  "We perform a comprehensive vehicle inspection",
                  "Review vehicle history and documentation",
                  "Assess fair market value and future value retention",
                  "Approve the vehicle for the rent-to-own program",
                ],
                image: "/placeholder.svg?height=600&width=800",
                icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
              },
              {
                step: "03",
                title: "We Purchase & Create Your Plan",
                description:
                  "Once approved, we purchase the vehicle and create a customized ownership plan based on your financial situation and preferences.",
                details: [
                  "We handle the purchase process with the seller",
                  "Create a personalized payment schedule",
                  "Determine the contract length and terms",
                  "Set up convenient payment methods",
                ],
                image: "/placeholder.svg?height=600&width=800",
                icon: <CreditCard className="h-8 w-8 text-primary" />,
              },
              {
                step: "04",
                title: "Drive & Progress to Ownership",
                description:
                  "Start driving your car while making regular payments. Each payment brings you closer to full ownership of the vehicle.",
                details: [
                  "Drive away in your new vehicle",
                  "Make regular payments according to your plan",
                  "Track your progress toward ownership",
                  "Receive the title once all payments are complete",
                ],
                image: "/placeholder.svg?height=600&width=800",
                icon: <Key className="h-8 w-8 text-primary" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} mb-24`}
              >
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-3">{step.icon}</div>
                    <span className="text-xl font-semibold text-primary">Step {step.step}</span>
                  </div>

                  <h2 className="text-3xl font-bold">{step.title}</h2>
                  <p className="text-lg text-gray-600">{step.description}</p>

                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-3">What happens in this step:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`relative order-1 ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
                  <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Rent-to-Own vs. Traditional Financing</h2>
            <p className="text-xl text-gray-600">
              See how our flexible program compares to traditional car buying options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Rent-to-Own with Us</h3>
                <ul className="space-y-4">
                  {[
                    "Lower upfront costs - minimal down payment required",
                    "Flexible approval process - less emphasis on credit score",
                    "Choose any car that meets our basic criteria",
                    "Customizable payment schedule to fit your budget",
                    "No long-term debt obligation - can return the vehicle if needed",
                    "Clear path to ownership with every payment",
                    "Maintenance support and guidance throughout the term",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Traditional Financing</h3>
                <ul className="space-y-4">
                  {[
                    "Significant down payment often required",
                    "Strict credit requirements and approval process",
                    "Limited to vehicles that banks will finance",
                    "Fixed payment schedule with less flexibility",
                    "Long-term loan commitment",
                    "Interest-heavy payments in early years",
                    "Maintenance and repairs fully your responsibility",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full h-5 w-5 border border-gray-300 flex items-center justify-center mt-0.5">
                        <span className="text-gray-400 text-xs">✓</span>
                      </div>
                      <span className="text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of the process and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
