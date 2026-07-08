import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Autista nível 1 de suporte (leve) tem direito ao BPC?",
    answer:
      "Sim. O nível de suporte não é o único fator determinante para a concessão do BPC/LOAS. Se o autista nível 1 comprovar as barreiras sociais enfrentadas no dia a dia e a família se enquadrar no critério de baixa renda (renda per capita de até 1/4 do salário mínimo), o direito ao benefício é plenamente garantido pela legislação vigente.",
  },
  {
    question: "Quem recebe Bolsa Família pode receber o BPC/LOAS?",
    answer:
      "Sim. É perfeitamente possível acumular o Bolsa Família com o BPC/LOAS. Os benefícios são independentes entre si. Além disso, o valor recebido pelo Bolsa Família não entra no cálculo da renda per capita para fins de concessão do BPC, conforme determina a legislação.",
  },
  {
    question: "Preciso de advogado para dar entrada no BPC/LOAS?",
    answer:
      "Não é obrigatório para o pedido administrativo junto ao INSS. No entanto, é altamente recomendado. Um advogado especialista evita erros na documentação que frequentemente causam negativas desnecessárias e atrasos de meses. Caso o INSS negue o benefício, o advogado torna-se indispensável para reverter a decisão na via judicial.",
  },
  {
    question: "O BPC/LOAS é vitalício?",
    answer:
      "Não. O BPC/LOAS é um benefício assistencial sujeito a revisão pelo INSS a cada 2 anos. Durante a revisão, o INSS verifica se o beneficiário ainda preenche os requisitos de deficiência e de vulnerabilidade socioeconômica. No entanto, enquanto a condição de deficiência e a baixa renda familiar persistirem, o pagamento é mantido.",
  },
];

// Schema.org FAQPage — injeta JSON-LD para Rich Snippets no Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const LoasFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      {/* Structured data — FAQPage Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-4 font-sans">
            Perguntas Frequentes sobre o BPC/LOAS para Autistas
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Respondemos as dúvidas mais comuns de famílias que buscam o
            BPC/LOAS para filhos com Transtorno do Espectro Autista.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                {/* Question button */}
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span className="font-sans text-sm sm:text-base font-semibold text-primary leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="shrink-0 text-accent"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                </h3>

                {/* Answer — animated height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed font-semibold px-6 pb-6 pt-0 border-t border-border">
                        <span className="block pt-4">{faq.answer}</span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LoasFAQ;
