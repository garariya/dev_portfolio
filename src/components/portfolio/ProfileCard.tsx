import { Github, Instagram, Linkedin, Twitter, Flame } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
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

      <div className="relative z-10 bg-white rounded-3xl p-6 shadow-elevated">
        {/* Photo */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-primary">
          <img
            src={profileImage}
            alt="Aditya Pal — Full Stack Developer"
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="mt-6 text-3xl font-black text-neutral-900 text-center tracking-tight">
          Aditya Pal
        </h2>

        {/* Flame badge */}
        <div className="flex justify-center mt-3">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-glow animate-pulse-glow">
            <Flame className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-center text-neutral-500 text-[15px] leading-relaxed px-2">
          I build scalable digital products with design + code + automation.
        </p>

        {/* Socials */}
        <div className="mt-6 flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-primary hover:scale-110 transition-transform duration-200"
            >
              <Icon className="w-5 h-5" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
