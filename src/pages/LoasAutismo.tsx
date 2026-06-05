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
    'BPC/LOAS para Autismo (TEA) | AMG Advogados — Campo Grande/MS',
    'O INSS negou o BPC/LOAS do seu filho com Autismo (TEA)? Nosso advogado especialista reverte seu caso e garante 1 salário mínimo.'
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
