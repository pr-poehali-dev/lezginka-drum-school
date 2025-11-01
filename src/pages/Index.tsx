import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DirectionsSection from '@/components/DirectionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import GallerySection from '@/components/GallerySection';
import PricingSection from '@/components/PricingSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DirectionsSection />
      <ScheduleSection />
      <PricingSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;