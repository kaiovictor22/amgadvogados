import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 block">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
            Fale com Nossa Equipe
          </h2>
          <div className="divider-gold w-16 mx-auto mb-8" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Entre em contato para agendar uma consulta. Estamos prontos para analisar seu caso 
            e oferecer a melhor orientação jurídica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-lg text-foreground mb-1">Telefone</p>
                <p className="font-sans text-sm text-muted-foreground">(XX) XXXXX-XXXX</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-lg text-foreground mb-1">E-mail</p>
                <p className="font-sans text-sm text-muted-foreground">contato@amgadvogados.com.br</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-lg text-foreground mb-1">Endereço</p>
                <p className="font-sans text-sm text-muted-foreground">Atendimento presencial e online</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 flex flex-col justify-center items-center text-center"
          >
            <MessageCircle className="w-12 h-12 text-gold mb-6" />
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Agende Sua Consulta
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
              Nosso atendimento é personalizado e sigiloso. 
              Entre em contato pelo WhatsApp para uma análise inicial do seu caso.
            </p>
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-sans font-medium tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
