import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rights from "@/components/Rights";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import OfficeGallery from "@/components/OfficeGallery";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import NationalPresence from "@/components/NationalPresence";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Rights />
        <Team />
        <OfficeGallery />
        <NationalPresence />
        <ContactForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
