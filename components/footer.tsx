import Link from "next/link";
import { CustomButton } from "@/components/custom-button";
import { Input } from "@/components/ui/input";
import {
  Car,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-full p-2">
                  <Car className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                G5S
              </span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Making car ownership accessible through flexible rent-to-own
              solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                  <CustomButton
                    variant="outline"
                    size="icon"
                    className="relative rounded-full hover:border-transparent"
                  >
                    <Icon className="h-5 w-5 group-hover:text-white transition-colors duration-300" />
                  </CustomButton>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/requirements", label: "Requirements" },
                { href: "/apply", label: "Apply Now" },
                { href: "/faqs", label: "FAQs" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors relative group"
                  >
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Phone className="h-5 w-5 text-primary" />,
                  text: "+1 (555) 123-4567",
                },
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  text: "info@G5S.com",
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  text: "123 Car Avenue, Automotive City, AC 12345",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-0.5 bg-primary/10 rounded-full p-1.5 group-hover:bg-primary/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"></span>
            </h3>
            <p className="text-gray-600">
              Subscribe to get updates on new cars and special offers.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full bg-white pr-24 border-gray-200 focus:border-primary h-12"
              />
              <CustomButton
                size="sm"
                shape="pill"
                className="absolute right-1 top-1 h-10"
              >
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} G5S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
