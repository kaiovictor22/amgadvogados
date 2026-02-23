import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const rights = [
  "Todo trabalhador que contribuiu com o INSS tem direito a benefícios previdenciários, como aposentadoria, auxílio-doença e pensão por morte.",
  "Se você recebe um benefício com valor inferior ao correto, é possível solicitar a revisão judicial para garantir o valor justo.",
  "Pessoas com deficiência e idosos com 65 anos ou mais, em situação de baixa renda, têm direito ao BPC/LOAS, mesmo sem ter contribuído para o INSS.",
  "O auxílio-doença é garantido ao trabalhador que está temporariamente incapaz de exercer suas atividades profissionais por motivo de saúde.",
  "Os dependentes de um segurado falecido têm direito à pensão por morte, assegurando sustento e proteção à família.",
];

const Rights = () => {
  return (
    <section id="direitos" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 block">
            Seus Direitos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
            Conheça Seus Direitos Previdenciários
          </h2>
          <div className="divider-gold w-16 mx-auto mb-8" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            Muitas pessoas desconhecem os direitos que possuem perante a Previdência Social. 
            Abaixo, apresentamos informações essenciais de forma clara e acessível.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {rights.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start glass-card p-6"
            >
              <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rights;
