"use client"

import { Award, Calendar, CheckCircle, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const certifications = [
  {
    title: "CSWIP 3.1 Welding Inspector",
    issuer: "TWI Certification Ltd",
    issueDate: "March 2020",
    expiryDate: "March 2025",
    credentialId: "CSWIP-12345",
    status: "active",
    featured: true,
    description:
      "Internationally recognized certification for welding inspection, covering visual inspection, NDT interpretation, and quality control procedures.",
    skills: ["Visual Inspection", "NDT Interpretation", "Welding Processes", "Quality Standards"],
  },
  {
    title: "JWES Welding Inspector",
    issuer: "Japan Welding Engineering Society",
    issueDate: "June 2019",
    expiryDate: "June 2024",
    credentialId: "JWES-67890",
    status: "renewal",
    featured: true,
    description:
      "Japanese welding inspection certification focused on JIS standards and quality management in fabrication.",
    skills: ["JIS Standards", "Weld Quality", "Documentation", "Inspection Procedures"],
  },
  {
    title: "SNT-TC-1A Level II",
    issuer: "ASNT",
    issueDate: "January 2018",
    expiryDate: "January 2024",
    credentialId: "SNT-11111",
    status: "renewal",
    featured: false,
    description: "NDT personnel qualification for magnetic particle and liquid penetrant testing.",
    skills: ["MT Testing", "PT Testing", "Report Writing"],
  },
  {
    title: "Piping Stress Analysis",
    issuer: "LinkedIn Learning",
    issueDate: "August 2022",
    expiryDate: null,
    credentialId: null,
    status: "active",
    featured: false,
    description: "Professional development course on CAESAR II and pipe stress fundamentals.",
    skills: ["CAESAR II", "Thermal Analysis", "Load Cases"],
  },
  {
    title: "Project Management Fundamentals",
    issuer: "LinkedIn Learning",
    issueDate: "November 2021",
    expiryDate: null,
    credentialId: null,
    status: "active",
    featured: false,
    description: "Core project management concepts and methodologies.",
    skills: ["Planning", "Risk Management", "Stakeholder Communication"],
  },
]

function FeaturedCertCard({ 
  cert, 
  index, 
  isVisible 
}: { 
  cert: typeof certifications[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <div
      className={`group relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      {/* Status badge */}
      <div className="absolute top-4 right-4">
        {cert.status === "active" ? (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
            <CheckCircle className="w-3 h-3 animate-pulse" />
            Active
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
            <AlertCircle className="w-3 h-3" />
            Renewal
          </span>
        )}
      </div>

      {/* Icon with animation */}
      <div className="relative w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Award className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-500" />
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-1 pr-20 group-hover:text-primary transition-colors duration-300">
        {cert.title}
      </h3>
      <p className="text-primary text-sm mb-2">{cert.issuer}</p>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed relative">
        {cert.description}
      </p>

      {/* Details */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 relative">
        <div className="flex items-center gap-1 group/item cursor-default">
          <Calendar className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
          <span className="group-hover/item:text-foreground transition-colors duration-300">Issued: {cert.issueDate}</span>
        </div>
        {cert.expiryDate && (
          <div className="flex items-center gap-1 group/item cursor-default">
            <Calendar className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
            <span className="group-hover/item:text-foreground transition-colors duration-300">Expires: {cert.expiryDate}</span>
          </div>
        )}
      </div>

      {/* Skills with staggered animation */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 relative">
        {cert.skills.map((skill, skillIndex) => (
          <span
            key={skill}
            className={`px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default hover:scale-105 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${400 + index * 100 + skillIndex * 50}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Credential ID */}
      {cert.credentialId && (
        <p className="mt-4 text-xs text-muted-foreground font-mono relative">
          Credential ID: {cert.credentialId}
        </p>
      )}
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-700" />
    </div>
  )
}

function SmallCertCard({ 
  cert, 
  index, 
  isVisible 
}: { 
  cert: typeof certifications[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <div
      className={`group p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{ transitionDelay: `${400 + index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-2">
        <Award className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
        {cert.status === "active" ? (
          <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <AlertCircle className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
      <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300">
        {cert.title}
      </h4>
      <p className="text-xs text-primary mb-2">{cert.issuer}</p>
      <p className="text-xs text-muted-foreground">{cert.issueDate}</p>
    </div>
  )
}

export function Certifications() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const featuredCerts = certifications.filter((c) => c.featured)
  const otherCerts = certifications.filter((c) => !c.featured)

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Certifications
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        {/* Featured certifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCerts.map((cert, index) => (
            <FeaturedCertCard 
              key={cert.title} 
              cert={cert} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Other certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherCerts.map((cert, index) => (
            <SmallCertCard 
              key={cert.title} 
              cert={cert} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
