import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, FileText, CreditCard, User, Calendar } from "lucide-react"

export default function Requirements() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Requirements to Qualify</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've made our qualification process straightforward and accessible to help more people achieve car
              ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Personal Requirements</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Valid driver's license",
                    "Must be at least 21 years of age",
                    "Proof of residence (utility bill, lease agreement, etc.)",
                    "Contact information (phone, email, address)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Financial Requirements</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Proof of steady income or employment",
                    "Bank statements (last 3 months)",
                    "Ability to make the initial payment",
                    "Credit check information (if applicable)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Documentation Needed</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Government-issued photo ID",
                    "Proof of insurance capability",
                    "Personal references (2-3 contacts)",
                    "Previous address history (if applicable)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Person reviewing documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Look For</h2>
            <p className="text-xl text-gray-600">Our approval process focuses on these key factors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                title: "Stability",
                description:
                  "We value consistency in residence and employment history. Showing stability in these areas strengthens your application.",
                points: ["Employment history", "Residence stability", "Consistent income"],
              },
              {
                icon: <CreditCard className="h-10 w-10 text-primary" />,
                title: "Affordability",
                description:
                  "We ensure the payment plan fits comfortably within your budget to set you up for success in the program.",
                points: ["Income-to-payment ratio", "Monthly expenses", "Financial obligations"],
              },
              {
                icon: <User className="h-10 w-10 text-primary" />,
                title: "Responsibility",
                description:
                  "We look for indicators that you'll maintain the vehicle and honor the agreement terms throughout the program.",
                points: ["Payment history", "References", "Communication"],
              },
            ].map((factor, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600 mb-4">{factor.description}</p>
                  <ul className="space-y-2">
                    {factor.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Misconceptions</h2>
            <p className="text-xl text-gray-600">Let's clear up some misunderstandings about our requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                myth: "You need perfect credit to qualify",
                reality:
                  "We consider your overall financial situation, not just your credit score. Many clients with less-than-perfect credit are approved.",
                icon: <XCircle className="h-6 w-6 text-red-500" />,
              },
              {
                myth: "The process takes weeks to complete",
                reality:
                  "Most applications are processed within 1-3 business days, with many receiving same-day pre-approval.",
                icon: <XCircle className="h-6 w-6 text-red-500" />,
              },
              {
                myth: "You can only choose from specific cars",
                reality:
                  "You can select virtually any car that meets our basic criteria for age, condition, and value.",
                icon: <XCircle className="h-6 w-6 text-red-500" />,
              },
              {
                myth: "There are hidden fees in the process",
                reality:
                  "We pride ourselves on transparency. All fees and costs are clearly outlined before you sign any agreement.",
                icon: <XCircle className="h-6 w-6 text-red-500" />,
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold">Myth: {item.myth}</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Reality:</h3>
                      <p className="text-gray-600">{item.reality}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our application process is quick and straightforward. Get pre-approved today and be one step closer to
              driving your new car.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link href="/apply">Start Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <Link href="/contact">Have Questions? Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
