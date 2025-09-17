import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="https://cdn.poehali.dev/files/ff214173-f5f3-420d-a2ff-3a2cd9ac8ad0.png" 
            alt="Ритмы Гор" 
            className="h-14 w-auto sm:h-14 sm:w-auto px-0 mx-0 my-0 py-0"
          />
          <div>
            <h1 className="sm:text-xl text-[#f97415] px-0 mx-0 my-0 py-0 font-bold text-left text-xs"></h1>
            <p className="sm:text-sm text-gray-600 hidden sm:block text-xs px-0 py-0">Школа лезгинки и 
кавказских барабанов</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <button onClick={() => handleScrollToSection('directions')} className="text-gray-700 hover:text-primary transition-colors">Направления</button>
          <button onClick={() => handleScrollToSection('schedule')} className="text-gray-700 hover:text-primary transition-colors">Расписание</button>
          <button onClick={() => handleScrollToSection('teachers')} className="text-gray-700 hover:text-primary transition-colors">Преподаватели</button>
          <button onClick={() => handleScrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">Галерея</button>
          <button onClick={() => handleScrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden sm:block text-sm px-3 py-2 sm:px-4 sm:py-2">Записаться</Button>
          
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
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 text-left"
              >
                Направления
              </button>
              <button 
                onClick={() => handleScrollToSection('schedule')}
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 text-left"
              >
                Расписание
              </button>
              <button 
                onClick={() => handleScrollToSection('teachers')}
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 text-left"
              >
                Преподаватели
              </button>
              <button 
                onClick={() => handleScrollToSection('gallery')}
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 text-left"
              >
                Галерея
              </button>
              <button 
                onClick={() => handleScrollToSection('contacts')}
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100 text-left"
              >
                Контакты
              </button>
              <Button 
                onClick={closeMenu}
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