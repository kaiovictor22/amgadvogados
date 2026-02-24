import { motion } from "framer-motion";
import teamPhoto from "@/assets/team-photo.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 40%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="divider-gold-left mb-8" />

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              Arashiro, Morel
              <br />
              <span className="text-gradient-gold">&amp; Gadêlha</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-4xl font-light text-foreground/80">
                Advogados
              </span>
            </h1>

            <p className="font-sans text-base text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Atuação estratégica e humanizada em demandas previdenciárias, cíveis, trabalhistas e
              consultivas — protegendo seus direitos com ética, transparência e excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex justify-center items-center px-8 py-4 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
              >
                Agende uma Consulta
              </a>
              <a
                href="#areas"
                className="inline-flex justify-center items-center px-8 py-4 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase border border-foreground/15 text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              >
                Áreas de Atuação
              </a>
            </div>
          </motion.div>

          {/* Right — Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden warm-glow">
              <img
                src={teamPhoto}
                alt="Equipe AMG Advogados — Arashiro, Morel & Gadêlha"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top img-premium"
                loading="eager"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
