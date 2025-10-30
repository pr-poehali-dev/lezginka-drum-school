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
              src="https://cdn.poehali.dev/files/bf4669bc-8eb9-488a-bab3-ff5059ffd2de.jpg" 
              alt="Занятия игры на барабанах" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.1s'}}>
            <img 
              src="https://cdn.poehali.dev/files/1642e738-774e-4510-ae48-9da705783ba0.jpg" 
              alt="Выступление с барабанами" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.2s'}}>
            <img 
              src="https://cdn.poehali.dev/files/d7dcd76f-ab1e-4f24-9ab5-a9fba7fc77d7.jpg" 
              alt="Танец лезгинка" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.3s'}}>
            <img 
              src="https://cdn.poehali.dev/files/69c4be42-6580-416f-9775-5d5f6f15c4b6.jpg" 
              alt="Занятия по игре на барабанах" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.4s'}}>
            <img 
              src="https://cdn.poehali.dev/files/d8eda35f-6ef3-4788-a067-9edabc0c6f24.jpg" 
              alt="Танцевальная группа" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.5s'}}>
            <img 
              src="https://cdn.poehali.dev/files/91697db1-b0c0-4382-8bd2-c45965ca0987.jpg" 
              alt="Выступление на сцене" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.6s'}}>
            <img 
              src="https://cdn.poehali.dev/files/82d9c4ba-dd23-4ef2-8a22-554f7c7d7d95.jpg" 
              alt="Танцевальная пара" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.7s'}}>
            <img 
              src="https://cdn.poehali.dev/files/570c1202-befe-45f3-9406-e1cfb8ddc2be.jpg" 
              alt="Репетиция в зале" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.8s'}}>
            <img 
              src="https://cdn.poehali.dev/files/47415a63-8844-4f4d-99d9-1cd23d4eaac4.PNG" 
              alt="Выступление в парке" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '0.9s'}}>
            <img 
              src="https://cdn.poehali.dev/files/637d0590-10f7-401a-9ad3-e8a90c3a75ae.jpg" 
              alt="Игра на барабанах на сцене" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '1s'}}>
            <img 
              src="https://cdn.poehali.dev/files/b489c35f-f528-4b9d-950f-feb01a394ef0.jpg" 
              alt="Занятия в студии" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>

          <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group" style={{animationDelay: '1.1s'}}>
            <img 
              src="https://cdn.poehali.dev/files/08c015b1-694b-4a70-9605-bfcd52de26b3.jpg" 
              alt="Танец лезгинка на занятиях" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;