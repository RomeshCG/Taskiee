
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-slide-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Manage tasks <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">intelligently</span> with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Taskiee streamlines your team's workflow with AI-powered task
                assignment, smart scheduling, and real-time updates for maximum
                productivity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow" asChild>
                <Link to="/signup">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">See demo</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-medium text-xs">JD</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-500 font-medium text-xs">SR</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-medium text-xs">AL</span>
                </div>
              </div>
              <span>Join 1,000+ teams using Taskiee</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-border/50 bg-secondary/50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Taskiee Dashboard
                </div>
                <div className="w-16"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Today's Tasks</h3>
                  <Button variant="outline" size="sm">+ New Task</Button>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Design review meeting", status: "In Progress", time: "10:00 AM", priority: "High" },
                    { title: "Update landing page", status: "To Do", time: "12:30 PM", priority: "Medium" },
                    { title: "Product roadmap planning", status: "To Do", time: "2:00 PM", priority: "High" }
                  ].map((task, i) => (
                    <div key={i} className="p-3 bg-secondary/50 rounded-lg border border-border/50 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${task.priority === "High" ? "bg-red-500" : "bg-yellow-500"}`}></div>
                        <span className="font-medium">{task.title}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-muted-foreground">{task.time}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          task.status === "In Progress" 
                            ? "bg-blue-500/10 text-blue-500" 
                            : "bg-secondary text-muted-foreground"
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
