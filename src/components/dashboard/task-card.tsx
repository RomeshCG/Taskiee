
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Clock } from "lucide-react";

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description?: string;
    status: "todo" | "in-progress" | "completed";
    priority: "low" | "medium" | "high";
    dueDate?: string;
    comments?: number;
    assignee?: {
      name: string;
      avatar: string;
    };
  };
}

export function TaskCard({ task }: TaskCardProps) {
  const getStatusColor = () => {
    switch (task.status) {
      case "todo":
        return "bg-secondary text-muted-foreground";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "completed":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-secondary text-muted-foreground";
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case "low":
        return "bg-muted text-muted-foreground";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500";
      case "high":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = () => {
    switch (task.status) {
      case "todo":
        return "To Do";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "To Do";
    }
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg shadow-sm p-4 transition-shadow hover:shadow-md">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium">{task.title}</h3>
        <div className="flex gap-2">
          <Badge variant="outline" className={getPriorityColor()}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>
          <Badge className={getStatusColor()}>{getStatusText()}</Badge>
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
      )}

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {task.dueDate && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{task.dueDate}</span>
            </div>
          )}

          {task.comments !== undefined && task.comments > 0 && (
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{task.comments}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {task.assignee && (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary mr-2">
                {task.assignee.avatar}
              </div>
            </div>
          )}
          <Button size="sm" variant="ghost">
            <Clock className="h-4 w-4 mr-1" /> Track
          </Button>
        </div>
      </div>
    </div>
  );
}
