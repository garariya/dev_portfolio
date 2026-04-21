import { Outlet } from "react-router-dom";
import ProfileCard from "../portfolio/ProfileCard";
import FloatingNav from "../portfolio/FloatingNav";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.jpg";

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground">
      {/* Sawad Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <FloatingNav />

      {/* Mobile Condensed Sticky Header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-[60] lg:hidden bg-profile-bg border-b border-black/5 p-4 flex items-center justify-between shadow-sawad"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black/5">
                <img src={profileImage} alt="AP" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-black text-profile-text tracking-tighter uppercase">
                Aditya Pal
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-secondary uppercase">Available</span>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] xl:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-start">
          {/* Sticky left profile - Persistent Sidebar */}
          <aside className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center z-20">
            <div className="w-full max-w-sm lg:max-w-none">
              <ProfileCard />
            </div>
          </aside>

          {/* Right scrolling content */}
          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
