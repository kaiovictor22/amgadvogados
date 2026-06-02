import { motion } from "framer-motion";
import { MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";
import BG_IMG from "@/assets/doc-sobre-mesa.avif";


const victories = [
  "Gastos com terapias (ABA, fonoaudiólogo, TO)",
  "Consultas médicas e exames periódicos",
  "Fraldas e produtos de higiene especializados",
  "Medicamentos de uso contínuo",
  "Alimentação seletiva e suplementação nutricional",
  "Transporte para tratamentos de saúde",
];

const LoasDenied = () => {
  return (
    <section id="beneficio-negado" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Atuação Estratégica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-4 font-sans">
            O INSS negou o benefício por causa da renda?
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Isso é mais comum do que parece — e{" "}
            <strong className="text-primary font-bold">tem solução judicial.</strong>
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={BG_IMG}
                alt="Documentos do INSS sobre mesa — processo de revisão de benefício negado"
                className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover object-center img-premium"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />

            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-6 bg-card border border-border rounded-lg px-5 py-4 shadow-lg flex items-center gap-3"
            >
              <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
              <p className="font-sans text-xs font-semibold text-foreground leading-snug max-w-[180px]">
                70% das negativas do INSS são revertidas na via judicial
              </p>
            </motion.div>
          </motion.div>

          {/* Right — persuasive copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 lg:pt-0"
          >
            <p className="font-sans text-muted-foreground leading-relaxed mb-5">
              Os sistemas automatizados e peritos do INSS calculam a renda
              familiar de forma <strong className="text-primary font-bold">bruta e mecânica</strong>,
              sem considerar a realidade de quem vive com autismo. Frequentemente,
              o benefício é negado alegando que a renda per capita ultrapassa
              1/4 do salário mínimo — mesmo em famílias que{" "}
              <strong className="text-primary font-bold">
                gastam uma fortuna em tratamentos
              </strong>{" "}
              para manter a qualidade de vida do autista.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Na via judicial, um advogado especialista consegue{" "}
              <strong className="text-primary font-bold">
                flexibilizar o critério de renda
              </strong>
              , pedindo ao juiz que desconte do cálculo os gastos essenciais da
              família com o autista — um entendimento consolidado nos tribunais
              brasileiros.
            </p>

            {/* Lista de gastos dedutíveis */}
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Gastos que podem ser abatidos do cálculo
            </p>
            <ul className="space-y-2.5 mb-8">
              {victories.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm text-muted-foreground font-semibold"
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA primário */}
            <a
              href="https://wa.me/5567996596456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Quero reverter meu benefício negado
            </a>

            <p className="font-sans text-xs text-muted-foreground mt-4 leading-relaxed">
              Análise gratuita do seu caso. Atendemos em todo o Brasil por
              WhatsApp e videochamada.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LoasDenied;
