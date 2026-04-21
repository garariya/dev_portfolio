import { Home, FolderKanban, Briefcase, Wrench, PenSquare, Mail } from "lucide-react";

const items = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: FolderKanban, href: "#projects", label: "Projects" },
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: Wrench, href: "#tools", label: "Tools" },
  { icon: PenSquare, href: "#thoughts", label: "Thoughts" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

const FloatingNav = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full pill-nav">
        {items.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="group relative w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Icon className="w-5 h-5 relative z-10" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 -z-0 group-hover:bg-primary group-hover:text-black" />
            
            <Icon className="w-5 h-5 absolute z-20 opacity-0 group-hover:opacity-100 text-black transition-opacity" strokeWidth={2.5} />

            <span className="absolute -bottom-14 px-4 py-2 rounded-xl bg-black border border-white/10 text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
