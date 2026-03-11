import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Team = () => {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4 font-sans xl:text-4xl">
            Profissionais dedicados ao seu caso
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa equipe reúne experiência jurídica, rigor técnico e atuação estratégica para oferecer soluções seguras e personalizadas a cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Dr. Arashiro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-500">
            
            <div className="h-80 bg-primary/5 overflow-hidden">
              <img
                src="/lovable-uploads/arashiro.jpg"
                alt="Dr. Arashiro"
                className="w-full h-full object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-500 opacity-100 border-0 border-none rounded-xl object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-1 font-sans">Dr. Rafael Arashiro

              </h3>
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Advogado
              </p>
              <p className="font-sans text-xs text-muted-foreground mb-3 font-semibold">
                Direito Previdenciário e Cível
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-semibold">Pós-graduado em Processo Civil e MBA em Direito Tributário, Compliance e Auditoria Digital.


Atua em demandas previdenciárias administrativas e judiciais, com experiência em benefícios do INSS e BPC/LOAS.

              </p>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <a href="https://wa.me/5567996596456" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Dr. Morel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-500">
            
            <div className="h-80 bg-primary/5 overflow-hidden">
              <img
                src="/lovable-uploads/morel.png"
                alt="Dr. Morel"
                style={{ objectPosition: "center 30%" }}
                className="w-full h-full object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-500 opacity-100 border-0 border-none rounded-xl object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-1 font-sans">Dr. Bruno Morel

              </h3>
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Advogado
              </p>
              <p className="font-sans text-xs text-muted-foreground mb-3 font-semibold">
                Direito Cível, Sindical e Assessoria Empresarial
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-semibold">Pós-graduado em Processo Civil e especializado em gestão de resultados e qualidade.


Atua em demandas com foco em soluções estratégicas e eficiência na condução dos processos.

              </p>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <a href="https://wa.me/5567996596456" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Dra. Gadêlha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-500">
            
            <div className="h-80 bg-primary/5 overflow-hidden">
              <img
                src="/lovable-uploads/40eb97f9-a436-48fd-a6ba-d052b29baeda.jpg"
                alt="Dra. Gadêlha"
                className="w-full h-full object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-500 opacity-100 border-0 border-none rounded-xl object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-1 font-sans">Dra. Thais Gadêlha

              </h3>
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Advogada
              </p>
              <p className="font-sans text-xs text-muted-foreground mb-3 font-semibold">Direito civil e previdenciario

              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-semibold">Especialista em Direito Previdenciário e contencioso cível.


Atua na assessoria jurídica e condução de demandas judiciais e consultivas com foco em soluções seguras e preventivas.

              </p>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <a href="https://wa.me/5567996596456" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Team;