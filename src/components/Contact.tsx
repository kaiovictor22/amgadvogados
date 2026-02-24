import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Fale com <span className="text-gradient-gold">nossa equipe</span>
          </h2>
          <div className="divider-gold w-16 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Entre em contato para uma análise personalizada do seu caso. 
            Estamos prontos para cuidar dos seus direitos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <Phone className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="font-serif text-base text-foreground mb-1">Telefone</p>
            <p className="font-sans text-sm text-muted-foreground">(67) XXXXX-XXXX</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 text-center"
          >
            <Mail className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="font-serif text-base text-foreground mb-1">E-mail</p>
            <p className="font-sans text-sm text-muted-foreground">contato@amgadvogados.com.br</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 text-center"
          >
            <MapPin className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="font-serif text-base text-foreground mb-1">Endereço</p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              R. Pedro Celestino, 3607<br />
              Sala 903 – Centro<br />
              Campo Grande – MS<br />
              CEP 79004-560
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
