import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock, ExternalLink, Star } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
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
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-4">
            Fale com nossa equipe
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Entre em contato para uma análise personalizada do seu caso. 
            Estamos prontos para cuidar dos seus direitos com atenção e dedicação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
          <motion.a
            href="https://wa.me/5567965946456"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 text-center group hover:shadow-lg border border-border rounded-lg transition-all duration-500"
          >
            <Phone className="w-6 h-6 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-serif text-base text-foreground mb-1">Telefone / WhatsApp</p>
            <p className="font-sans text-sm text-muted-foreground">(67) 9659-6456</p>
          </motion.a>

          <motion.a
            href="mailto:contato@amgadvogados.com.br"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-6 text-center group hover:shadow-lg border border-border rounded-lg transition-all duration-500"
          >
            <Mail className="w-6 h-6 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-serif text-base text-foreground mb-1">E-mail</p>
            <p className="font-sans text-sm text-muted-foreground">contato@amgadvogados.com.br</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 text-center border border-border rounded-lg"
          >
            <MapPin className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="font-serif text-base text-foreground mb-1">Endereço</p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              R. Pedro Celestino, 3607<br />
              Sala 903 – Centro<br />
              Campo Grande – MS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card p-6 text-center border border-border rounded-lg"
          >
            <Clock className="w-6 h-6 text-accent mx-auto mb-4" />
            <p className="font-serif text-base text-foreground mb-1">Horário</p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Segunda a Sexta<br />
              08h às 18h
            </p>
          </motion.div>
        </div>

        {/* Google Maps + Reviews */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.857!2d-54.6295!3d-20.4615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b4d4c3b%3A0x5e2a6e4f5c8b9a0d!2sR.+Pedro+Celestino%2C+3607+-+Centro%2C+Campo+Grande+-+MS%2C+79004-560!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AMG Advogados"
              />
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-lg border border-border p-6 flex flex-col"
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-serif text-4xl font-bold text-primary">5.0</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Avaliações no Google</p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="border-t border-border pt-4">
                  <p className="font-sans text-sm text-muted-foreground italic leading-relaxed">
                    "Excelentes profissionais, atenciosos e competentes. Recomendo!"
                  </p>
                  <p className="font-sans text-xs text-accent font-medium mt-2">— Cliente Google</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-sans text-sm text-muted-foreground italic leading-relaxed">
                    "Atendimento humanizado e resultado além do esperado."
                  </p>
                  <p className="font-sans text-xs text-accent font-medium mt-2">— Cliente Google</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/AMG+Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded transition-all duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Ver no Google Maps
              </a>
            </motion.div>
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5567965946456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Fale com um Especialista
          </a>
          <a
            href="https://tr.ee/FsjNYMVz4i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Siga no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
