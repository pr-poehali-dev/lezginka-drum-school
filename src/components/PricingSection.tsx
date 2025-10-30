import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены</h2>
          <p className="text-xl text-gray-600">Доступные тарифы для всех желающих</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Общий абонемент</CardTitle>
              <div className="text-4xl font-bold text-primary">5000₽</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li>✓ 8 занятий</li>
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
  );
};

export default PricingSection;