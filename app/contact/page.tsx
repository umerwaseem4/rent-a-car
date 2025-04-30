"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or need assistance? We're here to help you every
              step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
                action: "Call us",
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email",
                details: ["info@g5s.com", "support@g5s.com"],
                action: "Email us",
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Location",
                details: ["123 Car Avenue", "Automotive City, AC 12345"],
                action: "Get directions",
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Business Hours",
                details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM, Sun: Closed"],
                action: "View hours",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="space-y-1 mb-4">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
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
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("subject", value)
                    }
                    value={formData.subject}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="application">
                        Application Status
                      </SelectItem>
                      <SelectItem value="vehicle">
                        Vehicle Information
                      </SelectItem>
                      <SelectItem value="payment">Payment Questions</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full rounded-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Location</h2>
                <p className="text-gray-600 mb-6">
                  Visit our office to meet our team and discuss your car
                  ownership journey in person.
                </p>

                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  {/* This would be replaced with an actual map component in production */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">
                      Interactive Map Would Be Here
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Live Chat</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Chat with our customer service team
                  in real-time.
                </p>
                <Button className="rounded-full">Start Live Chat</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
