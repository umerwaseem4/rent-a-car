"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CustomButton } from "@/components/custom-button";
import { cn } from "@/lib/utils";
import { Car, Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const routes = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/requirements", label: "Requirements" },
  { href: "/apply", label: "Apply Now" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-full p-2">
              <Car className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
            </div>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            G5S
          </span>
        </Link>

        {isMobile ? (
          <CustomButton
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </CustomButton>
        ) : (
          <nav className="flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="relative text-foreground/80 hover:text-primary transition-colors font-medium group"
              >
                {route.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <CustomButton shape="pill" className="ml-2">
              Get Started
            </CustomButton>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium border-b border-gray-100 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <CustomButton className="mt-2 w-full" shape="pill">
            Get Started
          </CustomButton>
        </div>
      )}
    </header>
  );
}
