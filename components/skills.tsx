"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, ClipboardCheck, FileCode, Shield, Ruler, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    icon: Wrench,
    title: "Piping Engineering",
    skills: [
      { name: "Pipe Stress Analysis (CAESAR II)", level: 90 },
      { name: "Piping Design & Layout", level: 95 },
      { name: "P&ID Development", level: 85 },
      { name: "Isometric Drawings", level: 90 },
    ],
  },
  {
    icon: Shield,
    title: "Welding Inspection",
    skills: [
      { name: "Visual Inspection (VT)", level: 95 },
      { name: "Weld Procedure Review", level: 90 },
      { name: "WPS/PQR Documentation", level: 88 },
      { name: "Welder Qualification", level: 85 },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "QA/QC",
    skills: [
      { name: "Quality Management Systems", level: 85 },
      { name: "Inspection Test Plans", level: 90 },
      { name: "NDT Coordination", level: 80 },
      { name: "Documentation Control", level: 88 },
    ],
  },
  {
    icon: FileCode,
    title: "Codes & Standards",
    skills: [
      { name: "ASME B31.3 / B31.1", level: 92 },
      { name: "AWS D1.1", level: 88 },
      { name: "API Standards", level: 85 },
      { name: "Classification Society Rules", level: 82 },
    ],
  },
  {
    icon: Ruler,
    title: "Software & Tools",
    skills: [
      { name: "CAESAR II", level: 88 },
      { name: "AutoCAD / PDS", level: 90 },
      { name: "SmartPlant 3D", level: 75 },
      { name: "MS Office Suite", level: 92 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: 85 },
      { name: "Technical Communication", level: 88 },
      { name: "Problem Solving", level: 90 },
      { name: "Project Coordination", level: 82 },
    ],
  },
]

function SkillBar({ 
  name, 
  level, 
  delay,
  isVisible 
}: { 
  name: string
  level: number
  delay: number
  isVisible: boolean 
}) {
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), delay)
      return () => clearTimeout(timer)
    }
  }, [level, delay, isVisible])

  return (
    <div 
      className="space-y-2 group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{name}</span>
        <span className={`text-primary font-mono transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {width}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        {/* Animated background shimmer */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
          style={{
            animation: isHovered ? 'shimmer 1s ease-out' : 'none'
          }}
        />
        {/* Progress bar */}
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${width}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>
      </div>
    </div>
  )
}

function SkillCard({ 
  category, 
  index, 
  isVisible 
}: { 
  category: typeof skillCategories[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <div
      className={`group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 card-shimmer relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Decorative corner glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-3 mb-6 relative">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
          <category.icon className="w-5 h-5 text-primary transition-transform duration-500 group-hover:rotate-12" />
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4 relative">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            delay={300 + index * 100 + skillIndex * 100}
            isVisible={isVisible}
          />
        ))}
      </div>
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-700" />
    </div>
  )
}

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
