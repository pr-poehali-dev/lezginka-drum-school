import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TeachersSection = () => {
  const teachers = [
    {
      name: "Али Атлигишиев",
      specialty: "Лезгинка",
      experience: "15 лет",
      description: "Мастер традиционных кавказских танцев"
    },
    {
      name: "Фатима Хасаева",
      specialty: "Женские танцы",
      experience: "12 лет",
      description: "Преподаватель адыгейских и осетинских танцев"
    },
    {
      name: "Ама Бахмудов",
      specialty: "Барабаны",
      experience: "18 лет",
      description: "Мастер кавказских ударных инструментов"
    }
  ];

  return (
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
                    <span className="text-gray-700 text-sm sm:text-base">30 лет опыта</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{teacher.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;