
import { Link } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  ListTodo, 
  Users, 
  PieChart, 
  Settings, 
  Menu, 
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Tasks", icon: ListTodo, href: "/dashboard/tasks" },
    { name: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
    { name: "Team", icon: Users, href: "/dashboard/team" },
    { name: "Analytics", icon: PieChart, href: "/dashboard/analytics" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300",
          isCollapsed ? "w-[70px]" : "w-[240px]",
          !isMobileOpen && "hidden lg:block",
          isMobileOpen && "block",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="h-16 flex items-center px-4 justify-between border-b border-sidebar-border">
            <Link
              to="/"
              className={cn(
                "flex items-center",
                isCollapsed ? "justify-center" : "space-x-2"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              {!isCollapsed && (
                <span className="font-bold font-poppins text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  taskiee
                </span>
              )}
            </Link>

            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="hidden lg:flex">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-sidebar-foreground/70 hover:text-sidebar-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                  item.href === "/dashboard" && "bg-sidebar-accent text-sidebar-primary font-medium",
                  isCollapsed ? "justify-center" : ""
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    item.href === "/dashboard" && "text-sidebar-primary"
                  )}
                />
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* User */}
          <div className="p-3 border-t border-sidebar-border flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-medium text-xs">JD</span>
            </div>
            {!isCollapsed && (
              <div className="ml-3 overflow-hidden">
                <div className="text-sm font-medium truncate">John Doe</div>
                <div className="text-xs text-sidebar-foreground/60 truncate">
                  john@example.com
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
