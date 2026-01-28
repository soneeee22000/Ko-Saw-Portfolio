"use client"

import Image from "next/image"
import { Target, Award, Users, TrendingUp, MapPin, Globe } from "lucide-react"

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
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden border-2 border-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Saw Yan Naing - Mechanical Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-64 h-80 sm:w-72 sm:h-96 border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              I am a Mechanical Engineer with over 7 years of experience specializing in 
              piping systems design, welding inspection, and quality control. My career 
              has taken me through diverse industries including oil & gas, marine vessel 
              construction, and power generation.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              As a CSWIP 3.1 Certified Welding Inspector and JWES-certified professional, 
              I bring a rigorous approach to quality assurance that ensures every project 
              meets the highest international standards. My experience spans from onshore 
              piping installations to complex marine systems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond technical expertise, I take pride in mentoring junior engineers and 
              leading cross-functional teams to deliver projects on time and within 
              specification. I believe that clear communication and methodical problem-solving 
              are as essential as technical knowledge.
            </p>

            {/* Personal details */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Yangon, Myanmar</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                <span>English, Myanmar, Japanese (Basic)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <value.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
