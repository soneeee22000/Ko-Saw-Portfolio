"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, ClipboardCheck, FileCode, Shield, Ruler, Users } from "lucide-react"

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

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(level), 200)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
