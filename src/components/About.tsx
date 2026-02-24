import { motion } from "framer-motion";
import teamHands from "@/assets/team-hands.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={teamHands}
                alt="Parceria e compromisso — AMG Advogados"
                className="w-full h-[400px] object-cover object-center scale-110"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
              Compromisso com{" "}
              <span className="text-gradient-gold">seus direitos</span>
            </h2>
            <div className="divider-gold-left mb-8" />

            <p className="font-sans text-muted-foreground leading-relaxed mb-5">
              O <strong className="text-foreground font-medium">Arashiro, Morel & Gadêlha Advogados</strong> atua 
              de forma estratégica em demandas previdenciárias, cíveis, trabalhistas, consumeristas e consultivas, 
              oferecendo atendimento completo para pessoas físicas, empresas, sindicatos e entidades representativas.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-5">
              A atuação multidisciplinar permite analisar cada caso de forma ampla, buscando soluções eficazes, 
              proteção patrimonial e segurança jurídica, com ética, transparência e acompanhamento próximo.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Acreditamos na advocacia como instrumento de transformação. Caminhamos lado a lado com 
              nossos clientes, oferecendo suporte jurídico contínuo, humano e de confiança.
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-3xl text-accent font-medium">5+</p>
                <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1">
                  Áreas de Atuação
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent font-medium">100%</p>
                <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1">
                  Dedicação
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
