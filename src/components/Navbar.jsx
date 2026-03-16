import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Wand2,
  Users,
  Sparkles,
  Shield,
  Menu,
  X,
  Zap,
  Beaker,
  Star,
  PawPrint,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Zap },
    { name: "Characters", path: "/characters", icon: Users },
    { name: "Spells", path: "/spells", icon: Sparkles },
    { name: "Houses", path: "/houses", icon: Shield },
    { name: "Potions", path: "/potions", icon: Beaker },
    { name: "Creatures", path: "/creatures", icon: PawPrint },
    { name: "Sorting Hat", path: "/sorting-hat", icon: Star },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#020b0d]/90 backdrop-blur-xl border-b border-amber-700/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                <Wand2 size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-70" />
            </div>
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
                className="text-amber-400 font-bold text-lg leading-none tracking-wide"
              >
                Hogwarts
              </span>
              <span className="text-amber-600/60 text-[10px] tracking-[0.25em] uppercase">
                Wizarding Archive
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                      : "text-amber-100/60 hover:text-amber-300 hover:bg-white/5"
                  }`}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-amber-700/30 text-amber-400 hover:bg-amber-500/10 transition-all duration-300"
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#020b0d]/95 backdrop-blur-xl border-t border-amber-700/20 px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    : "text-amber-100/60 hover:text-amber-300 hover:bg-white/5"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
