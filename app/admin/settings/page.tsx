"use client"

import type React from "react"

import { useState } from "react"
import { CustomCard } from "@/components/custom-card"
import { CustomButton } from "@/components/custom-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Save } from "lucide-react"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Company Information</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 text-green-600">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Settings saved successfully!</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="DriveFlex" className="mt-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="info@driveflex.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Car Avenue, Automotive City, AC 12345" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="businessHours">Business Hours</Label>
                  <Textarea
                    id="businessHours"
                    defaultValue="Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM\nSun: Closed"
                    className="mt-1"
                  />
                </div>

                <CustomButton type="submit" disabled={loading}>
                  {loading ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" /> Save Changes
                    </>
                  )}
                </CustomButton>
              </div>
            </form>
          </CustomCard>
        </div>

        <div className="space-y-8">
          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Admin Account</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <CustomButton variant="outline" className="w-full">
                  Change Password
                </CustomButton>

                <CustomButton variant="outline" className="w-full">
                  Update Profile
                </CustomButton>
              </div>
            </div>
          </CustomCard>

          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">System Information</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Version</p>
                  <p className="font-medium">1.0.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  )
}
