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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-surface/80 backdrop-blur-xl border border-border shadow-card-elegant">
        {items.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Icon className="w-4 h-4" strokeWidth={2} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
