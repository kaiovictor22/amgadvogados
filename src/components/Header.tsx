import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-amg.jpeg";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            alt="AMG Advogados"
            className="h-11 w-auto rounded-sm"
            src={logo}
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-serif text-base font-semibold tracking-wider text-foreground leading-tight">
              AMG
            </span>
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground">
              Advogados
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex px-6 py-2.5 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase border border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Fale Conosco
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/30"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-sans tracking-wide text-foreground/70 hover:text-foreground transition-colors py-3 border-b border-border/20"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex justify-center px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase border border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
