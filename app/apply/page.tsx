"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/custom-button";
import { CustomCard } from "@/components/custom-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Upload,
  Car,
  User,
  CreditCard,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function Apply() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    employmentStatus: "",
    monthlyIncome: "",
    carMake: "",
    carModel: "",
    carYear: "",
    carPrice: "",
    downPayment: "",
    termsAgreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Show success message and redirect
      alert("Application submitted successfully! We'll contact you soon.");
      router.push("/application-success");
    } catch (err: any) {
      console.error("Error submitting application:", err);
      setError(
        err.message || "Failed to submit application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apply for Our Rent-to-Own Program
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete the application below to get started on your journey to
              car ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-center relative">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                        step >= stepNumber
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step > stepNumber ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    <span
                      className={`mt-2 text-sm font-medium ${
                        step >= stepNumber ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      {stepNumber === 1 && "Personal Info"}
                      {stepNumber === 2 && "Financial Info"}
                      {stepNumber === 3 && "Vehicle Details"}
                      {stepNumber === 4 && "Review & Submit"}
                    </span>
                  </div>
                ))}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-0">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(step - 1) * 33.33}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <CustomCard>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-600">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <User className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">
                        Personal Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-2 col-span-2 md:col-span-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("state", value)
                          }
                          value={formData.state}
                        >
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            {/* Add more states as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <CustomButton
                        type="button"
                        onClick={nextStep}
                        shape="pill"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </CustomButton>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">
                        Financial Information
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <Label>Employment Status</Label>
                      <RadioGroup
                        onValueChange={(value) =>
                          handleSelectChange("employmentStatus", value)
                        }
                        value={formData.employmentStatus}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full-time" id="full-time" />
                          <Label htmlFor="full-time">Full-time employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="part-time" id="part-time" />
                          <Label htmlFor="part-time">Part-time employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="self-employed"
                            id="self-employed"
                          />
                          <Label htmlFor="self-employed">Self-employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">
                        Monthly Income (USD)
                      </Label>
                      <Input
                        id="monthlyIncome"
                        name="monthlyIncome"
                        type="number"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <Label>Required Documents</Label>
                      <p className="text-sm text-gray-600 mb-2">
                        Please have these documents ready to upload in the final
                        step:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Valid driver's license or government ID",
                          "Proof of income (pay stubs, tax returns, etc.)",
                          "Proof of residence (utility bill, lease agreement)",
                          "References contact information",
                        ].map((doc, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                              <FileText className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <CustomButton
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        shape="pill"
                      >
                        Back
                      </CustomButton>
                      <CustomButton
                        type="button"
                        onClick={nextStep}
                        shape="pill"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </CustomButton>
                    </div>
                  </div>
                )}

                {/* Step 3: Vehicle Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Car className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">Vehicle Details</h2>
                    </div>

                    <Tabs defaultValue="specific" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="specific">
                          I have a specific car
                        </TabsTrigger>
                        <TabsTrigger value="looking">
                          I'm still looking
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="specific" className="pt-6">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="carMake">Car Make</Label>
                              <Input
                                id="carMake"
                                name="carMake"
                                value={formData.carMake}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="carModel">Car Model</Label>
                              <Input
                                id="carModel"
                                name="carModel"
                                value={formData.carModel}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="carYear">Year</Label>
                              <Input
                                id="carYear"
                                name="carYear"
                                value={formData.carYear}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="carPrice">
                                Asking Price (USD)
                              </Label>
                              <Input
                                id="carPrice"
                                name="carPrice"
                                type="number"
                                value={formData.carPrice}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="downPayment">
                              Desired Down Payment (USD)
                            </Label>
                            <Input
                              id="downPayment"
                              name="downPayment"
                              type="number"
                              value={formData.downPayment}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Vehicle Photos (optional)</Label>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">
                                Drag and drop vehicle photos here, or click to
                                browse
                              </p>
                              <CustomButton
                                variant="outline"
                                size="sm"
                                className="mt-4"
                              >
                                Upload Photos
                              </CustomButton>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="looking" className="pt-6">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="budget">Budget Range (USD)</Label>
                            <div className="grid grid-cols-2 gap-4">
                              <Input placeholder="Min" />
                              <Input placeholder="Max" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="preferences">
                              Vehicle Preferences
                            </Label>
                            <Textarea
                              placeholder="Tell us about the type of vehicle you're looking for (make, model, year range, features, etc.)"
                              className="min-h-[120px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="timeline">Timeline</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="When do you need the vehicle?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="immediate">
                                  As soon as possible
                                </SelectItem>
                                <SelectItem value="1month">
                                  Within 1 month
                                </SelectItem>
                                <SelectItem value="3months">
                                  Within 3 months
                                </SelectItem>
                                <SelectItem value="flexible">
                                  Flexible
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="pt-6 flex justify-between">
                      <CustomButton
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        shape="pill"
                      >
                        Back
                      </CustomButton>
                      <CustomButton
                        type="button"
                        onClick={nextStep}
                        shape="pill"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </CustomButton>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">Review & Submit</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">
                              {formData.firstName} {formData.lastName}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">
                              {formData.address}, {formData.city},{" "}
                              {formData.state} {formData.zip}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4">
                          Financial Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Employment Status
                            </p>
                            <p className="font-medium">
                              {formData.employmentStatus || "Not specified"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Monthly Income
                            </p>
                            <p className="font-medium">
                              ${formData.monthlyIncome || "0"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {(formData.carMake || formData.carModel) && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="font-semibold text-lg mb-4">
                            Vehicle Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                Make & Model
                              </p>
                              <p className="font-medium">
                                {formData.carMake} {formData.carModel}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Year</p>
                              <p className="font-medium">
                                {formData.carYear || "Not specified"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Price</p>
                              <p className="font-medium">
                                ${formData.carPrice || "0"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Down Payment
                              </p>
                              <p className="font-medium">
                                ${formData.downPayment || "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="termsAgreed"
                            checked={formData.termsAgreed}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "termsAgreed",
                                checked as boolean
                              )
                            }
                            required
                          />
                          <label
                            htmlFor="termsAgreed"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the terms and conditions and privacy
                            policy
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="marketing" />
                          <label
                            htmlFor="marketing"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to receive marketing communications
                          </label>
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <CustomButton
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          shape="pill"
                        >
                          Back
                        </CustomButton>
                        <CustomButton
                          type="submit"
                          shape="pill"
                          disabled={!formData.termsAgreed || loading}
                        >
                          {loading ? "Submitting..." : "Submit Application"}
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CustomCard>
          </div>
        </div>
      </section>
    </div>
  );
}
