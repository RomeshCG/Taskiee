
import {
  CalendarCheck,
  Sparkles,
  BellRing,
  LayoutDashboard,
  SunMoon,
  MessagesSquare,
  Users,
  Webhook
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart AI Task Assignment",
      description: "Automatically assigns tasks based on team availability and skill set for optimal workflow management.",
      icon: Sparkles
    },
    {
      title: "Calendar & Slack Integration",
      description: "Seamlessly connects with Google Calendar and Slack for easier scheduling and communication.",
      icon: Webhook
    },
    {
      title: "Real-Time Task Updates",
      description: "Monitor task progress with instant updates and keep everyone on the same page.",
      icon: CalendarCheck
    },
    {
      title: "AI Reminders & Notifications",
      description: "Smart notifications and reminders to keep your team productive and on schedule.",
      icon: BellRing
    },
    {
      title: "Team Workload Dashboard",
      description: "Visual dashboard showing team capacity, current workload, and upcoming tasks at a glance.",
      icon: LayoutDashboard
    },
    {
      title: "Light & Dark Mode",
      description: "Choose between light and dark themes for comfortable viewing in any environment.",
      icon: SunMoon
    },
    {
      title: "Natural Language Input",
      description: "Create tasks using natural language with AI-powered suggestions and formatting.",
      icon: MessagesSquare
    },
    {
      title: "Project & Team Organization",
      description: "Organize tasks by projects and assign them to specific team members or groups.",
      icon: Users
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Taskiee combines AI intelligence with intuitive design to help your team work smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
