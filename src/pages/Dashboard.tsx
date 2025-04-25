
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { TaskCard } from "@/components/dashboard/task-card";
import ThemeToggle from "@/components/theme-toggle";
import { Bell, Search, Plus, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateTask = () => {
    toast.info("Creating new task...");
  };

  const handleAIAssist = () => {
    toast.info("AI Assistant activated! How can I help you?");
  };

  const tasks = [
    {
      id: "1",
      title: "Update landing page design",
      status: "in-progress" as const,
      priority: "high" as const,
      dueDate: "Today",
      comments: 3,
      assignee: {
        name: "John Doe",
        avatar: "JD",
      },
      description: "Implement new design mockups for the landing page hero section."
    },
    {
      id: "2",
      title: "UX research for mobile app",
      status: "todo" as const,
      priority: "medium" as const,
      dueDate: "Tomorrow",
      assignee: {
        name: "Sarah King",
        avatar: "SK",
      }
    },
    {
      id: "3",
      title: "Create social media campaign",
      status: "todo" as const,
      priority: "medium" as const,
      dueDate: "Apr 29",
      comments: 2,
      assignee: {
        name: "Mike Chen",
        avatar: "MC",
      }
    },
    {
      id: "4",
      title: "Fix checkout page bug",
      status: "completed" as const,
      priority: "high" as const,
      dueDate: "Apr 22",
      comments: 5,
      assignee: {
        name: "John Doe",
        avatar: "JD",
      }
    },
    {
      id: "5",
      title: "Weekly team meeting",
      status: "todo" as const,
      priority: "low" as const,
      dueDate: "Apr 28",
      assignee: {
        name: "John Doe",
        avatar: "JD",
      }
    },
    {
      id: "6",
      title: "Review analytics report",
      status: "todo" as const,
      priority: "medium" as const,
      dueDate: "Apr 30",
      assignee: {
        name: "Mike Chen",
        avatar: "MC",
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />

      <div className="flex-1 lg:ml-[240px] flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border/50 flex items-center justify-between px-4 bg-background">
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks, projects, or team members..."
                className="pl-9 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => toast.info("You have no new notifications")}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="flex flex-col space-y-8">
            {/* Page header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">
                    Welcome back, John! Here's an overview of your tasks.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleCreateTask}>
                    <Plus className="mr-1 h-4 w-4" /> New Task
                  </Button>
                  <Button variant="outline" onClick={handleAIAssist}>
                    <Sparkles className="mr-1 h-4 w-4" /> AI Assist
                  </Button>
                </div>
              </div>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Tasks", value: "24", trend: "+3" },
                { title: "In Progress", value: "8", trend: "-1" },
                { title: "Completed", value: "12", trend: "+5" },
                { title: "Upcoming", value: "4", trend: "0" },
              ].map((card, i) => (
                <div 
                  key={i}
                  className="bg-card border border-border/50 rounded-lg p-4 shadow-sm"
                >
                  <div className="text-sm font-medium text-muted-foreground">{card.title}</div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-3xl font-bold">{card.value}</div>
                    <div className={`text-sm ${
                      card.trend.startsWith("+") 
                        ? "text-green-500" 
                        : card.trend === "0" 
                          ? "text-muted-foreground" 
                          : "text-red-500"
                    }`}>
                      {card.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasks */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Tasks</h2>
                <Button variant="ghost" size="sm">
                  View all
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
