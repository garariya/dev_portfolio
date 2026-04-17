import ProfileCard from "@/components/portfolio/ProfileCard";
import FloatingNav from "@/components/portfolio/FloatingNav";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ToolsSection from "@/components/portfolio/ToolsSection";
import ThoughtsSection from "@/components/portfolio/ThoughtsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-glow opacity-60" aria-hidden="true" />

      <FloatingNav />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-10 lg:gap-16">
          {/* Sticky left profile */}
          <aside className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center pt-24 lg:pt-0">
            <ProfileCard />
          </aside>

          {/* Right scrolling content */}
          <div className="min-w-0">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <ToolsSection />
            <ThoughtsSection />
            <ContactSection />

            <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border">
              © {new Date().getFullYear()} Aditya Pal · Crafted with care.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
