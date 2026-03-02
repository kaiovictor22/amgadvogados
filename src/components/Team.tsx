import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Arashiro",
    role: "Advogado",
    specialty: "Direito Previdenciário e Cível",
    description: "Especialista em direito previdenciário com vasta experiência em benefícios do INSS, aposentadorias e BPC/LOAS.",
    photo: "/lovable-uploads/arashiro.jpg",
  },
  {
    name: "Dr. Morel",
    role: "Advogado",
    specialty: "Direito Trabalhista e Consumerista",
    description: "Atuação estratégica em demandas trabalhistas e consumeristas, com foco na defesa dos direitos do cidadão.",
    photo: "/lovable-uploads/morel.png",
  },
  {
    name: "Dra. Gadêlha",
    role: "Advogada",
    specialty: "Direito Cível e Assessoria Empresarial",
    description: "Experiência em assessoria jurídica empresarial, contencioso cível e consultoria preventiva.",
    photo: "/lovable-uploads/gadelha.jpg",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-semibold text-primary mb-4">
            Profissionais dedicados ao seu caso
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa equipe une expertise jurídica, comprometimento e visão estratégica para 
            oferecer a melhor solução para cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 bg-primary/5 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                  {member.role}
                </p>
                <p className="font-sans text-xs text-muted-foreground mb-3">
                  {member.specialty}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <a href="mailto:contato@amgadvogados.com.br" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
