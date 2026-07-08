import useSEO from '@/hooks/useSEO';
import Header from '@/components/Header';
import LoasHero from '@/components/LoasHero';
import LoasEligibility from '@/components/LoasEligibility';
import LoasDenied from '@/components/LoasDenied';
import LoasSpecialist from '@/components/LoasSpecialist';
import LoasFAQ from '@/components/LoasFAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import OfficeGallery from '@/components/OfficeGallery';
import Contact from '@/components/Contact';
const LoasAutismo = () => {
  useSEO(
    'Advogado Especialista em BPC/LOAS para Autismo (TEA) | Atendimento Nacional',
    'O INSS negou o BPC/LOAS do seu filho com Autismo (TEA)? Nosso advogado especialista reverte o caso. Atendimento online em todo o Brasil.',
    'https://www.advogadosamg.com.br/bpc-loas-autismo'
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LoasHero />
        <LoasEligibility />
        <LoasDenied />
        <LoasSpecialist />
        <OfficeGallery />
        <Contact background="secondary" />
        <LoasFAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LoasAutismo;
