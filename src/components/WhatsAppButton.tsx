import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79217854233';
  const message = 'Здравствуйте! Хочу записаться на занятия в "Ритмы гор"';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
};

export default WhatsAppButton;
