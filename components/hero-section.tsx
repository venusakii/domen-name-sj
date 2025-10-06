"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = 'console.log("Master English for Tech");'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.01_240)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.01_240)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style code display */}
          <div className="mb-8 inline-block">
            <div className="bg-card border border-border rounded-lg p-6 text-left font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground text-xs">english-learning.js</span>
              </div>
              <div className="space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-accent">function</span> <span className="text-primary">learnEnglish</span>(){" "}
                  {"{"}
                </div>
                <div className="pl-4 text-foreground">
                  {displayText}
                  <span className="terminal-cursor">|</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Debug Your English,
            <br />
            <span className="text-primary">Deploy</span> Your <span className="text-accent">Career</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            The only English learning platform built by developers, for developers. Master technical communication with
            real-world IT scenarios.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold font-mono text-primary">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-accent">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Tech Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
