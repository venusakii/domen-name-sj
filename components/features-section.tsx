import { Card } from "@/components/ui/card"
import { Code, MessageSquare, Zap, GitBranch, Terminal, BookOpen } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Code-Based Learning",
    description: "Learn English through real code reviews, documentation, and technical discussions.",
    color: "text-primary",
  },
  {
    icon: Terminal,
    title: "CLI Practice Mode",
    description: "Interactive terminal-style exercises that feel natural for developers.",
    color: "text-accent",
  },
  {
    icon: GitBranch,
    title: "Version Control Your Progress",
    description: "Track your learning journey with commits, branches, and milestones.",
    color: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Tech Communication",
    description: "Master stand-ups, code reviews, and technical presentations in English.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "AI-Powered Feedback",
    description: "Get instant corrections and suggestions powered by advanced AI.",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Real-World Scenarios",
    description: "Practice with actual job interviews, meetings, and documentation tasks.",
    color: "text-accent",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-primary">// Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Built for <span className="text-primary">Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We speak your language. Learn English the way you learned to code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
              <feature.icon className={`h-10 w-10 mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
