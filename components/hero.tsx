"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = [
  "Piping Engineer",
  "Welding Inspector",
  "Marine Specialist",
  "QA/QC Professional",
]

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Teams Led" },
]

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  // Stats counter animation
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedStats(stats.map((stat) => Math.round(stat.value * easeOut)))

      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Pre-title */}
          <p className="text-primary font-mono text-sm tracking-widest">
            MECHANICAL ENGINEER | CSWIP 3.1 CERTIFIED
          </p>

          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              Saw Yan Naing
            </h1>
            <div className="h-12 sm:h-14">
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            I specialize in piping systems design, welding inspection, and quality assurance 
            across oil & gas, marine, and power generation industries. My work focuses on 
            delivering precision-engineered solutions that meet international standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-border text-foreground hover:bg-secondary"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-border/50 mt-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary font-mono">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
