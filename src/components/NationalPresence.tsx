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
            
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-primary-foreground mb-6 uppercase tracking-wide font-sans font-semibold">
              Presença Nacional
            </h2>
            <div className="w-16 h-[3px] bg-accent mb-8" />

            <p className="font-sans text-primary-foreground/80 text-base leading-relaxed mb-6">
              Já são <strong className="text-primary-foreground font-bold">mais de 400 famílias</strong> atendidas em todo o{" "}
              <strong className="text-primary-foreground font-bold">Brasil</strong>, com casos de aposentadoria, revisão,
              BPC/LOAS, pensões, auxílio-acidente, auxílio-doença, reconhecimento de tempo especial e
              muito mais.
            </p>

            <p className="font-sans text-primary-foreground/80 text-base leading-relaxed">Nosso atendimento ocorre em todos os estados brasileiros, por meio de canais digitais e presenciais, com equipe especializada e acompanhamento jurídico próximo e humanizado.
              <strong className="text-primary-foreground font-bold">todos os estados brasileiros</strong> por
              canais digitais e presenciais, com estrutura própria, equipe especializada e acompanhamento
              jurídico humanizado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default NationalPresence;