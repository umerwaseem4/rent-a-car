import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Award, Users, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-primary">DriveFlex</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                We're on a mission to make car ownership accessible to everyone through our innovative rent-to-own
                program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full text-base">
                  <Link href="/apply">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Team photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">How we're changing the car ownership landscape</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Company founding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl font-bold">Founded on a Simple Belief</h3>
              <p className="text-lg text-gray-600">
                DriveFlex was founded in 2018 with a simple yet powerful belief: everyone deserves access to reliable
                transportation, regardless of their credit history or financial background.
              </p>
              <p className="text-lg text-gray-600">
                Our founders experienced firsthand the challenges many face when trying to purchase a vehicle through
                traditional financing. They recognized that the existing system left many hardworking individuals
                without options.
              </p>
              <p className="text-lg text-gray-600">
                This realization sparked the creation of our innovative rent-to-own program, designed to provide a
                flexible path to car ownership for those underserved by conventional auto financing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Growth & Vision</h3>
              <p className="text-lg text-gray-600">
                What began as a small operation has grown into a trusted solution for thousands of clients across the
                region. Our success is built on transparency, flexibility, and a genuine commitment to our customers'
                success.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services, always guided by our core mission: to transform
                the car buying experience and make vehicle ownership accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                Our vision for the future includes expanding to new markets, enhancing our digital platform, and
                developing even more flexible financing solutions to meet the evolving needs of our diverse customer
                base.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl -z-10"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Company growth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Accessibility",
                description:
                  "We believe everyone deserves access to reliable transportation, regardless of their financial history.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Transparency",
                description:
                  "We provide clear, straightforward information about our process, terms, and costs with no hidden fees.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Customer Success",
                description: "We measure our success by the success of our customers in achieving vehicle ownership.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description: "We operate with honesty and ethical standards in every interaction and decision.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">The difference we're making in our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "5,000+",
                label: "Satisfied Customers",
                description: "Individuals and families who have successfully obtained vehicles through our program.",
              },
              {
                number: "85%",
                label: "Completion Rate",
                description: "Clients who successfully complete their payment terms and achieve full ownership.",
              },
              {
                number: "$12M+",
                label: "Community Investment",
                description: "Total value of vehicles we've helped our customers acquire since our founding.",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Community Initiatives</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Beyond our core business, we're committed to giving back to the communities we serve through various
              initiatives:
            </p>
            <ul className="space-y-4">
              {[
                "Financial literacy workshops to help individuals build credit and manage finances",
                "Annual scholarship program for students pursuing automotive technology education",
                "Partnership with local job training programs to create employment opportunities",
                "Vehicle donation program for families in emergency situations",
              ].map((initiative, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-700">{initiative}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">The experienced professionals guiding our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Alex Johnson",
                title: "Founder & CEO",
                bio: "With over 15 years in automotive financing, Alex founded DriveFlex to create more inclusive vehicle ownership opportunities.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Williams",
                title: "Chief Operations Officer",
                bio: "Sarah brings extensive experience in operations management and customer service excellence to our leadership team.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                title: "Chief Financial Officer",
                bio: "Michael's background in financial services helps ensure our programs remain sustainable while serving our customers.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Patel",
                title: "Customer Success Director",
                bio: "Priya leads our customer support team with a focus on creating positive experiences throughout the ownership journey.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Wilson",
                title: "Vehicle Acquisitions Manager",
                bio: "James leverages his automotive industry expertise to help customers find the perfect vehicle for their needs.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Maria Rodriguez",
                title: "Community Relations Manager",
                bio: "Maria develops our community initiatives and partnerships to extend our impact beyond our core business.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step toward vehicle ownership with our flexible rent-to-own program.
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
