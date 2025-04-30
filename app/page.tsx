import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components/custom-button";
import { CustomCard } from "@/components/custom-card";
import {
  CheckCircle,
  ArrowRight,
  Car,
  Wallet,
  Calendar,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/20 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-secondary/10 to-transparent rounded-full"></div>

        {/* Floating elements */}
        <div className="absolute top-40 left-20 w-20 h-20 bg-primary/10 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-secondary/10 rounded-full hidden lg:block"></div>
        <div className="absolute top-60 right-20 w-12 h-12 bg-accent/10 rounded-full hidden lg:block"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Drive Today, Own Tomorrow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Journey to <br />
                <span className="relative">
                  <span className="relative z-10 text-primary">
                    Car Ownership
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/20 rounded-full"></span>
                </span>
                <br />
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Our flexible rent-to-own program makes car ownership accessible
                with low upfront costs and personalized terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/apply">
                  <CustomButton size="lg" shape="pill">
                    Apply Now
                  </CustomButton>
                </Link>
                <Link href="/how-it-works">
                  <CustomButton size="lg" variant="outline" shape="pill">
                    How It Works <ArrowRight className="ml-2 h-4 w-4" />
                  </CustomButton>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">No credit required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Flexible terms</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/5 -z-10"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg"
                  alt="Luxury car"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px] transition-transform duration-300 hover:scale-[1.05]">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="font-medium">Choose Any Car</span>
                </div>
                <p className="text-sm text-gray-600">
                  You pick the car, we make it happen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Benefits</span> of Our Rent-to-Own
              Program
            </h2>
            <p className="text-xl text-gray-600">
              We've designed our program to make car ownership accessible and
              stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="h-10 w-10 text-white" />,
                title: "Choose Your Car",
                description:
                  "Select any car from a dealership, marketplace, or our inventory that fits your needs and budget.",
                color: "bg-primary",
              },
              {
                icon: <Wallet className="h-10 w-10 text-white" />,
                title: "Low Upfront Cost",
                description:
                  "Start driving with minimal initial investment compared to traditional financing options.",
                color: "bg-secondary",
              },
              {
                icon: <Calendar className="h-10 w-10 text-white" />,
                title: "Flexible Terms",
                description:
                  "Customize your payment schedule and contract length to match your financial situation.",
                color: "bg-accent",
              },
              {
                icon: <Shield className="h-10 w-10 text-white" />,
                title: "Path to Ownership",
                description:
                  "Every payment brings you closer to owning your vehicle outright with a clear timeline.",
                color: "bg-primary",
              },
            ].map((benefit, index) => (
              <CustomCard
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow p-0 overflow-hidden"
              >
                <div className={`${benefit.color} p-6 text-white`}>
                  <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Process Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to get you behind the wheel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Car",
                description:
                  "Find your perfect car from any dealership, marketplace, or our inventory.",
              },
              {
                step: "02",
                title: "We Approve & Purchase",
                description:
                  "We evaluate the car, approve your application, and purchase the vehicle.",
              },
              {
                step: "03",
                title: "Drive & Own",
                description:
                  "Start driving with a flexible rental agreement that leads to ownership.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <CustomButton size="lg" shape="pill">
                Learn More About Our Process{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements Preview */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-secondary/5 to-transparent rounded-full"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Easy Qualification
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Simple Requirements to Get Started
              </h2>
              <p className="text-xl text-gray-600">
                We've made our qualification process straightforward and
                accessible
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  "Valid driver's license",
                  "Proof of income or employment",
                  "Credit check information (if applicable)",
                  "Personal references",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-primary/10 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/requirements">
                  <CustomButton size="lg" shape="pill">
                    View Full Requirements
                  </CustomButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/5 -z-10"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg"
                  alt="Person signing documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey to Car Ownership?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Apply today and get pre-approved within 24 hours. Our team is
              ready to help you find and finance your perfect car.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <CustomButton size="lg" shape="pill">
                  Apply Now
                </CustomButton>
              </Link>
              <Link href="/contact">
                <CustomButton size="lg" variant="outline" shape="pill">
                  Contact Us
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
