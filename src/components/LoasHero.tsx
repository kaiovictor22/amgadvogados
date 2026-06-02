import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import BG_IMG from "@/assets/autista.avif";


const LoasHero = () => {
  return (
    <section
      id="inicio"
      aria-label="Hero — BPC/LOAS para Autismo"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with navy overlay */}
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt="Pai segurando a mão da filha com autismo"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlay: navy token via inline HSL — documented exception pattern (opacity not a token) */}
        <div className="absolute inset-0 bg-[hsl(215_55%_22%/0.65)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl py-32 lg:py-40 text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Overline label */}
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
              BPC/LOAS — Direito Previdenciário
            </span>

            {/* Gold divider bar */}
            <div className="w-16 h-[3px] bg-accent mb-8 mx-auto md:mx-0" />

            {/* H1 — único desta página, otimizado para SEO */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.1] text-primary-foreground mb-6 font-sans">
              Garanta o BPC/LOAS para o seu filho com{" "}
              <span className="text-accent">Autismo (TEA)</span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0">
              Crianças e adultos com Transtorno do Espectro Autista têm direito
              ao benefício de R$ 1.518/mês — mesmo sem contribuição ao INSS.
              Nossa equipe conduz todo o processo, do pedido à concessão.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <a
                href="https://wa.me/5567996596456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Consulta gratuita pelo WhatsApp
              </a>

              <a
                href="#elegibilidade"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase border border-primary-foreground/30 text-primary-foreground/90 hover:bg-primary-foreground/10 rounded transition-all duration-300"
              >
                Verificar elegibilidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 font-sans text-xs text-primary-foreground/50 tracking-wide"
            >
              +600 clientes atendidos em todo o Brasil &middot; OAB/MS
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoasHero;
