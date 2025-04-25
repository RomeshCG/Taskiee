
import { Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Taskiee transformed how our team coordinates projects. The AI task assignment is like having an extra team member who knows everyone's strengths.",
      author: "Sarah Johnson",
      position: "Product Manager, Designify",
      image: "SJ"
    },
    {
      quote: "We've cut meeting time by 30% since implementing Taskiee. The interface is beautiful and the AI features actually work - it's not just marketing hype.",
      author: "Michael Chen",
      position: "CTO, TechFlow",
      image: "MC"
    },
    {
      quote: "The smart notifications and reminders have made our team more accountable. We're hitting deadlines consistently for the first time ever.",
      author: "Emma Rodriguez",
      position: "Operations Lead, Startup Labs",
      image: "ER"
    },
    {
      quote: "I was skeptical about another task manager, but the AI features in Taskiee genuinely save us time. The dark mode is also easy on the eyes during late work nights.",
      author: "David Kim",
      position: "Engineering Manager, DevCore",
      image: "DK"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Loved by teams worldwide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Teams Say About Taskiee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <svg 
                  className="h-8 w-8 text-primary/30" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.666h4v10.183h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.666h4v10.183h-10z" />
                </svg>
              </div>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-medium">{testimonial.image}</span>
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
