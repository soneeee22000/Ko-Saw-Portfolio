"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-background/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with entrance animation */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group flex items-center gap-2 transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="Saw Yan Naing Logo"
                width={32}
                height={32}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              SYN
            </span>
          </button>

          {/* Desktop Navigation with staggered entrance */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`group text-sm tracking-wide transition-all duration-300 relative ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                } ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                {link.label.toUpperCase()}
                {/* Animated underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
                {/* Active indicator dot */}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Download CV Button with animations */}
          <div 
            className={`hidden md:block transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              variant="outline"
              size="sm"
              className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
                <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="relative z-10">Resume</span>
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className={`md:hidden text-foreground p-2 transition-all duration-300 hover:text-primary ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div 
        className={`md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`group block w-full text-left text-sm tracking-wide py-3 px-2 rounded-lg transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              <span className="flex items-center gap-2">
                {activeSection === link.href.substring(1) && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                )}
                {link.label.toUpperCase()}
              </span>
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group relative overflow-hidden transition-all duration-300"
            asChild
          >
            <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
              <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-0.5" />
              Resume
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
