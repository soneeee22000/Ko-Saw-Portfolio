"use client"

import { Linkedin, Mail, Download, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/sawyannaing",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sawyannaing@email.com",
    label: "Email",
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Saw Yan Naing
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Mechanical Engineer | CSWIP 3.1 Welding Inspector
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specializing in piping engineering, welding inspection, and quality 
              assurance across oil & gas, marine, and power industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saw Yan Naing. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
