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
    <div className="space-y-16 py-10 lg:py-16">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolsSection />
      <ThoughtsSection />
      <ContactSection />

      <footer className="py-20 text-center border-t border-white/5 lg:hidden">
        <p className="text-sm font-black tracking-[0.3em] text-muted-foreground uppercase opacity-40">
          © {new Date().getFullYear()} ADITYA PAL · INSPIRED BY SAWAD
        </p>
      </footer>
    </div>
  );
};

export default Index;
