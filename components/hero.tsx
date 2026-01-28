"use client"

import { useEffect, useState, useRef } from "react"
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

// Floating particle component
function FloatingParticle({ delay, duration, size, left, top }: {
  delay: number
  duration: number
  size: number
  left: string
  top: string
}) {
  return (
    <div
      className="absolute rounded-full bg-primary/20 animate-float"
      style={{
        width: size,
        height: size,
        left,
        top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mark as loaded after mount for entrance animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mouse parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 animate-gradient" />
      
      {/* Moving gradient orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -top-48 -left-48 transition-transform duration-[2s] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] -bottom-32 -right-32 transition-transform duration-[2s] ease-out"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[80px] top-1/3 right-1/4 transition-transform duration-[1.5s] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} duration={8} size={6} left="10%" top="20%" />
        <FloatingParticle delay={1} duration={10} size={4} left="20%" top="60%" />
        <FloatingParticle delay={2} duration={7} size={8} left="80%" top="30%" />
        <FloatingParticle delay={0.5} duration={9} size={5} left="70%" top="70%" />
        <FloatingParticle delay={1.5} duration={11} size={6} left="40%" top="15%" />
        <FloatingParticle delay={3} duration={8} size={4} left="90%" top="80%" />
        <FloatingParticle delay={2.5} duration={10} size={7} left="15%" top="85%" />
        <FloatingParticle delay={1} duration={9} size={5} left="60%" top="45%" />
      </div>

      {/* Enhanced grid pattern with animation */}
      <div 
        className="absolute inset-0 opacity-[0.03] transition-transform duration-[1s] ease-out"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        }}
      />

      {/* Radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Pre-title with entrance animation */}
          <p 
            className={`text-primary font-mono text-sm tracking-widest transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            MECHANICAL ENGINEER | CSWIP 3.1 CERTIFIED
          </p>

          {/* Name with staggered entrance */}
          <div className="space-y-2">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance transition-all duration-700 delay-100 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-block hover:text-primary transition-colors duration-300">
                Saw
              </span>{" "}
              <span className="inline-block hover:text-primary transition-colors duration-300">
                Yan
              </span>{" "}
              <span className="inline-block hover:text-primary transition-colors duration-300">
                Naing
              </span>
            </h1>
            <div 
              className={`h-12 sm:h-14 transition-all duration-700 delay-200 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse text-primary inline-block">|</span>
              </span>
            </div>
          </div>

          {/* Description with entrance animation */}
          <p 
            className={`text-muted-foreground text-lg max-w-2xl leading-relaxed transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I specialize in piping systems design, welding inspection, and quality assurance 
            across oil & gas, marine, and power generation industries. My work focuses on 
            delivering precision-engineered solutions that meet international standards.
          </p>

          {/* CTA Buttons with entrance and hover effects */}
          <div 
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-[400ms] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-border text-foreground hover:bg-secondary group transition-all duration-300 hover:scale-105 hover:border-primary/50"
            >
              <Mail className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Get in Touch
            </Button>
          </div>

          {/* Stats with staggered entrance */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-border/50 mt-12 transition-all duration-700 delay-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center sm:text-left group"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary font-mono transition-transform duration-300 group-hover:scale-110">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <button
        onClick={() => scrollToSection("#about")}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-500 delay-[800ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>
      </button>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20 opacity-0 animate-[fade-in-scale_0.5s_ease-out_1s_forwards]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20 opacity-0 animate-[fade-in-scale_0.5s_ease-out_1.2s_forwards]" />
    </section>
  )
}
