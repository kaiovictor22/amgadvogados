import { motion } from "framer-motion";
import { FileText, Wallet, ClipboardList, MessageCircle } from "lucide-react";

const requirements = [
  {
    icon: FileText,
    title: "Diagnóstico de TEA",
    description:
      "Laudo médico com CID-11 atualizado (F84.0 ou equivalente), emitido por neurologista, psiquiatra ou equipe multidisciplinar, atestando o Transtorno do Espectro Autista.",
  },
  {
    icon: Wallet,
    title: "Renda Familiar",
    description:
      "Renda per capita da família igual ou inferior a 1/4 do salário mínimo (hoje R$ 379,50). Despesas com terapias, fonoaudiologia, fraldas e medicamentos podem ser abatidas judicialmente.",
  },
  {
    icon: ClipboardList,
    title: "Cadastro Único",
    description:
      "CadÚnico (Cadastro Único do Governo Federal) atualizado junto ao CRAS do seu município. Sem o cadastro ativo, o INSS indeferirá o pedido administrativamente.",
  },
];

const LoasEligibility = () => {
  return (
    <section id="elegibilidade" className="py-24 md:py-32 bg-secondary">
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
            O Direito do Autista
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-4 font-sans">
            O que é o BPC/LOAS e quem tem direito?
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A{" "}
            <strong className="text-primary font-bold">
              Lei Berenice Piana (Lei 12.764/2012)
            </strong>{" "}
            reconhece o Transtorno do Espectro Autista como deficiência para
            todos os fins legais. Isso garante ao autista de{" "}
            <strong className="text-primary font-bold">qualquer idade</strong> o
            direito ao BPC/LOAS:{" "}
            <strong className="text-primary font-bold">
              1 salário mínimo mensal
            </strong>
            , sem necessidade de ter contribuído ao INSS.{" "}
            <span className="text-muted-foreground">
              Importante: o benefício não paga 13º salário e não gera pensão por
              morte — mas garante renda e acesso a outros direitos sociais.
            </span>
          </p>
        </motion.div>

        {/* Requisitos — staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {requirements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card p-7 rounded-lg border border-border group hover:shadow-lg transition-all duration-500"
              >
                <Icon className="w-7 h-7 mb-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-primary mb-3 font-sans leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed font-semibold">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            Os três requisitos acima são cumulativos. Se você foi negado por um
            deles,{" "}
            <strong className="text-primary font-bold">
              um advogado especialista pode reverter a decisão judicialmente.
            </strong>
          </p>
          <a
            href="https://wa.me/5567996596456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com um Especialista em BPC/LOAS
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LoasEligibility;
