import { Github, Instagram, Linkedin, Code2, Flame } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-garariya-276961323/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/garariya", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/pixelpalette.aditya/", label: "Instagram" },
  { icon: Code2, href: "https://codeforces.com/profile/Aditya0011", label: "Codeforces" },
];

const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Decorative dashed circle */}
      <svg
        className="absolute -top-6 -left-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none z-0"
        viewBox="0 0 400 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 60 80 Q 200 -20 340 80 Q 420 300 340 520 Q 200 620 60 520 Q -20 300 60 80 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
          opacity="0.7"
        />
      </svg>

      <div className="relative z-10 bg-profile-bg rounded-[1.5rem] p-6 shadow-sawad overflow-hidden group">
        {/* Decorative Neon Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        {/* Photo */}
        <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-black/5">
          <img
            src={profileImage}
            alt="Aditya Pal — Full Stack Developer"
            width={1024}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-secondary" />
            <span className="text-[9px] font-black tracking-[0.3em] text-secondary uppercase">Available</span>
          </div>
          <h2 className="text-3xl font-black text-profile-text tracking-tighter uppercase leading-[0.9]">
            Aditya<br/>Pal
          </h2>
        </div>

        {/* Bio */}
        <p className="mt-4 text-black/60 text-xs leading-relaxed font-bold">
          Creative developer crafting digital experiences with code, design and AI.
        </p>

        {/* Socials - Pill Style */}
        <div className="mt-8 flex flex-wrap gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="px-4 py-2 rounded-full bg-black/5 border border-black/5 text-profile-text hover:bg-primary transition-all duration-300"
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
