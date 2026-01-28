"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Education
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Education card with animations */}
        <div className="max-w-3xl mx-auto">
          <div 
            className={`group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {education.degree}
                </h3>
                <p className="text-primary text-lg">{education.institution}</p>
              </div>
            </div>

            {/* Details with staggered animation */}
            <div 
              className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-1 group/item cursor-default">
                <MapPin className="w-4 h-4 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="group-hover/item:text-foreground transition-colors duration-300">{education.location}</span>
              </div>
              <div className="flex items-center gap-1 group/item cursor-default">
                <Calendar className="w-4 h-4 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="group-hover/item:text-foreground transition-colors duration-300">{education.period}</span>
              </div>
              <div className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-mono hover:bg-primary/20 transition-colors duration-300">
                GPA: {education.gpa}
              </div>
            </div>

            {/* Description */}
            <p 
              className={`text-muted-foreground leading-relaxed mb-6 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {education.description}
            </p>

            {/* Relevant Coursework */}
            <div 
              className={`mb-6 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span
                    key={course}
                    className={`px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${600 + index * 50}ms` }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div 
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Achievements
              </h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li
                    key={achievement}
                    className={`flex items-start gap-2 text-sm text-muted-foreground group/item cursor-default transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <span className="text-primary mt-0.5 group-hover/item:scale-125 transition-transform duration-300">{">"}</span>
                    <span className="group-hover/item:text-foreground transition-colors duration-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated border accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  )
}
