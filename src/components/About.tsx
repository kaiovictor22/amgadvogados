import { motion } from "framer-motion";
import { Scale, Users, Award } from "lucide-react";

const stats = [
  { icon: Scale, label: "Atuação Especializada", value: "Previdenciário & Civil" },
  { icon: Users, label: "Atendimento", value: "Personalizado" },
  { icon: Award, label: "Compromisso", value: "Ética & Excelência" },
];

const About = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4 block">
            Quem Somos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
            AMG Advogados
          </h2>
          <div className="divider-gold w-16 mx-auto mb-8" />
          <p className="font-sans text-muted-foreground leading-relaxed mb-6">
            O escritório <strong className="text-foreground">AMG Advogados</strong>, liderado pelo advogado{" "}
            <strong className="text-foreground">Rafael Arashiro</strong>, é referência em Direito Previdenciário 
            e Direito Civil. Nossa atuação é pautada pela ética profissional, pelo compromisso com o cliente 
            e pela busca incansável dos melhores resultados.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Acreditamos que cada caso é único e merece atenção personalizada. Por isso, oferecemos 
            um atendimento humanizado, com linguagem clara e acessível, para que nossos clientes 
            compreendam seus direitos e se sintam seguros durante todo o processo jurídico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 text-center"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-serif text-lg text-foreground mb-1">{stat.value}</p>
              <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
