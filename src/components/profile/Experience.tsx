export const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      organization: "Tech Solutions Inc.",
      year: "2023",
      description: "Developed responsive web applications using React and Node.js",
    },
    {
      role: "Frontend Developer",
      organization: "Digital Agency Co.",
      year: "2024",
      description: "Created modern UI/UX designs and implemented them using React and Tailwind CSS",
    },
    {
      role: "IT Support",
      organization: "University of Mindanao",
      year: "2023 - 2024",
      description: "Provided technical support and maintenance for campus computer systems",
    },
  ];

  const itSkills = [
    { skill: "React.js", level: 90 },
    { skill: "TypeScript", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Tailwind CSS", level: 95 },
    { skill: "Git & GitHub", level: 85 },
    { skill: "SQL & NoSQL", level: 75 },
  ];

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Experience */}
        <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-accent pl-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                <p className="text-muted-foreground font-medium">{exp.organization}</p>
                <p className="text-sm text-accent mt-1">{exp.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Skills */}
        <div className="bg-portfolio-warm-light rounded-lg p-4 sm:p-6 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">IT Skills</h2>
          <div className="space-y-6">
            {itSkills.map((item, index) => (
              <div
                key={item.skill}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.skill}</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-portfolio-cool to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.15}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
