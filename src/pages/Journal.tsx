import { useState } from "react";

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  content: React.ReactNode;
}

const Journal = () => {
  const [selectedJournal, setSelectedJournal] = useState<string | null>(null);

  const journals: JournalEntry[] = [
    {
      id: "pldt",
      title: "PLDT INC",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              During my time at PLDT INC, I had the opportunity to work on transformative telecommunications 
              infrastructure projects. The experience shaped my understanding of large-scale network systems 
              and their critical role in connecting communities across the Philippines.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Key Learnings</h3>
            <p className="text-muted-foreground leading-relaxed">
              Working with enterprise-level telecommunications taught me the importance of reliability, 
              scalability, and continuous monitoring. Every system we built had to maintain 99.9% uptime, 
              which required meticulous planning and robust architecture.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Technical Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              I deepened my expertise in network protocols, infrastructure management, and real-time 
              communication systems. The challenges we faced pushed me to innovate and think critically 
              about system design and optimization.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "vitro",
      title: "VITRO",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Innovation at VITRO</h3>
            <p className="text-muted-foreground leading-relaxed">
              VITRO presented unique challenges in digital transformation and modern web technologies. 
              This experience allowed me to explore cutting-edge frameworks and development methodologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Reflections</h3>
            <p className="text-muted-foreground leading-relaxed">
              The projects at VITRO reinforced the importance of user-centric design and agile development. 
              Every feature we shipped had to balance technical excellence with practical usability.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "vitro-jairosoft",
      title: "VITRO (Jairosoft)",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Collaboration Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Working with Jairosoft under the VITRO umbrella taught me invaluable lessons about 
              cross-functional collaboration and agile methodologies in a fast-paced environment.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Technical Achievements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We delivered several mission-critical applications that serve thousands of users daily. 
              The emphasis on clean code, thorough testing, and continuous integration became second nature.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "davao-911",
      title: "Davao City Central Communications and Emergency Response Center",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Emergency Response Systems</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building systems for the Davao City emergency response center was one of the most meaningful 
              projects of my career. Knowing that our work directly impacts public safety and saves lives 
              added profound purpose to every line of code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Critical System Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              We implemented real-time communication protocols, geolocation services, and incident management 
              systems that operate 24/7. The reliability requirements were absolute - failure was not an option.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Impact & Legacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              This project reinforced my belief that technology, when applied thoughtfully, can be a force 
              for tremendous good. It shaped my approach to all subsequent work, always asking: "How does 
              this help people?"
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleJournalClick = (id: string) => {
    setSelectedJournal(selectedJournal === id ? null : id);
  };

  const selectedEntry = journals.find((j) => j.id === selectedJournal);

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Always Centered */}
      <div className="bg-gradient-to-br from-portfolio-warm-light to-card py-6 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Journal</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic">
            Thoughts, Learnings, and Reflections
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-160px)] overflow-hidden gap-4 px-4 pt-4 pb-2">
        {/* Journal List */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${
              selectedJournal
                ? "md:w-1/4 h-[88px] md:h-full overflow-y-auto"
                : "w-full h-full overflow-y-auto"
            }
            bg-background
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          `}
        >
          <div className="p-4 space-y-3">
            {journals.map((journal) => (
              <button
                key={journal.id}
                onClick={() => handleJournalClick(journal.id)}
                className={`
                  w-full text-left p-4 rounded-lg transition-all duration-200
                  ${
                    selectedJournal === journal.id
                      ? "bg-primary/10 border-2 border-primary shadow-md"
                      : "bg-card hover:bg-card/80 border-2 border-border/50 shadow-sm"
                  }
                `}
              >
                <h3 className="font-semibold text-foreground truncate mb-1">
                  {journal.title}
                </h3>
                <p className="text-sm text-accent">{journal.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        {selectedJournal && selectedEntry && (
          <div
            className={`
              flex-1 bg-card rounded-xl shadow-lg overflow-y-auto
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              animate-fade-in
              py-3
            `}
          >
            <div className="px-8 max-w-3xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {selectedEntry.title}
                </h2>
                <time className="text-sm text-accent font-medium">
                  {selectedEntry.date}
                </time>
              </div>
              <div className="prose prose-lg max-w-none">
                {selectedEntry.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
