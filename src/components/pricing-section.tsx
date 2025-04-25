
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: 0,
      description: "For individuals or small teams just getting started",
      features: [
        "Up to 5 team members",
        "AI task suggestions",
        "Basic calendar integration",
        "Email notifications",
        "Light and dark mode"
      ],
      highlighted: false,
      cta: "Start for free"
    },
    {
      name: "Pro",
      price: 12,
      description: "For growing teams that need more power and features",
      features: [
        "Up to 15 team members",
        "Smart AI task assignment",
        "Google Calendar & Slack integration",
        "Advanced notifications & reminders",
        "Team workload visualization",
        "Natural language task input",
        "Priority support"
      ],
      highlighted: true,
      cta: "Start 14-day trial"
    },
    {
      name: "Team",
      price: 29,
      description: "For larger teams and businesses with advanced needs",
      features: [
        "Unlimited team members",
        "All Pro features",
        "Advanced analytics",
        "Custom integrations",
        "Admin controls",
        "API access",
        "Dedicated account manager"
      ],
      highlighted: false,
      cta: "Contact sales"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that's right for you and your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`price-card ${plan.highlighted ? "highlighted" : ""}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price > 0 && (
                    <span className="text-muted-foreground ml-1 text-sm">/ user / month</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="border-t border-border my-6"></div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className={`w-full ${plan.highlighted ? "glow" : "variant-outline"}`}
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>
            Need a custom solution? <Link to="/contact" className="text-primary underline">Contact our sales team</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
