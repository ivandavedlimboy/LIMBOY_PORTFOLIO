export const PersonalInfo = () => {
  const personalDetails = [
    { label: "Name", value: "Ivan Dave D. Limboy" },
    { label: "Gender", value: "Male" },
    { label: "Age", value: "22" },
    { label: "Birthdate", value: "June 13, 2003" },
    { label: "Nationality", value: "Filipino" },
    { label: "Address", value: "Upper Madapo Hills, Purok 9-A, Brgy. 8-A, Bangkerohan, Davao City" },
  ];

  const traits = [
    "Analytical Thinker",
    "Detail-Oriented",
    "Quick Learner",
    "Team Player",
    "Problem Solver",
    "Creative",
    "Adaptable",
    "Self-Motivated",
  ];

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      {/* Inner container with border */}
      <div className="border border-border rounded-lg p-0 overflow-hidden bg-portfolio-warm-light">
        <div className="flex flex-col md:flex-row">
          {/* Personal Details - Left Side */}
          <div className="md:w-1/2 bg-card rounded-lg p-4 sm:p-6 shadow-lg border border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Personal Details</h2>
            <dl className="space-y-4">
              {personalDetails.map((detail) => (
                <div key={detail.label} className="flex flex-col">
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    {detail.label}
                  </dt>
                  <dd className="text-base text-foreground">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Traits & Characteristics - Right Side */}
          <div className="md:w-1/2 bg-transparent p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Traits & Characteristics</h2>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
