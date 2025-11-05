import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Frontend разработка',
      description: 'HTML, CSS, JavaScript, React - с нуля до профи',
      icon: 'Code',
      duration: '6 месяцев',
      price: '45 000 ₽',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend разработка',
      description: 'Python, Django, базы данных и API',
      icon: 'Database',
      duration: '7 месяцев',
      price: '50 000 ₽',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UX/UI дизайн',
      description: 'Figma, прототипирование, дизайн-системы',
      icon: 'Palette',
      duration: '5 месяцев',
      price: '40 000 ₽',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Fullstack разработка',
      description: 'Комплексная программа от А до Я',
      icon: 'Zap',
      duration: '10 месяцев',
      price: '75 000 ₽',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    { icon: 'Rocket', title: 'Современные технологии', desc: 'Актуальный стек технологий 2024' },
    { icon: 'Users', title: 'Опытные менторы', desc: 'Практикующие специалисты из IT-компаний' },
    { icon: 'Trophy', title: 'Гарантия трудоустройства', desc: 'Помощь в поиске работы после обучения' },
    { icon: 'Clock', title: 'Гибкий график', desc: 'Онлайн обучение в удобное время' }
  ];

  const testimonials = [
    { name: 'Алексей М.', role: 'Frontend Developer', text: 'Прошёл курс Frontend - за 3 месяца устроился в Яндекс! Невероятно крутая программа', initials: 'АМ' },
    { name: 'Мария С.', role: 'UX Designer', text: 'Преподаватели - профессионалы своего дела. Портфолио помогли собрать с нуля', initials: 'МС' },
    { name: 'Дмитрий К.', role: 'Fullstack Developer', text: 'Лучшие инвестиции в себя! Сейчас работаю на фрилансе, зарабатываю в 3 раза больше', initials: 'ДК' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-600">
              ПРОРЫВ
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Курсы', 'О нас', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black mb-6 text-purple-600 leading-tight">
              Твой прорыв в IT<br/>начинается здесь
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Современная IT-академия для тех, кто хочет изменить свою жизнь. 
              Получи востребованную профессию за 6-10 месяцев! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 shadow-2xl hover:shadow-purple-500/50 transition-all"
                onClick={() => scrollToSection('контакты')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => scrollToSection('курсы')}
              >
                Выбрать курс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="курсы" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-purple-600">
              Наши курсы
            </h2>
            <p className="text-xl text-gray-600">Выбери направление и стань востребованным специалистом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={course.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Clock" size={18} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{course.price}</div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90`}>
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-purple-600">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">Академия с результатами, которым можно доверять</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-purple-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-purple-600">
              Отзывы студентов
            </h2>
            <p className="text-xl text-gray-600">Истории успеха наших выпускников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500">
                      <AvatarFallback className="text-white font-bold">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-purple-600">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">Оставьте заявку и мы свяжемся с вами в течение часа</p>
          </div>
          <Card className="p-8 shadow-2xl border-2 border-purple-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" className="text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" className="text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" className="text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите, какой курс вас интересует..." className="text-base min-h-32" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-sm text-gray-600">info@proryv.ru</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-1">Телефон</h4>
              <p className="text-sm text-gray-600">+7 (495) 123-45-67</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-1">Адрес</h4>
              <p className="text-sm text-gray-600">Москва, ул. Ленина, 1</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ПРОРЫВ</h3>
              <p className="text-purple-200">IT-академия нового поколения</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Frontend</li>
                <li>Backend</li>
                <li>UX/UI</li>
                <li>Fullstack</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-purple-200">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Вакансии</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>© 2024 IT-Академия ПРОРЫВ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}