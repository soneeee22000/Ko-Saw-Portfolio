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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="Saw Yan Naing Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              SYN
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm tracking-wide transition-colors relative ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label.toUpperCase()}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left text-sm tracking-wide py-2 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="/SawYanNaing-Resume.pdf" download="SawYanNaing-Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
