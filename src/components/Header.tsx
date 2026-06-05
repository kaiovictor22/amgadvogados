import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-amg.jpeg";

interface NavItem {
  label: string;
  // Âncoras do Index usam "/#ancora" para funcionar de qualquer rota da SPA.
  // Links de outras páginas usam o path absoluto "/pagina".
  href: string;
  highlight?: boolean; 
}

// REGRA: âncoras da página Index devem sempre começar com "/#"
// para que o browser navegue até "/" antes de rolar para a seção.
const navItems: NavItem[] = [
  { label: "O Escritório", href: "/#sobre" },      
  { label: "Áreas de Atuação", href: "/#areas" },   
  { label: "Previdenciário", href: "/#direitos" }, 
  { label: "Nossa Equipe", href: "/#equipe" },      
  { label: "Contato", href: "/#contato" },          
  { label: "BPC/LOAS Autismo", href: "/bpc-loas-autismo", highlight: true },
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
          ? "bg-card/95 backdrop-blur-lg shadow-sm border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            alt="AMG Advogados"
            className="h-11 w-auto rounded"
            src={logo}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className={`font-sans text-base font-light tracking-[0.15em] uppercase leading-tight ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              Arashiro, Morel
            </span>
            <span
              className={`font-sans text-base font-light tracking-[0.15em] uppercase leading-tight ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              &amp; Gadêlha
            </span>
            <span
              className={`text-[9px] font-sans font-light tracking-[0.3em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Advogados
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) =>
            item.highlight ? (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-sans font-semibold tracking-[0.1em] uppercase rounded-full border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`font-sans text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground/90 hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA desktop */}
        <a
          href="https://tintim.link/whatsapp/ebfc7f2a-ec8b-4de0-a91c-90d16aed25a3/10be0e44-57fd-486c-b885-8c076e27b757"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300 shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Fale Conosco
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-sans font-semibold tracking-wide py-3 border-b border-border/50 transition-colors ${
                    item.highlight
                      ? "text-accent hover:text-accent/80"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.highlight && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 mb-0.5" />
                  )}
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/5567996596456"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex justify-center items-center gap-2 px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground rounded transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Fale com um Especialista
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;