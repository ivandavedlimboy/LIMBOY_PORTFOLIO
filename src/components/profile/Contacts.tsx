import { Mail, Phone, Facebook, Linkedin, Github, Globe } from "lucide-react";

export const Contacts = () => {
  const contacts = [
    {
      icon: Facebook,
      label: "Facebook",
      value: "Ivandave Limboy",
      link: "https://facebook.com",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      label: "Gmail",
      value: "ivandavelimboyi13@gmail.com",
      link: "mailto:ivandavelimboyi13@gmail.com",
      color: "text-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09087488276",
      link: "tel:09087488276",
      color: "text-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ivandavelimboy",
      link: "https://linkedin.com/in/ivandavelimboy",
      color: "text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ivandavelimboy",
      link: "https://github.com/ivandavelimboy",
      color: "text-gray-800",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "ivandave-portfolio.vercel.app",
      link: "https://ivandave-portfolio.vercel.app",
      color: "text-accent",
    },
  ];

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Get In Touch</h2>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card rounded-lg p-4 sm:p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
