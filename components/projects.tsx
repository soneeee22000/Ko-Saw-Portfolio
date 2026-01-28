"use client"

import { useState } from "react"
import { ExternalLink, Folder } from "lucide-react"

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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-secondary rounded">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Details */}
              <ul className="space-y-2 mb-4">
                {project.details.slice(0, 2).map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">{">"}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Year */}
              <div className="mt-4 text-xs text-muted-foreground">
                {project.year}
              </div>
            </div>
          ))}
        </div>

        {/* Note about confidentiality */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Client names and specific details are confidential. Full project documentation available upon request.
        </p>
      </div>
    </section>
  )
}
