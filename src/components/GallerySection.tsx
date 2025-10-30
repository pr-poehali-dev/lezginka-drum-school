import { useState } from 'react';
import Icon from '@/components/ui/icon';

const galleryImages = [
  {
    src: "https://cdn.poehali.dev/files/bf4669bc-8eb9-488a-bab3-ff5059ffd2de.jpg",
    alt: "Занятия игры на барабанах"
  },
  {
    src: "https://cdn.poehali.dev/files/1642e738-774e-4510-ae48-9da705783ba0.jpg",
    alt: "Выступление с барабанами"
  },
  {
    src: "https://cdn.poehali.dev/files/d7dcd76f-ab1e-4f24-9ab5-a9fba7fc77d7.jpg",
    alt: "Танец лезгинка"
  },
  {
    src: "https://cdn.poehali.dev/files/69c4be42-6580-416f-9775-5d5f6f15c4b6.jpg",
    alt: "Занятия по игре на барабанах"
  },
  {
    src: "https://cdn.poehali.dev/files/d8eda35f-6ef3-4788-a067-9edabc0c6f24.jpg",
    alt: "Танцевальная группа"
  },
  {
    src: "https://cdn.poehali.dev/files/91697db1-b0c0-4382-8bd2-c45965ca0987.jpg",
    alt: "Выступление на сцене"
  },
  {
    src: "https://cdn.poehali.dev/files/82d9c4ba-dd23-4ef2-8a22-554f7c7d7d95.jpg",
    alt: "Танцевальная пара"
  },
  {
    src: "https://cdn.poehali.dev/files/570c1202-befe-45f3-9406-e1cfb8ddc2be.jpg",
    alt: "Репетиция в зале"
  },
  {
    src: "https://cdn.poehali.dev/files/47415a63-8844-4f4d-99d9-1cd23d4eaac4.PNG",
    alt: "Выступление в парке"
  },
  {
    src: "https://cdn.poehali.dev/files/637d0590-10f7-401a-9ad3-e8a90c3a75ae.jpg",
    alt: "Игра на барабанах на сцене"
  },
  {
    src: "https://cdn.poehali.dev/files/b489c35f-f528-4b9d-950f-feb01a394ef0.jpg",
    alt: "Занятия в студии"
  },
  {
    src: "https://cdn.poehali.dev/files/08c015b1-694b-4a70-9605-bfcd52de26b3.jpg",
    alt: "Танец лезгинка на занятиях"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Галерея</h2>
          <p className="text-lg sm:text-xl text-gray-600">Моменты наших занятий и выступлений</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in relative group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Icon name="Expand" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <Icon name="X" size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <Icon name="ChevronLeft" size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <Icon name="ChevronRight" size={48} />
          </button>

          <div 
            className="max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
