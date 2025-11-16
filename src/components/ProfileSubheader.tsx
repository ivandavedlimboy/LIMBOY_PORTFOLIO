import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const tabs = [
  { id: "personal", label: "Personal Info" },
  { id: "contact", label: "Contact Me" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
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

      // Find which section is currently in view
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Check if section is in the upper half of viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for subheader height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
                "relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200",
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
