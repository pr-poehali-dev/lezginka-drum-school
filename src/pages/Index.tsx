import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DirectionsSection from '@/components/DirectionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import TeachersSection from '@/components/TeachersSection';
import GallerySection from '@/components/GallerySection';
import PricingSection from '@/components/PricingSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DirectionsSection />
      <ScheduleSection />
      <TeachersSection />
      <GallerySection />
      <PricingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;