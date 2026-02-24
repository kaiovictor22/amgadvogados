import logo from "@/assets/logo-amg.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img alt="AMG Advogados" className="h-8 w-auto rounded-sm" src={logo} />
            <div className="flex flex-col">
              <span className="font-serif text-sm text-foreground">Arashiro, Morel & Gadêlha</span>
              <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-muted-foreground">Advogados</span>
            </div>
          </div>

          <p className="font-sans text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} AMG Advogados — Todos os direitos reservados.
          </p>

          <nav className="flex gap-6">
            {["Início", "Sobre", "Áreas", "Contato"].map((label) => (
              <a
                key={label}
                href={`#${label === "Início" ? "inicio" : label === "Sobre" ? "sobre" : label === "Áreas" ? "areas" : "contato"}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
