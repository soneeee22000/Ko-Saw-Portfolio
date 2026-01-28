"use client"

import Image from "next/image"
import { Target, Award, Users, TrendingUp, MapPin, Globe } from "lucide-react"
import { useScrollAnimation, useMouseParallax } from "@/hooks/use-scroll-animation"

const coreValues = [
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail in every calculation and inspection",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Committed to international standards and best practices",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Experience leading multi-disciplinary engineering teams",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous learning and professional development",
  },
]

export function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: photoRef, style: photoStyle } = useMouseParallax()

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Image with advanced hover effects */}
          <div 
            className={`lg:col-span-2 flex justify-center lg:justify-start transition-all duration-700 delay-100 ease-out ${
              sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div 
              ref={photoRef}
              className="relative group cursor-pointer"
              style={photoStyle}
            >
              {/* Animated glow ring behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
              
              {/* Main photo container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500">
                {/* Photo with scale effect */}
                <Image
                  src="/images/profile.jpeg"
                  alt="Saw Yan Naing - Mechanical Engineer"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  priority
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '800ms' }} />
              </div>
              
              {/* Decorative border with animation */}
              <div className="absolute -bottom-4 -right-4 w-64 h-80 sm:w-72 sm:h-96 border-2 border-primary/30 rounded-lg -z-10 transition-all duration-500 group-hover:border-primary/60 group-hover:-bottom-6 group-hover:-right-6" />
              
              {/* Floating decoration dots */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-float-delayed opacity-40" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <p 
              className={`text-foreground text-lg leading-relaxed transition-all duration-700 delay-200 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              I am a Mechanical Engineer with over 7 years of experience specializing in 
              piping systems design, welding inspection, and quality control. My career 
              has taken me through diverse industries including oil & gas, marine vessel 
              construction, and power generation.
            </p>
            
            <p 
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              As a CSWIP 3.1 Certified Welding Inspector and JWES-certified professional, 
              I bring a rigorous approach to quality assurance that ensures every project 
              meets the highest international standards. My experience spans from onshore 
              piping installations to complex marine systems.
            </p>

            <p 
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-[400ms] ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Beyond technical expertise, I take pride in mentoring junior engineers and 
              leading cross-functional teams to deliver projects on time and within 
              specification. I believe that clear communication and methodical problem-solving 
              are as essential as technical knowledge.
            </p>

            {/* Personal details with icons */}
            <div 
              className={`flex flex-wrap gap-6 pt-4 text-sm transition-all duration-700 delay-500 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-2 text-muted-foreground group cursor-default">
                <MapPin className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-125" />
                <span className="group-hover:text-foreground transition-colors duration-300">Yangon, Myanmar</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group cursor-default">
                <Globe className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="group-hover:text-foreground transition-colors duration-300">English, Myanmar, Japanese (Basic)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values with staggered entrance */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 card-shimmer ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Icon with animation */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <value.icon className="relative w-8 h-8 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                {value.description}
              </p>
              
              {/* Animated underline */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
