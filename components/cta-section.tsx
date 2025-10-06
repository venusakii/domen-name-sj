import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 border border-primary/30 relative overflow-hidden">
            {/* Code pattern background */}
            <div className="absolute inset-0 opacity-10 font-mono text-xs leading-relaxed overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i}>const learn = () =&gt; success; // function declaration</div>
              ))}
            </div>

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Ready to <span className="text-primary">Compile</span> Your English Skills?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                Join thousands of developers who've already upgraded their communication skills. Start your free trial
                today—no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
