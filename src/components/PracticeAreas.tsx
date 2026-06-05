import { motion } from "framer-motion";
import { Scale, ShieldCheck, Briefcase, Users, Building2, Gavel, MessageCircle, ArrowRight } from "lucide-react";

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary-foreground mb-4 font-sans">Soluções juridícas completas

          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A atuação do escritório vai além da especialização previdenciária, oferecendo suporte jurídico completo, com atenção individualizada e estratégia sólida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* BPC/LOAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <Briefcase className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              BPC/LOAS
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-4 text-primary-foreground/60 font-semibold">BPC/LOAS, aposentadorias, auxílio-doença, pensão por morte, revisão de benefícios, demais beneficios do inss e regime de servidores publícos.

            </p>
            <ul className="space-y-1.5 mb-8">
              <li className="font-sans text-xs flex items-center gap-2 text-primary-foreground/70">
                <ArrowRight className="w-3 h-3 text-accent" />
                BPC/LOAS
              </li>
              <li className="font-sans text-xs flex items-center gap-2 text-primary-foreground/70">
                <ArrowRight className="w-3 h-3 text-accent" />
                Aposentadorias
              </li>
              <li className="font-sans text-xs flex items-center gap-2 text-primary-foreground/70">
                <ArrowRight className="w-3 h-3 text-accent" />
                Auxílio-doença
              </li>
              <li className="font-sans text-xs flex items-center gap-2 text-primary-foreground/70">
                <ArrowRight className="w-3 h-3 text-accent" />
                Pensão por morte
              </li>
              <li className="font-sans text-xs flex items-center gap-2 text-primary-foreground/70">
                <ArrowRight className="w-3 h-3 text-accent" />
                Revisão de benefícios
              </li>
            </ul>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20BPC%2FLOAS%20e%20direito%20previdenci%C3%A1rio."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>

          {/* Sindicatos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <Users className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              Atuação para Sindicatos e Entidades
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-8 text-primary-foreground/60 font-semibold">
              Assessoria jurídica contínua, ações coletivas, pareceres, negociações e defesa judicial.
            </p>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20atua%C3%A7%C3%A3o%20jur%C3%ADdica%20para%20Sindicatos%20e%20Entidades."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>

          {/* Contencioso Cível */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <Scale className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              Contencioso Cível e Responsabilidade Civil
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-8 text-primary-foreground/60 font-semibold">
              Ações indenizatórias, conflitos contratuais, cobranças, defesas judiciais e litígios estratégicos.
            </p>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Contencioso%20C%C3%ADvel%20e%20Responsabilidade%20Civil."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>

          {/* Direito do Consumidor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <ShieldCheck className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              Direito do Consumidor
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-8 text-primary-foreground/60 font-semibold">Demandas contra bancos, revisão contratual, cobranças indevidas, negativação indevida e práticas abusivas.

            </p>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Direito%20do%20Consumidor."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>

          {/* Direito Trabalhista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <Gavel className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              Direito Trabalhista
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-8 text-primary-foreground/60 font-semibold">
              Reclamações trabalhistas, acordos, verbas rescisórias, reconhecimento de vínculo, assédio moral e indenizações.
            </p>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Direito%20Trabalhista."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>

          {/* Assessoria Empresarial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-7 rounded-lg group transition-all duration-500 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 flex flex-col h-full">
            
            <Building2 className="w-7 h-7 mb-5 group-hover:scale-110 transition-transform duration-300 text-accent" />
            <h4 className="text-xl font-semibold mb-3 leading-snug text-primary-foreground font-sans">
              Assessoria Jurídica para Empresas
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-8 text-primary-foreground/60 font-semibold">
              Suporte jurídico preventivo, estratégico e contínuo, auxiliando na tomada de decisões e redução de riscos.
            </p>
            <a
              href="https://wa.me/5567996596456?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Assessoria%20Jur%C3%ADdica%20para%20Empresas."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 text-[11px] font-sans font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Analisar meu Caso
            </a>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14">
          
          <a
            href="https://wa.me/5567996596456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300">
            
            <MessageCircle className="w-4 h-4" />
            Fale com um Especialista
          </a>
        </motion.div>
      </div>
    </section>);

};

export default PracticeAreas;