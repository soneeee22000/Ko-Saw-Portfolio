"use client"

import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Piping Engineer / Welding Inspector",
    company: "Offshore Energy Services",
    companyUrl: "#",
    period: "2021 - Present",
    location: "Yangon, Myanmar",
    description:
      "Lead piping design and welding inspection for offshore oil & gas installations, ensuring compliance with ASME, API, and client specifications.",
    responsibilities: [
      "Lead piping stress analysis and flexibility studies for high-pressure systems",
      "Conduct welding inspections per AWS D1.1 and ASME Section IX",
      "Review and approve WPS/PQR documentation for fabrication teams",
      "Coordinate with clients and classification societies on technical requirements",
      "Mentor junior engineers on industry codes and standards",
    ],
    technologies: ["CAESAR II", "AutoCAD", "PDS", "SmartPlant 3D"],
  },
  {
    title: "Welding Inspector / QA/QC Engineer",
    company: "Myanmar Shipyards",
    companyUrl: "#",
    period: "2018 - 2021",
    location: "Yangon, Myanmar",
    description:
      "Managed quality assurance and welding inspection for marine vessel construction projects including cargo ships and offshore support vessels.",
    responsibilities: [
      "Performed visual and NDT inspections on hull structures and piping systems",
      "Implemented QA/QC procedures aligned with classification society requirements",
      "Supervised welding operations and qualified welders per applicable codes",
      "Prepared and maintained inspection documentation and test reports",
      "Liaised with Lloyd's Register and DNV for vessel certifications",
    ],
    technologies: ["NDT Equipment", "CAD Software", "QMS Systems"],
  },
  {
    title: "Junior Mechanical Engineer",
    company: "Power Generation Co.",
    companyUrl: "#",
    period: "2016 - 2018",
    location: "Mandalay, Myanmar",
    description:
      "Supported mechanical engineering activities in power plant maintenance and small-scale piping projects.",
    responsibilities: [
      "Assisted in pipe routing and support design for plant modifications",
      "Participated in equipment installation and commissioning activities",
      "Prepared technical drawings and bills of materials",
      "Conducted equipment inspections and maintenance documentation",
    ],
    technologies: ["AutoCAD", "MS Office", "SAP"],
  },
]

function TimelineItem({ 
  exp, 
  index, 
  isVisible 
}: { 
  exp: typeof experiences[0]
  index: number
  isVisible: boolean 
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot with pulse animation */}
      <div 
        className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-primary rounded-full border-4 border-background" />
          <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-30" />
        </div>
      </div>

      {/* Content card with entrance animation */}
      <div 
        className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0 transition-all duration-700 ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : isEven 
              ? "opacity-0 translate-x-8" 
              : "opacity-0 -translate-x-8"
        }`}
        style={{ transitionDelay: `${index * 150 + 100}ms` }}
      >
        <div className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 card-shimmer relative overflow-hidden">
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Period badge */}
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            {exp.period}
          </span>

          {/* Title and company */}
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {exp.title}
          </h3>
          <a
            href={exp.companyUrl}
            className="inline-flex items-center gap-1 text-primary hover:underline mb-2 underline-animate"
          >
            {exp.company}
            <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-sm text-muted-foreground mb-4">
            {exp.location}
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {exp.description}
          </p>

          {/* Responsibilities with staggered reveal */}
          <ul className="space-y-2 mb-4">
            {exp.responsibilities.map((resp, respIndex) => (
              <li
                key={resp}
                className={`flex items-start gap-2 text-sm text-muted-foreground transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 150 + 200 + respIndex * 50}ms` }}
              >
                <span className="text-primary mt-1.5 text-xs group-hover:scale-125 transition-transform duration-300">{">"}</span>
                <span className="group-hover:text-muted-foreground/90 transition-colors duration-300">{resp}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className={`px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 150 + 400 + techIndex * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}

export function Experience() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [timelineProgress, setTimelineProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Animate timeline line as user scrolls
  useEffect(() => {
    if (!isVisible) return

    const timeline = timelineRef.current
    if (!timeline) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio
            setTimelineProgress(Math.min(ratio * 2, 1))
          }
        })
      },
      { threshold: Array.from({ length: 100 }, (_, i) => i / 100) }
    )

    observer.observe(timeline)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[80px]" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line with animated progress */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/50 transition-all duration-1000 ease-out"
              style={{ height: `${timelineProgress * 100}%` }}
            />
          </div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.title} 
                exp={exp} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
