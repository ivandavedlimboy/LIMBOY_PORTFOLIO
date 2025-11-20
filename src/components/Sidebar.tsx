import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, User, Image, BookOpen, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navItems = [
    { path: "/profile", label: "Profile", icon: User },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/journal", label: "Journal", icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50 flex flex-col",
          // Desktop behavior - always fixed
          "hidden md:flex",
          collapsed ? "md:w-16" : "md:w-64",
          // Mobile behavior - full overlay
          !collapsed && "flex w-64"
        )}
      >
        {/* Toggle Button - Desktop */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 bg-sidebar border border-sidebar-border rounded-full p-1 hover:bg-sidebar-accent transition-colors hidden md:flex"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-sidebar-foreground" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
          )}
        </button>

        {/* Close Button - Mobile */}
        <button
          onClick={() => setCollapsed(true)}
          className="absolute right-4 top-6 md:hidden text-sidebar-foreground hover:text-sidebar-accent transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
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

        {/* Theme Toggle */}
        <div className="mt-6 pt-4 border-t border-sidebar-border">
          <button
            onClick={() => setIsDark(!isDark)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full",
              "hover:bg-sidebar-accent text-sidebar-foreground",
              collapsed && "justify-center"
            )}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-5 h-5 flex-shrink-0" />
            ) : (
              <Sun className="w-5 h-5 flex-shrink-0" />
            )}
            {!collapsed && (
              <span className="font-medium">{isDark ? "Dark Mode" : "Light Mode"}</span>
            )}
          </button>
        </div>
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setCollapsed(false)}
        className={cn(
          "fixed top-4 left-4 z-30 md:hidden bg-sidebar border border-sidebar-border rounded-lg p-2 shadow-lg",
          !collapsed && "hidden"
        )}
        aria-label="Open menu"
      >
        <User className="w-5 h-5 text-sidebar-foreground" />
      </button>
    </>
  );
};
