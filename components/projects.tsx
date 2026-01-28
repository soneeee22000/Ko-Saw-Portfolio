"use client"

import { useState } from "react"
import { Folder } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const categories = ["All", "Marine Piping", "Building Services", "Power Generation"]

const projects = [
  {
    title: "Offshore Support Vessel - Piping Systems",
    category: "Marine Piping",
    description:
      "Led the piping design and welding inspection for a 75m offshore support vessel, including fuel oil, ballast, and fire-fighting systems.",
    details: [
      "Designed and routed piping systems per DNV classification rules",
      "Supervised fabrication and welding of 2,500+ joints",
      "Coordinated NDT and class surveys achieving zero defects at final inspection",
    ],
    technologies: ["AutoCAD", "DNV Rules", "ASME B31.1", "AWS D1.1"],
    client: "Confidential",
    year: "2023",
  },
  {
    title: "Commercial Building HVAC Piping",
    category: "Building Services",
    description:
      "Managed piping design for chilled water and condenser water systems in a 20-story commercial complex.",
    details: [
      "Performed pipe stress analysis for thermal expansion",
      "Developed P&IDs and isometric drawings for fabrication",
      "Coordinated with MEP contractors for installation sequencing",
    ],
    technologies: ["CAESAR II", "AutoCAD", "ASHRAE Standards"],
    client: "Confidential",
    year: "2022",
  },
  {
    title: "Combined Cycle Power Plant - Steam Piping",
    category: "Power Generation",
    description:
      "Contributed to QA/QC activities for high-pressure steam piping in a 500MW combined cycle power plant.",
    details: [
      "Reviewed and approved WPS/PQR for P91 and P22 materials",
      "Conducted welding inspections per ASME B31.1",
      "Coordinated PWHT and radiographic testing activities",
    ],
    technologies: ["ASME B31.1", "ASME IX", "RT/PT/MT"],
    client: "Confidential",
    year: "2021",
  },
]

function ProjectCard({ 
  project, 
  index, 
  isVisible 
}: { 
  project: typeof projects[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <div
      className={`group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 flex flex-col relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Folder className="w-5 h-5 text-primary group-hover:rotate-6 transition-transform duration-300" />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-secondary rounded group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow relative">
        {project.description}
      </p>

      {/* Details with staggered animation */}
      <ul className="space-y-2 mb-4 relative">
        {project.details.slice(0, 2).map((detail, detailIndex) => (
          <li
            key={detail}
            className={`flex items-start gap-2 text-xs text-muted-foreground transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${300 + index * 100 + detailIndex * 50}ms` }}
          >
            <span className="text-primary mt-0.5 group-hover:scale-125 transition-transform duration-300">{">"}</span>
            <span className="group-hover:text-muted-foreground/90 transition-colors duration-300">{detail}</span>
          </li>
        ))}
      </ul>

      {/* Technologies with hover effects */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto relative">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={tech}
            className={`text-xs font-mono text-primary/80 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${400 + index * 100 + techIndex * 30}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Year with fade */}
      <div 
        className={`mt-4 text-xs text-muted-foreground relative transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${500 + index * 100}ms` }}
      >
        {project.year}
      </div>
      
      {/* Animated corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Category filters with animations */}
        <div 
          className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Button shine effect */}
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects grid with animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Note about confidentiality */}
        <p 
          className={`text-center text-sm text-muted-foreground mt-8 transition-all duration-700 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Client names and specific details are confidential. Full project documentation available upon request.
        </p>
      </div>
    </section>
  )
}
