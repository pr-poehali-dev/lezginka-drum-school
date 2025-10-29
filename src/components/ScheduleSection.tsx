import Icon from '@/components/ui/icon';

const ScheduleSection = () => {
  const schedule = [
    { day: "Суббота", time: "12:00-13:30", class: "Кавказские барабаны - начинающая группа" },
    { day: "Суббота", time: "13:30-15:00", class: "Кавказские барабаны - концертный состав" },
    { day: "Суббота", time: "15:00-16:30", class: "Лезгинка - детская группа" },
    { day: "Суббота", time: "16:30-18:00", class: "Лезгинка - взрослая группа" },
    { day: "Воскресенье", time: "12:00-13:30", class: "Кавказские барабаны - начинающая группа" },
    { day: "Воскресенье", time: "13:30-15:00", class: "Кавказские барабаны - концертный состав" },
    { day: "Воскресенье", time: "15:00-16:30", class: "Лезгинка - детская группа" },
    { day: "Воскресенье", time: "16:30-18:00", class: "Лезгинка - взрослая группа" }
  ];

  return (
    <section id="schedule" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
          <p className="text-lg sm:text-xl text-gray-600">Выберите удобное время для занятий</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3 sm:gap-4">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition-shadow animate-fade-in border-l-4 border-primary space-y-3 sm:space-y-0"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <div className="text-base sm:text-lg font-semibold text-gray-900 sm:min-w-[120px]">
                    {item.day}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" className="text-primary" size={16} />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item.time}</span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-base sm:text-lg font-medium text-gray-900">{item.class}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;