import { motion } from "framer-motion";
import { Scale, ShieldCheck, Briefcase, Users, Building2, Gavel } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Contencioso Cível e Responsabilidade Civil",
    desc: "Ações indenizatórias, conflitos contratuais, cobranças, defesas judiciais e litígios estratégicos.",
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    desc: "Demandas contra bancos, revisão contratual, cobranças indevidas, negativação indevida, práticas abusivas e superendividamento.",
  },
  {
    icon: Gavel,
    title: "Direito Trabalhista",
    desc: "Reclamações trabalhistas, acordos, verbas rescisórias, reconhecimento de vínculo, assédio moral e indenizações.",
  },
  {
    icon: Users,
    title: "Atuação para Sindicatos e Entidades",
    desc: "Assessoria jurídica contínua, ações coletivas, pareceres, negociações e defesa judicial.",
  },
  {
    icon: Building2,
    title: "Assessoria Jurídica Mensal para Empresas",
    desc: "Suporte jurídico preventivo, estratégico e contínuo, auxiliando na tomada de decisões e redução de riscos.",
  },
  {
    icon: Briefcase,
    title: "Direito Previdenciário",
    desc: "Aposentadorias, benefícios do INSS, revisão de benefícios, auxílio-doença, pensão por morte e BPC/LOAS.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Expertise <span className="text-gradient-gold">jurídica</span> completa
          </h2>
          <div className="divider-gold w-16 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A atuação do escritório vai além da especialização previdenciária, oferecendo suporte 
            jurídico completo, com atenção individualizada e estratégia sólida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 group hover:border-accent/20 transition-all duration-500"
            >
              <area.icon className="w-7 h-7 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-serif text-lg text-foreground mb-3 leading-snug">{area.title}</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
