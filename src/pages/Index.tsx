import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OfficeGallery from "@/components/OfficeGallery";
import PracticeAreas from "@/components/PracticeAreas";
import Rights from "@/components/Rights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <OfficeGallery />
      <PracticeAreas />
      <Rights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
