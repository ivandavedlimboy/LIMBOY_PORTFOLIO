import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const tabs = [
  { id: "personal", label: "Personal Info" },
  { id: "contact", label: "Contact Me" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
];

export const ProfileSubheader = () => {
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => ({
        id: tab.id,
        element: document.getElementById(tab.id),
      }));

      // Find which section is currently in view with better accuracy
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop - 10) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the subheader height dynamically
      const subheaderHeight = 60; // Approximate subheader height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - subheaderHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      setActiveTab(id);
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="flex items-end overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200",
                "border-r border-border",
                isActive
                  ? "bg-card text-foreground border-b-2 border-b-accent"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground",
                index === 0 && "rounded-tl-lg",
                "folder-tab"
              )}
              style={{
                clipPath: isActive
                  ? "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
