import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";

const rights = [
  "Todo trabalhador que contribuiu com o INSS tem direito a benefícios previdenciários, como aposentadoria, auxílio-doença e pensão por morte.",
  "Se você recebe um benefício com valor inferior ao correto, é possível solicitar a revisão judicial para garantir o valor justo.",
  "Pessoas com deficiência e idosos com 65 anos ou mais, em situação de baixa renda, têm direito ao BPC/LOAS, mesmo sem ter contribuído para o INSS.",
  "O auxílio-doença é garantido ao trabalhador temporariamente incapaz de exercer suas atividades profissionais por motivo de saúde.",
  "Os dependentes de um segurado falecido têm direito à pensão por morte, assegurando sustento e proteção à família.",
];

const Rights = () => {
  return (
    <section id="direitos" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left — Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
              Direito Previdenciário
            </span>
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-6 leading-tight">
              Conheça seus direitos previdenciários
            </h2>
            <div className="divider-navy mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Muitas pessoas desconhecem os direitos que possuem perante a Previdência Social. 
              Conheça informações essenciais de forma clara e acessível.
            </p>
            <a
              href="https://wa.me/67965946456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Fale com um Especialista
            </a>
          </motion.div>

          {/* Right — Items */}
          <div className="space-y-4">
            {rights.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 items-start bg-card p-5 rounded-lg border border-border shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rights;
