import { motion } from "framer-motion";
import officeReception from "@/assets/office-reception.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeDesk from "@/assets/office-desk.jpg";
import officeBuilding from "@/assets/office-building.jpg";

const images = [
  { src: officeReception, alt: "Recepção AMG Advogados", span: "row-span-2" },
  { src: officeMeeting, alt: "Sala de Reuniões", span: "" },
  { src: officeDesk, alt: "Escritório", span: "" },
  { src: officeBuilding, alt: "Edifício Comercial", span: "col-span-2" },
];

const OfficeGallery = () => {
  return (
    <section id="estrutura" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Nossa Estrutura
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Ambiente preparado para <span className="text-gradient-gold">você</span>
          </h2>
          <div className="divider-gold w-16 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Um espaço planejado com conforto, sofisticação e discrição para recebê-lo 
            com a atenção que você merece.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 min-h-[200px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
