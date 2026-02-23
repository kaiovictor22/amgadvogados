import logo from "@/assets/logo-amg.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img alt="AMG Advogados" className="h-8 w-auto" src="/lovable-uploads/35e62d4d-4c80-4b87-9f70-d6d9148c8a12.jpg" />
            <span className="font-serif text-sm text-muted-foreground">
              AMG Advogados
            </span>
          </div>

          <p className="font-sans text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} AMG Advogados — Todos os direitos reservados.
          </p>

          <nav className="flex gap-6">
            <a href="#inicio" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#areas" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Áreas
            </a>
            <a href="#contato" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>);

};

export default Footer;