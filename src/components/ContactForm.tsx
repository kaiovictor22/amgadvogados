import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone inválido"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000, "Mensagem muito longa"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: result.data,
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setErrors({ form: "Erro ao enviar. Tente novamente ou entre em contato por WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="formulario" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card p-10 rounded-lg border border-border shadow-sm"
          >
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-3 font-sans">Mensagem enviada!</h3>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Recebemos sua mensagem e retornaremos em breve. Obrigado pelo contato!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4 font-sans">
            Fale com um Especialista
          </h2>
          <div className="w-16 h-[3px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-card p-8 rounded-lg border border-border shadow-sm space-y-5"
        >
          {/* Honeypot - hidden from users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label className="block text-sm font-sans font-semibold text-foreground mb-1.5">
              Nome completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="Seu nome completo"
            />
            {errors.name && <p className="text-destructive text-xs mt-1 font-sans">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-sans font-semibold text-foreground mb-1.5">
              Telefone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="(00) 00000-0000"
            />
            {errors.phone && <p className="text-destructive text-xs mt-1 font-sans">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-sans font-semibold text-foreground mb-1.5">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-destructive text-xs mt-1 font-sans">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-sans font-semibold text-foreground mb-1.5">
              Mensagem *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              placeholder="Descreva brevemente seu caso..."
            />
            {errors.message && <p className="text-destructive text-xs mt-1 font-sans">{errors.message}</p>}
          </div>

          {errors.form && (
            <p className="text-destructive text-sm font-sans text-center">{errors.form}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 text-[12px] font-sans font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-all duration-300 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>

          <p className="text-center text-xs text-muted-foreground font-sans">
            Ou fale diretamente pelo{" "}
            <a
              href="https://wa.me/5567996596456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
