import { ProfileSubheader } from "@/components/ProfileSubheader";
import { PersonalInfo } from "@/components/profile/PersonalInfo";
import { Contacts } from "@/components/profile/Contacts";
import { Education } from "@/components/profile/Education";
import { Achievements } from "@/components/profile/Achievements";
import { Experience } from "@/components/profile/Experience";
import { Certifications } from "@/components/profile/Certifications";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileHero = () => {
  return (
    <div className="bg-gradient-to-br from-portfolio-warm-light via-background to-card p-12 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-portfolio-cool rounded-full animate-pulse opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Ivan Dave Limboy"
                className="relative w-full h-full rounded-full object-cover border-4 border-card shadow-2xl animate-scale-in"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground italic font-light">
              celavive come what may
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                Web Developer
              </span>
              <span className="px-4 py-2 bg-portfolio-warm text-foreground rounded-full text-sm font-medium">
                UI/UX Designer
              </span>
              <span className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium">
                IT Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProfileHero />
      <ProfileSubheader />
      <div className="bg-card">
        {/* All sections displayed continuously with IDs for anchor linking */}
        <section id="personal">
          <PersonalInfo />
        </section>
        
        <section id="contact">
          <Contacts />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="awards">
          <Achievements />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
      </div>
    </div>
  );
};

export default Profile;
