import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const directions = [
    {
      title: "Лезгинка",
      description: "Традиционный танец с огненным характером",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "2000₽"
    },
    {
      title: "Кавказские барабаны",
      description: "Ритмы гор в ваших руках",
      level: "Начинающие",
      duration: "1 час",
      price: "1800₽"
    },
    {
      title: "Адыгейские танцы",
      description: "Грациозность и благородство",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "2000₽"
    },
    {
      title: "Осетинские танцы",
      description: "Воинственность и сила гор",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "2000₽"
    }
  ];

  const teachers = [
    {
      name: "Магомед Алиев",
      specialty: "Лезгинка",
      experience: "15 лет",
      description: "Мастер традиционных кавказских танцев"
    },
    {
      name: "Заира Хасанова",
      specialty: "Женские танцы",
      experience: "12 лет",
      description: "Преподаватель адыгейских и осетинских танцев"
    },
    {
      name: "Руслан Дзагоев",
      specialty: "Барабаны",
      experience: "18 лет",
      description: "Мастер кавказских ударных инструментов"
    }
  ];

  const schedule = [
    { day: "Суббота", time: "11:00-12:30", class: "Семейная лезгинка" },
    { day: "Суббота", time: "15:00-16:30", class: "Лезгинка (все уровни)" },
    { day: "Воскресенье", time: "12:00-13:30", class: "Детская группа (6-12 лет)" },
    { day: "Воскресенье", time: "16:00-17:30", class: "Открытое занятие" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-0 py-5">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/40efe8f0-ec8d-4b42-9db1-53749b3cbbd8.png" 
              alt="Ритмы Гор" 
              className="h-10 w-auto sm:h-12 py-0.5 my-1.5 px-0 mx-1"
            />
            <div>
              <h1 className="sm:text-xl font-bold text-[#f97415] mx-0 py-1 text-xl">Ритмы Гор</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Школа лезгинки и кавказских барабанов</p>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <a href="#directions" className="text-gray-700 hover:text-primary transition-colors">Направления</a>
            <a href="#schedule" className="text-gray-700 hover:text-primary transition-colors">Расписание</a>
            <a href="#achievements" className="text-gray-700 hover:text-primary transition-colors">Достижения</a>
            <a href="#teachers" className="text-gray-700 hover:text-primary transition-colors">Преподаватели</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="text-sm px-3 py-2 sm:px-4 sm:py-2">Записаться</Button>
        </div>
      </header>

      {/* Hero Section */}
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
          <Icon name="Drumstick" size={40} className="text-white/30" />
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Направления обучения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Погрузитесь в мир кавказской культуры через танец и музыку
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {directions.map((direction, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in border-0 shadow-lg"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">{direction.title}</CardTitle>
                      <CardDescription className="text-white/90 text-lg">
                        {direction.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white text-primary">
                      {direction.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="text-gray-500" />
                        <span className="text-gray-700">{direction.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{direction.price}</div>
                    </div>
                    <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                      Записаться на занятие
                      <Icon name="ArrowRight" className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
            <p className="text-xl text-gray-600">Выберите удобное время для занятий</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow animate-fade-in border-l-4 border-primary"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-lg font-semibold text-gray-900 min-w-[120px]">
                      {item.day}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="text-primary" />
                      <span className="text-gray-700 font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-gray-900">{item.class}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 10 лет мы сохраняем и передаём традиции кавказской культуры
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Trophy" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Учеников обучено</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Calendar" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
              <p className="text-gray-600">Лет опыта</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-primary to-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Star" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">350+</div>
              <p className="text-gray-600">Выступлений проведено</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Award" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <p className="text-gray-600">Наград получено</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg" style={{animationDelay: '0.4s'}}>
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Icon name="Medal" className="mr-3" size={28} />
                  Международные конкурсы
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    Лауреаты международного фестиваля "Кавказские ритмы" (2022)
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    1-е место на фестивале народных танцев в Сочи (2023)
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    Дипломанты конкурса "Традиции гор" в Махачкале (2023)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg" style={{animationDelay: '0.5s'}}>
              <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Icon name="Users" className="mr-3" size={28} />
                  Социальные проекты
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    Бесплатные мастер-классы в детских домах
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    Выступления в домах престарелых
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-secondary mr-3" size={16} />
                    Участие в благотворительных концертах
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
            <p className="text-lg sm:text-xl text-gray-600">Мастера своего дела с многолетним опытом</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teachers.map((teacher, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-sm sm:text-base">
                    {teacher.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Award" className="text-secondary" size={16} />
                      <span className="text-gray-700 text-sm sm:text-base">{teacher.experience} опыта</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{teacher.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены</h2>
            <p className="text-xl text-gray-600">Доступные тарифы для всех желающих</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Разовое занятие</CardTitle>
                <div className="text-4xl font-bold text-primary">800₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Одно занятие</li>
                  <li>✓ Любое направление</li>
                  <li>✓ Пробное занятие</li>
                </ul>
                <Button className="w-full mt-6">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-white px-4 py-1">Популярно</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Абонемент на месяц</CardTitle>
                <div className="text-4xl font-bold text-primary">3500₽</div>
                <div className="text-sm text-gray-500">8 занятий</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ 8 занятий в месяц</li>
                  <li>✓ Любые направления</li>
                  <li></li>
                  <li>✓ Скидка 20%</li>
                </ul>
                <Button className="w-full mt-6">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Индивидуальное</CardTitle>
                <div className="text-4xl font-bold text-primary">2500₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Персональный тренер</li>
                  <li>✓ Гибкое расписание</li>
                  <li>✓ Быстрый прогресс</li>
                </ul>
                <Button className="w-full mt-6">Записаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
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
                  <p className="text-gray-600">@ritmi_gor_spb</p>
                  <p className="text-gray-600">Видео с занятий и выступлений</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 animate-fade-in">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/4adb2951-6007-4c1e-a141-e67e3ee0fd70.png" 
                  alt="Ритмы Гор" 
                  className="h-10 w-10 px-0 py-[3px] object-contain"
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
                <li>Мужская свадебная лезгинка</li>
                <li>Женская свадебная лезгинка</li>
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
            <p>© 2013 Ритмы Гор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;