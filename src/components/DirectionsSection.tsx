import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DirectionsSection = () => {
  const directions = [
    {
      title: "Лезгинка",
      description: "Традиционный танец с огненным характером",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "3500₽/мес"
    },
    {
      title: "Кавказские барабаны",
      description: "Ритмы гор в ваших руках",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "3500₽/мес"
    },
    {
      title: "Свадебная лезгинка",
      description: "Грациозность и благородство",
      level: "Начинающие",
      duration: "1 час",
      price: "3500₽/мес"
    },
    {
      title: "Индивидуальные занятия",
      description: "Воинственность и сила гор",
      level: "Начинающие",
      duration: "1.5 часа",
      price: "2500₽/час"
    }
  ];

  return (
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
  );
};

export default DirectionsSection;