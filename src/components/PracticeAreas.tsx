import { motion } from "framer-motion";
import { Shield, FileText, Heart, AlertCircle, Home, Scale, Briefcase, FileCheck, BookOpen, Users } from "lucide-react";

const previdenciario = [
  { icon: Shield, title: "Aposentadorias", desc: "Aposentadoria por idade, tempo de contribuição, especial e por invalidez. Analisamos seu histórico e identificamos a melhor estratégia." },
  { icon: FileText, title: "Benefícios do INSS", desc: "Orientação completa sobre todos os benefícios previdenciários disponíveis, com análise individualizada do seu caso." },
  { icon: AlertCircle, title: "Revisão de Benefícios", desc: "Revisão de aposentadorias e benefícios concedidos com valores abaixo do correto. Recupere o que é seu por direito." },
  { icon: Heart, title: "Auxílio-Doença", desc: "Assistência para obtenção e manutenção do auxílio-doença quando você está incapacitado para o trabalho." },
  { icon: Home, title: "Pensão por Morte", desc: "Garantia do benefício para dependentes do segurado falecido, com agilidade e sensibilidade." },
  { icon: Users, title: "BPC/LOAS", desc: "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade social." },
];

const civil = [
  { icon: Briefcase, title: "Consultoria Jurídica", desc: "Assessoria preventiva e consultiva para pessoas físicas, orientando sobre direitos e obrigações legais." },
  { icon: FileCheck, title: "Contratos", desc: "Elaboração, revisão e análise de contratos civis, assegurando segurança jurídica nas suas relações." },
  { icon: BookOpen, title: "Obrigações", desc: "Atuação em questões envolvendo obrigações civis, cobranças indevidas e direitos do consumidor." },
  { icon: Scale, title: "Responsabilidade Civil", desc: "Defesa e reparação de danos materiais e morais, buscando a justa compensação pelos prejuízos sofridos." },
];

const AreaCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card p-6 group hover:border-gold/30 transition-all duration-500"
  >
    <Icon className="w-6 h-6 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
    <h4 className="font-serif text-xl text-foreground mb-2">{title}</h4>
    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4">
            Especialidades Jurídicas
          </h2>
          <div className="divider-gold w-16 mx-auto" />
        </motion.div>

        {/* Previdenciário */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl text-foreground mb-8 text-center md:text-left"
          >
            Direito Previdenciário
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previdenciario.map((item, i) => (
              <AreaCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* Civil */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl text-foreground mb-8 text-center md:text-left"
          >
            Direito Civil
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {civil.map((item, i) => (
              <AreaCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
