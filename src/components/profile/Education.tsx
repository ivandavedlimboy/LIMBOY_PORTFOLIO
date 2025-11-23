export const Education = () => {
  const educationTimeline = [
    {
      level: "Elementary",
      school: "Bangkerohan Elementary School",
      years: "2009 - 2015",
    },
    {
      level: "Junior High School",
      school: "Davao City National High School",
      years: "2015 - 2019",
    },
    {
      level: "Senior High School",
      school: "Davao City National High School",
      years: "2019 - 2021",
    },
    {
      level: "College",
      school: "University of Mindanao",
      degree: "Bachelor of Science in Information Technology",
      years: "2021 - Present",
    },
  ];

  const educationalSkills = [
    { skill: "Web Development", level: 90 },
    { skill: "Mobile Development", level: 75 },
    { skill: "Database Management", level: 85 },
    { skill: "UI/UX Design", level: 80 },
    { skill: "Project Management", level: 70 },
  ];

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Education Timeline */}
        <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Education</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            {educationTimeline.map((edu, index) => (
              <div
                key={edu.level}
                className="relative pl-8 py-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-primary shadow-sm"></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{edu.level}</h3>
                  <p className="text-muted-foreground font-medium">{edu.school}</p>
                  {edu.degree && (
                    <p className="text-sm text-muted-foreground italic mt-1">{edu.degree}</p>
                  )}
                  <p className="text-sm text-primary mt-1">{edu.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Skills */}
        <div className="bg-portfolio-warm-light rounded-lg p-4 sm:p-6 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Educational Skills</h2>
          <div className="space-y-6">
            {educationalSkills.map((item, index) => (
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
                    className="h-full bg-gradient-to-r from-accent to-portfolio-cool rounded-full transition-all duration-1000 ease-out"
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
