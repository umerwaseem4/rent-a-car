import Link from "next/link"
import { CustomButton } from "@/components/custom-button"
import { CustomCard } from "@/components/custom-card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ApplicationSuccess() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <CustomCard className="max-w-2xl mx-auto p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for applying to our rent-to-own program. We've received your application and our team will
              review it shortly.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-lg mb-4">What happens next?</h2>
              <ol className="text-left space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <span className="text-primary font-medium text-sm">1</span>
                  </div>
                  <span>Our team will review your application (typically within 1-2 business days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <span className="text-primary font-medium text-sm">2</span>
                  </div>
                  <span>You'll receive an email notification about your application status</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <span className="text-primary font-medium text-sm">3</span>
                  </div>
                  <span>If approved, a representative will contact you to discuss next steps</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton asChild shape="pill">
                <Link href="/">Return to Home</Link>
              </CustomButton>
              <CustomButton asChild variant="outline" shape="pill">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CustomButton>
            </div>
          </CustomCard>
        </div>
      </section>
    </div>
  )
}
