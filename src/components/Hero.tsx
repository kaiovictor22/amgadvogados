import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto">

          <div className="divider-gold w-24 mx-auto mb-8" />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-6">
            Advocacia de{" "}
            <span className="text-gradient-gold font-medium text-primary bg-primary-foreground">Excelência</span>{" "}
            em Direito Previdenciário e Civil
          </h1>

          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Há anos protegendo os direitos dos nossos clientes com ética, 
            competência e dedicação. Sua segurança jurídica é nossa prioridade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex justify-center items-center px-8 py-4 text-xs font-sans font-medium tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">

              Agende uma Consulta
            </a>
            <a
              href="#areas"
              className="inline-flex justify-center items-center px-8 py-4 text-xs font-sans font-medium tracking-widest uppercase border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-300">

              Áreas de Atuação
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;