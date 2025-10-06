import { Card } from "@/components/ui/card"

const steps = [
  {
    step: "01",
    title: "git clone your-english-skills",
    description: "Start with a quick assessment to identify your current level and goals.",
    code: "$ english-cli init --level intermediate",
  },
  {
    step: "02",
    title: "npm install knowledge",
    description: "Follow personalized learning paths with tech-focused content and exercises.",
    code: '$ english-cli learn --topic "code-reviews"',
  },
  {
    step: "03",
    title: "npm run practice",
    description: "Practice with real-world scenarios, from daily stand-ups to technical interviews.",
    code: "$ english-cli practice --mode interactive",
  },
  {
    step: "04",
    title: "git push to-production",
    description: "Apply your skills in real situations and track your progress over time.",
    code: "$ english-cli deploy --confidence high",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-accent">// How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Your Learning <span className="text-accent">Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined workflow designed for maximum efficiency.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center font-mono text-2xl font-bold text-accent group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-mono text-primary">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="bg-background border border-border rounded p-3 font-mono text-sm">
                    <span className="text-accent">$</span>{" "}
                    <span className="text-foreground">{item.code.replace("$ ", "")}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
