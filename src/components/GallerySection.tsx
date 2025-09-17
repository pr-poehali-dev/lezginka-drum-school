import Icon from '@/components/ui/icon';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Галерея</h2>
          <p className="text-lg sm:text-xl text-gray-600">Моменты наших занятий и выступлений</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group">
            <img 
              src="img/9ec75f3c-2307-453c-a688-ca5b98e722d5.jpg" 
              alt="Танцоры лезгинки" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.1s'}}>
            <img 
              src="img/e98a4d66-35cb-4bf9-9515-e2752d252ca2.jpg" 
              alt="Кавказские барабаны" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.2s'}}>
            <img 
              src="img/6f8de931-d915-4a9f-93a7-4d57f4cf09ec.jpg" 
              alt="Занятия в студии" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          {[4, 5, 6].map((item, index) => (
            <div 
              key={item}
              className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group"
              style={{animationDelay: `${(index + 3) * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Icon name="Image" size={48} className="text-white/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;