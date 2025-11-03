import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-lg sm:text-xl text-gray-600">Приходите к нам или свяжитесь удобным способом</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in">
              <div className="bg-primary text-white p-2 sm:p-3 rounded-lg">
                <Icon name="MapPin" size={20} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-sm sm:text-base text-gray-600">г. Санкт-Петербург, ул. Ефимова, д. 4А   БЦ "МИР"</p>
                <p className="text-sm sm:text-base text-gray-600">Метро "Садовая / Сенная / Спасская", 2 минуты пешком</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4 animate-fade-in">
              <div className="bg-primary text-white p-2 sm:p-3 rounded-lg">
                <Icon name="Phone" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (921) 785-42-33</p>
                <p className="text-gray-600">Ежедневно с 10:00 до 22:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Icon name="Mail" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">ritmi-gor@yandex.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Icon name="Instagram" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Соцсети</h3>
                <div className="space-y-2">
                  <a 
                    href="https://instagram.com/ritmi_gor_spb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <Icon name="Instagram" size={16} />
                    Instagram: @ritmi_gor_spb
                  </a>
                  <a 
                    href="https://vk.com/ritmi_gor_spb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <Icon name="Globe" size={16} />
                    ВКонтакте: ritmi_gor_spb
                  </a>
                </div>
                <p className="text-gray-600 mt-2">Видео с занятий и выступлений</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Записаться на занятие</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Направление</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Выберите направление</option>
                    <option>Лезгинка</option>
                    <option>Кавказские барабаны</option>
                    <option>Адыгейские танцы</option>
                    <option>Осетинские танцы</option>
                  </select>
                </div>
                <Button className="w-full py-3 text-lg">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=30.322485%2C59.925693&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1MDE4MRJf0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQu9C40YbQsCDQldGE0LjQvNC-0LLQsCwgNNCQIgoNgmVCQhV8R1VC&z=17&pt=30.322485,59.925693,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  style={{ border: 0 }}
                  title="Карта расположения школы Ритмы Гор"
                ></iframe>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('https://yandex.ru/maps/?rtext=~59.925693,30.322485', '_blank')}
                >
                  <Icon name="Navigation" className="mr-2" size={18} />
                  Яндекс Навигатор
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('https://maps.google.com/?q=59.925693,30.322485', '_blank')}
                >
                  <Icon name="Navigation" className="mr-2" size={18} />
                  Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;