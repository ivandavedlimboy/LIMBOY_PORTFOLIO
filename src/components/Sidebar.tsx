import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, User, Image, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/profile", label: "Profile", icon: User },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/journal", label: "Journal", icon: BookOpen },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-sidebar border border-sidebar-border rounded-full p-1 hover:bg-sidebar-accent transition-colors"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-sidebar-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
        )}
      </button>

      {/* Logo/Title Area */}
      <div className="p-6 border-b border-sidebar-border">
        <h1
          className={cn(
            "text-sidebar-foreground font-bold tracking-wide transition-all duration-300",
            collapsed ? "text-xs text-center" : "text-xl"
          )}
        >
          {collapsed ? "IDL" : "Ivan Dave Limboy"}
        </h1>
        {!collapsed && (
          <p className="text-sidebar-foreground/70 text-sm mt-1 italic">
            Portfolio
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-sidebar-accent",
                    isActive && "bg-sidebar-primary text-sidebar-primary-foreground",
                    !isActive && "text-sidebar-foreground",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p
          className={cn(
            "text-sidebar-foreground/60 text-xs transition-all duration-300",
            collapsed ? "text-center" : ""
          )}
        >
          {collapsed ? "©2024" : "© 2024 Ivan Dave Limboy"}
        </p>
      </div>
    </aside>
  );
};
