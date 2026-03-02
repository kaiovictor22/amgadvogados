import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-amg.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img alt="AMG Advogados" className="h-10 w-auto rounded" src={logo} />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-sm text-primary-foreground font-semibold">Arashiro, Morel</span>
                <span className="font-serif text-sm text-primary-foreground font-semibold">& Gadêlha</span>
                <span className="text-[8px] font-sans tracking-[0.2em] uppercase text-primary-foreground/60">Advogados</span>
              </div>
            </div>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
              Advocacia estratégica e humanizada, protegendo seus direitos com ética e excelência.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "O Escritório", href: "#sobre" },
                { label: "Previdenciário", href: "#direitos" },
                { label: "Áreas de Atuação", href: "#areas" },
                { label: "Nossa Equipe", href: "#equipe" },
                { label: "Estrutura", href: "#estrutura" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-sans text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+5567965946456" className="flex items-center gap-2 text-sm font-sans text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                (67) 9659-6456
              </a>
              <a href="mailto:juridico@escritorioamg.adv.br" className="flex items-center gap-2 text-sm font-sans text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                juridico@escritorioamg.adv.br
              </a>
              <div className="flex items-start gap-2 text-sm font-sans text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>R. Pedro Celestino, 3607 – Edifício Classic Office, Sala 903, Centro, Campo Grande – MS</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Atendimento</h4>
            <p className="font-sans text-sm text-primary-foreground/60 mb-4">
              Segunda a Sexta, 08h às 18h
            </p>
            <a
              href="https://tr.ee/1iQg5G43oE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all w-full justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Fale Conosco
            </a>
            <div className="flex gap-3 mt-4">
              <a
                href="https://tr.ee/1iQg5G43oE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://tr.ee/FsjNYMVz4i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Arashiro, Morel & Gadêlha Advogados — Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-primary-foreground/40">
            OAB/MS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
