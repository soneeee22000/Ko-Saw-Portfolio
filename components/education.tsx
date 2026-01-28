"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"

const education = {
  degree: "Bachelor of Engineering in Mechanical Engineering",
  institution: "Yangon Technological University",
  location: "Yangon, Myanmar",
  period: "2012 - 2016",
  gpa: "3.5/4.0",
  description:
    "Comprehensive engineering program covering thermodynamics, fluid mechanics, materials science, and machine design. Active participant in engineering projects and workshops.",
  coursework: [
    "Thermodynamics",
    "Fluid Mechanics",
    "Machine Design",
    "Materials Science",
    "Heat Transfer",
    "Engineering Drawing",
    "Manufacturing Processes",
    "Industrial Management",
  ],
  achievements: [
    "Dean's List (2014-2016)",
    "Senior Design Project: Steam Turbine Efficiency Analysis",
    "Member, Mechanical Engineering Society",
  ],
}

export function Education() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Education
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Education card */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-card rounded-lg border border-border">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {education.degree}
                </h3>
                <p className="text-primary text-lg">{education.institution}</p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{education.period}</span>
              </div>
              <div className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-mono">
                GPA: {education.gpa}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {education.description}
            </p>

            {/* Relevant Coursework */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Achievements
              </h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">{">"}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
