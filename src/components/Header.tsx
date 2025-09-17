import { Button } from '@/components/ui/button';

const Header = () => {
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
            <h1 className="sm:text-xl text-[#f97415] px-0 mx-0 my-0 py-0 font-bold text-left text-lg">Ритмы Гор</h1>
            <p className="sm:text-sm text-gray-600 hidden sm:block text-xs px-0 py-0">Школа лезгинки и 
кавказских барабанов</p>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-8">
          <a href="#directions" className="text-gray-700 hover:text-primary transition-colors">Направления</a>
          <a href="#schedule" className="text-gray-700 hover:text-primary transition-colors">Расписание</a>
          <a href="#teachers" className="text-gray-700 hover:text-primary transition-colors">Преподаватели</a>
          <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Галерея</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button className="text-sm px-3 py-2 sm:px-4 sm:py-2">Записаться</Button>
      </div>
    </header>
  );
};

export default Header;