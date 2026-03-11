import { motion } from "framer-motion";
import brazilMap from "@/assets/brazil-map.png";
import logo from "@/assets/logo-amg.jpeg";

const NationalPresence = () => {
  return (
    <section className="py-24 md:py-32 bg-[hsl(215_60%_14%)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center">
            
            <img

              alt="Mapa do Brasil"
              className="w-full max-w-md mx-auto" src="/lovable-uploads/379e74ee-84d0-48f4-9608-3fdd67167063.png" />
            
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-primary-foreground mb-6 uppercase tracking-wide font-sans font-semibold text-center lg:text-left">
              Presença Nacional
            </h2>
            <div className="w-16 h-[3px] bg-accent mb-8 mx-auto lg:mx-0" />

            <p className="font-sans text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-6 text-center lg:text-left">
              O escritório já atendeu <strong className="text-primary-foreground font-bold">mais de 600 clientes em todo o Brasil</strong>, atuando em demandas previdenciárias, sindicais, cíveis e trabalhistas, com especial atenção a casos envolvendo <strong className="text-primary-foreground font-bold">pessoas com deficiência, autismo e famílias de crianças atípicas</strong>.
            </p>

            <p className="font-sans text-primary-foreground/80 text-sm sm:text-base leading-relaxed text-center lg:text-left">
              Nosso atendimento ocorre em <strong className="text-primary-foreground font-bold">todos os estados brasileiros</strong>, por meio de canais digitais e presenciais, com equipe especializada e acompanhamento jurídico próximo e humanizado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default NationalPresence;