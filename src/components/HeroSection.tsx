import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Почувствуй
            <span className="block text-secondary animate-pulse-dance" style={{ textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white' }}>Ритмы Гор</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Изучай традиционные кавказские танцы и барабаны с профессиональными мастерами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 animate-fade-in">
              <Icon name="Play" className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary animate-fade-in">
              <Icon name="Phone" className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse-dance">
        <Icon name="Music" size={40} className="text-white/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-dance" style={{animationDelay: '1s'}}>
        <img src="https://cdn.poehali.dev/files/cfc88af3-3401-452f-a7b9-63088be64b4b.png" alt="Барабан" className="w-20 h-20 opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;