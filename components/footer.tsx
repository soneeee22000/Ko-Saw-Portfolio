"use client"

import { Linkedin, Mail, Download, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
    href: "https://www.linkedin.com/in/saw-yan-naing-9287b3135",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sawyannaingmechanical@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const { ref: footerRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

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
    <footer ref={footerRef} className="bg-background border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300 cursor-default">
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
          <div 
            className={`transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div 
            className={`transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className={`group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '500ms' }}
              asChild
            >
              <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
                <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t border-border/50 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saw Yan Naing. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group mt-4 sm:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
