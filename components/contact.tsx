"use client"

import React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sawyannaingmechanical@gmail.com",
    href: "mailto:sawyannaingmechanical@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+95 9 795978944",
    href: "tel:+959795978944",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saw-yan-naing-9287b3135",
    href: "https://www.linkedin.com/in/saw-yan-naing-9287b3135",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Yangon, Myanmar",
    href: null,
  },
]

const subjects = [
  "Job Opportunity",
  "Project Collaboration",
  "Consulting Request",
  "General Inquiry",
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subject, setSubject] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!subject) {
      setErrorMessage("Please select a subject.")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      subject,
      message: String(formData.get("message") || "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        setErrorMessage(data?.error || "Something went wrong. Please try again.")
        return
      }

      setIsSubmitted(true)
      form.reset()
      setSubject("")
    } catch (error) {
      console.error("Contact form submission failed", error)
      setErrorMessage("Unable to send message right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-[100px]" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-sm">07.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Get in Touch
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        <p 
          className={`text-muted-foreground mb-12 max-w-2xl transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {"I'm currently open to new opportunities in piping engineering, welding inspection, and QA/QC roles. Whether you have a question or just want to say hello, feel free to reach out."}
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {isSubmitted ? (
              <div className="p-8 bg-card rounded-lg border border-border text-center animate-[fade-in-scale_0.5s_ease-out]">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-[breathe_2s_ease-in-out_infinite]">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  {"Thank you for reaching out. I'll get back to you as soon as possible."}
                </p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent hover:bg-secondary transition-all duration-300 hover:scale-105"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage ? (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                ) : null}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: '350ms' }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      className="bg-card border-border focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div 
                    className={`space-y-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: '450ms' }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Select required value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="bg-card border-border focus:border-primary/50 transition-all duration-300">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject.toLowerCase().replace(/ /g, "-")}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div 
                  className={`space-y-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-card border-border resize-none focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: '550ms' }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 btn-shine group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Availability status */}
            <div 
              className={`group p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 mb-6 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-foreground font-medium">Available for opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300">
                Open to full-time, contract, and consulting positions
              </p>
            </div>

            {/* Contact cards */}
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className={`group p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-300 underline-animate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
