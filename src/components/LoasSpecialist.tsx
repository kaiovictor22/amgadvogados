import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";

const credentials = [
  "Especialista em Direito Previdenciário",
  "Foco em aprovação e reversão de negativas do BPC/LOAS",
  "Pós-graduado em Processo Civil",
];

const LoasSpecialist = () => {
  return (
    <section id="especialista" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Left — portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/arashiro.jpg"
                alt="Dr. Rafael Arashiro — Especialista em Direito Previdenciário e BPC/LOAS"
                className="w-72 sm:w-80 lg:w-full max-w-sm h-auto object-cover object-[center_25%] rounded-2xl shadow-xl"
                loading="lazy"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
              {/* OAB badge */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-4 py-3 shadow-lg">
                <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                  OAB/MS
                </p>
                <p className="font-sans text-xs font-bold text-primary">
                  Dr. Rafael Arashiro
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
              Seu Caso em Mãos Experientes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-6 leading-tight font-sans">
              Conheça o Dr. Rafael Arashiro
            </h2>
            <div className="divider-navy mb-8" />

            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Lidar com o INSS pode ser desgastante, especialmente quando o
              direito do seu familiar é negado injustamente. Meu objetivo é usar
              todo o{" "}
              <strong className="text-primary font-bold">
                rigor técnico e estratégico do Direito Previdenciário
              </strong>{" "}
              para garantir que a lei seja cumprida e o benefício do BPC/LOAS
              seja concedido com total segurança.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm text-muted-foreground font-semibold"
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Primary CTA */}
            <a
              href="https://wa.me/5567996596456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com o Dr. Arashiro
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LoasSpecialist;
