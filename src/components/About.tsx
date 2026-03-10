import { motion } from "framer-motion";
import teamHands from "@/assets/team-hands.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background text-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={teamHands}
                alt="Parceria e compromisso — AMG Advogados"
                className="w-full h-[400px] object-cover object-center" />
              
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
              O Escritório
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-6 leading-tight font-sans">
              Compromisso com seus direitos
            </h2>
            <div className="divider-navy mb-8" />

            <p className="font-sans text-muted-foreground leading-relaxed mb-5 border-0">Arashiro, Morel & Gadêlha Advogados atua de forma estratégica em demandas previdenciárias, cíveis, trabalhistas, consumeristas e consultivas, oferecendo atendimento completo para pessoas físicas, empresas, sindicatos e entidades representativas.


              <strong className="text-foreground font-medium">Arashiro, Morel & Gadêlha Advogados</strong> atua 
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
                <p className="font-serif text-4xl text-primary font-bold">​+5</p>
                <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1">
                  Áreas de Atuação
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary font-bold">100%</p>
                <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1">
                  Dedicação
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);};

export default About;