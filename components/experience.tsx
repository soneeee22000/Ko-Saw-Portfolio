"use client"

import { ExternalLink } from "lucide-react"

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

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background" />

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                      {exp.period}
                    </span>

                    {/* Title and company */}
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      className="inline-flex items-center gap-1 text-primary hover:underline mb-2"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.location}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5 text-xs">{">"}</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
