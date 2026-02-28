import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with navy overlay */}
      <div className="absolute inset-0">
        <img
          src={teamPhoto}
          alt="Equipe AMG Advogados"
          className="w-full h-full object-cover object-[center_2%] md:object-[center_6%] lg:object-[center_10%]"
          loading="eager"
        />
        
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-[3px] bg-accent mb-8" />

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.1] text-primary-foreground mb-6">
              Arashiro, Morel
              <br />
              <span className="text-accent">& Gadêlha</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-primary-foreground/80">
                Advogados
              </span>
            </h1>

            <p className="font-sans text-base md:text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed">
              Atuação estratégica e humanizada em demandas previdenciárias, cíveis, trabalhistas e
              consultivas — protegendo seus direitos com ética, transparência e excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tr.ee/1iQg5G43oE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Fale com um Especialista
              </a>
              <a
                href="#areas"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase border border-primary-foreground/30 text-primary-foreground/90 hover:bg-primary-foreground/10 rounded transition-all duration-300"
              >
                Áreas de Atuação
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
