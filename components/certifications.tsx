"use client"

import { Award, ExternalLink, Calendar, CheckCircle, AlertCircle } from "lucide-react"

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

export function Certifications() {
  const featuredCerts = certifications.filter((c) => c.featured)
  const otherCerts = certifications.filter((c) => !c.featured)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Certifications
          </h2>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Featured certifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredCerts.map((cert) => (
            <div
              key={cert.title}
              className="relative p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors overflow-hidden"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                {cert.status === "active" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-full">
                    <AlertCircle className="w-3 h-3" />
                    Renewal
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-1 pr-20">
                {cert.title}
              </h3>
              <p className="text-primary text-sm mb-2">{cert.issuer}</p>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.issueDate}</span>
                </div>
                {cert.expiryDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <p className="mt-4 text-xs text-muted-foreground font-mono">
                  Credential ID: {cert.credentialId}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Other certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherCerts.map((cert) => (
            <div
              key={cert.title}
              className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                {cert.status === "active" ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                )}
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {cert.title}
              </h4>
              <p className="text-xs text-primary mb-2">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.issueDate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
