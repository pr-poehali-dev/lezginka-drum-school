const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ff214173-f5f3-420d-a2ff-3a2cd9ac8ad0.png" 
                alt="Ритмы Гор" 
                className="h-10 w-auto px-0 py-[3px] object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Ритмы Гор</h3>
                <p className="text-gray-400 text-sm">Школа кавказских танцев</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Изучайте традиционные кавказские танцы и барабаны с профессиональными мастерами
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Направления</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Лезгинка</li>
              <li>Кавказские барабаны</li>
              <li>Адыгейские танцы</li>
              <li>Осетинские танцы</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>г. Санкт-Петербург, ул. Ефимова, д. 4А   БЦ "МИР"</p>
              <p>+7 (921) 785-42-33</p>
              <p>ritmi-gor@yandex..ru</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ритмы Гор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;