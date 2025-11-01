import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['directions', 'schedule', 'teachers', 'pricing', 'gallery', 'contacts'];
      const headerHeight = 80;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем при загрузке
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Высота зафиксированной шапки
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between px-[5px]">
        <div className="flex items-center">
          <img 
            src="https://cdn.poehali.dev/files/ff214173-f5f3-420d-a2ff-3a2cd9ac8ad0.png" 
            alt="Ритмы Гор" 
            className="h-20 w-auto sm:h-24 md:h-28 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <button onClick={() => handleScrollToSection('directions')} className={`transition-colors ${activeSection === 'directions' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>Направления</button>
          <button onClick={() => handleScrollToSection('schedule')} className={`transition-colors ${activeSection === 'schedule' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>Расписание</button>
          <button onClick={() => handleScrollToSection('pricing')} className={`transition-colors ${activeSection === 'pricing' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>Цены</button>
          <button onClick={() => handleScrollToSection('gallery')} className={`transition-colors ${activeSection === 'gallery' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>Галерея</button>
          <button onClick={() => handleScrollToSection('contacts')} className={`transition-colors ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>Контакты</button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => handleScrollToSection('contacts')}
            className="hidden sm:block text-sm px-3 py-2 sm:px-4 sm:py-2"
          >
            Записаться
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <nav className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleScrollToSection('directions')}
                className={`transition-colors py-2 border-b border-gray-100 text-left ${activeSection === 'directions' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                Направления
              </button>
              <button 
                onClick={() => handleScrollToSection('schedule')}
                className={`transition-colors py-2 border-b border-gray-100 text-left ${activeSection === 'schedule' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                Расписание
              </button>
              <button 
                onClick={() => handleScrollToSection('pricing')}
                className={`transition-colors py-2 border-b border-gray-100 text-left ${activeSection === 'pricing' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                Цены
              </button>
              <button 
                onClick={() => handleScrollToSection('gallery')}
                className={`transition-colors py-2 border-b border-gray-100 text-left ${activeSection === 'gallery' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                Галерея
              </button>
              <button 
                onClick={() => handleScrollToSection('contacts')}
                className={`transition-colors py-2 border-b border-gray-100 text-left ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                Контакты
              </button>
              <Button 
                onClick={() => handleScrollToSection('contacts')}
                className="w-full mt-4"
              >
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;