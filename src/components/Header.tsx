import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-amg.jpeg";

const navItems = [
{ label: "O Escritório", href: "#sobre" },
{ label: "Previdenciário", href: "#direitos" },
{ label: "Áreas de Atuação", href: "#areas" },
{ label: "Nossa Equipe", href: "#equipe" },
{ label: "Estrutura", href: "#estrutura" },
{ label: "Contato", href: "#contato" }];


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
      scrolled ?
      "bg-card/95 backdrop-blur-lg shadow-sm border-b border-border py-2" :
      "bg-transparent py-4"}`
      }>
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            alt="AMG Advogados"
            className="h-12 w-auto rounded"
            src={logo} />
          
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`font-sans text-lg font-light tracking-[0.15em] uppercase leading-tight ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              Arashiro, Morel
            </span>
            <span className={`font-sans text-lg font-light tracking-[0.15em] uppercase leading-tight ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              & Gadêlha
            </span>
            <span className={`text-[9px] font-sans font-light tracking-[0.3em] uppercase ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
              Advogados
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            className={`font-sans text-sm font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-accent' : 'text-primary-foreground/90 hover:text-accent'}`}>

            
              {item.label}
            </a>
          )}
        </nav>

        <a
          href="https://tr.ee/1iQg5G43oE"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300">
          
          <MessageCircle className="w-3.5 h-3.5" />
          Fale com um Especialista
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label="Menu">
          
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-card border-t border-border">
          
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-sans tracking-wide text-foreground hover:text-accent transition-colors py-3 border-b border-border/50">
              
                  {item.label}
                </a>
            )}
              <a
              href="https://tr.ee/1iQg5G43oE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex justify-center items-center gap-2 px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground rounded transition-all">
              
                <MessageCircle className="w-3.5 h-3.5" />
                Fale com um Especialista
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;