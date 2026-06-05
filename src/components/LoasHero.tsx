import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import BG_IMG from '@/assets/menino-hero.jpeg';
import BG_IMG_MOBILE from '@/assets/menino-hero-mobile.jpeg';

const LoasHero = () => {
  return (
    <section
      id="inicio"
      aria-label="Hero — BPC/LOAS para Autismo"
      className="relative overflow-hidden bg-primary md:bg-transparent"
    >
      <div className="hidden md:block absolute inset-0">
        <img
          src={BG_IMG}
          alt="Menino autista segurando peças de quebra-cabeça"
          className="w-full h-full object-cover object-[calc(100%+200px)_center]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215_55%_22%/0.95)] via-[hsl(215_55%_22%/0.6)] to-[hsl(215_55%_22%/0.1)]" />
      </div>

      <div className="relative z-10 bg-gradient-to-b from-primary via-primary/95 to-transparent md:bg-none container mx-auto px-6 pb-16 md:pb-0">
        <div className="max-w-2xl pt-32 pb-0 md:py-32 lg:py-40 text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Overline label */}
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-6 block drop-shadow-sm">
              BPC/LOAS — Direito Previdenciário
            </span>

            {/* Gold divider bar */}
            <div className="w-16 h-[3px] bg-accent mb-8 mx-auto md:mx-0" />

            {/* H1 — único desta página, otimizado para SEO */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.1] text-primary-foreground mb-6 font-sans drop-shadow-md">
              Garanta o BPC/LOAS para o seu filho com{' '}
              <span className="text-accent drop-shadow-sm">Autismo (TEA)</span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0 drop-shadow-sm">
              Crianças e adultos com Transtorno do Espectro Autista têm direito
              ao benefício de R$ 1.518/mês — mesmo sem contribuição ao INSS.
              Nossa equipe conduz todo o processo, do pedido à concessão.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <a
                href="https://tintim.link/whatsapp/ebfc7f2a-ec8b-4de0-a91c-90d16aed25a3/7d132dd9-99b3-4101-90aa-06dcc59fd853"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Fale com um especialista pelo WhatsApp
              </a>

              <a
                href="#elegibilidade"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 rounded transition-all duration-300"
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
              className="mt-8 font-sans text-xs text-primary-foreground/80 tracking-wide drop-shadow-sm"
            >
              +600 clientes atendidos em todo o Brasil &middot; OAB/MS
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="md:hidden relative w-full -mt-32 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-transparent h-32" />
        <img
          src={BG_IMG_MOBILE}
          alt="Menino autista segurando peças de quebra-cabeça"
          className="w-full h-auto object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default LoasHero;
