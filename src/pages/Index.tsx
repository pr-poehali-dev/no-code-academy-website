import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const advantages = [
    'Кампус в центре города',
    'Для взрослых и детей',
    'Скидки от курсов до 25%',
    'Дипломная гос. обучения'
  ];

  const promoSlides = [
    {
      title: 'Защита от троек в школе',
      description: 'При покупке курса для детей дарим месяц подписки на онлайн-занятия, чтобы ребенок лучше учился в школе',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/ff8a7104-aa22-4d47-bbee-b379e8bdad7c.jpg'
    },
    {
      title: 'Бесплатный пробный урок',
      description: 'Запишитесь на бесплатное занятие и оцените качество обучения',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/5bee148c-3897-4a7d-884d-c169020e626c.jpg'
    },
    {
      title: 'Скидка на второй курс',
      description: 'Оплатите два курса сразу и получите 20% скидку на второй',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/ea68873e-52c9-4ac8-ba0f-39b0ab102015.jpg'
    },
    {
      title: 'Гарантия возврата',
      description: 'Если курс не понравился в первую неделю - вернем деньги',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/f3ffa079-461e-4fc4-936c-acbf4c02c69d.jpg'
    },
    {
      title: 'Сертификат UNESCO',
      description: 'По окончании курса получите международный сертификат',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/565e2b2d-7efd-4e08-9e26-3d825e4741d6.jpg'
    }
  ];

  const features = [
    { icon: 'Rocket', title: 'Современные технологии', desc: 'Актуальный стек технологий 2024 года' },
    { icon: 'Users', title: 'Опытные менторы', desc: 'Практикующие специалисты из IT-компаний' },
    { icon: 'Trophy', title: 'Гарантия трудоустройства', desc: 'Помощь в поиске работы после обучения' },
    { icon: 'Clock', title: 'Гибкий график', desc: 'Онлайн и офлайн обучение в удобное время' }
  ];

  const testimonials = [
    { name: 'Алексей М.', role: 'Frontend Developer', text: 'Прошёл курс Frontend - за 3 месяца устроился в Яндекс! Невероятно крутая программа', initials: 'АМ' },
    { name: 'Мария С.', role: 'UX Designer', text: 'Преподаватели - профессионалы своего дела. Портфолио помогли собрать с нуля', initials: 'МС' },
    { name: 'Дмитрий К.', role: 'Fullstack Developer', text: 'Лучшие инвестиции в себя! Сейчас работаю на фрилансе, зарабатываю в 3 раза больше', initials: 'ДК' }
  ];

  const courses = [
    {
      title: 'Python для начинающих',
      duration: '3 месяца',
      level: 'Начальный',
      price: '18 900 ₽',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/ea68873e-52c9-4ac8-ba0f-39b0ab102015.jpg'
    },
    {
      title: 'Web-разработка',
      duration: '6 месяцев',
      level: 'Средний',
      price: '35 000 ₽',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/f3ffa079-461e-4fc4-936c-acbf4c02c69d.jpg'
    },
    {
      title: 'Создание игр',
      duration: '4 месяца',
      level: 'Для детей',
      price: '22 500 ₽',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/5bee148c-3897-4a7d-884d-c169020e626c.jpg'
    },
    {
      title: 'Data Science',
      duration: '8 месяцев',
      level: 'Продвинутый',
      price: '45 000 ₽',
      image: 'https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/565e2b2d-7efd-4e08-9e26-3d825e4741d6.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="MonitorPlay" size={32} className="text-primary" />
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
                Детям
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
                Подросткам
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
                Взрослым
              </button>
              <Badge className="bg-primary hover:bg-primary/90 text-white">Ryazan</Badge>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+79155935173" className="text-sm font-semibold text-primary hover:underline">
                +7 (915) 593 51 73
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-primary leading-tight">
                РОССИЙСКАЯ<br/>
                IT ШКОЛА<br/>
                ПРОРЫВ
              </h1>
              <div className="bg-primary/90 text-white p-6 rounded-3xl mb-8 max-w-lg shadow-xl">
                <p className="text-lg leading-relaxed">
                  Крупнейшая экосистема очного и онлайн-образования для всех возрастов, 
                  признанная ЮНЕСКО
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {advantages.map((adv, index) => (
                  <Button 
                    key={index} 
                    className="bg-secondary hover:bg-secondary/90 text-white h-auto py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {adv}
                  </Button>
                ))}
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 py-6 text-base font-bold rounded-xl shadow-2xl hover:shadow-secondary/50 transition-all hover:scale-105">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-shadow">
                <img 
                  src="https://cdn.poehali.dev/projects/d258da97-1ae0-4f25-9b98-84399f4c550e/files/565e2b2d-7efd-4e08-9e26-3d825e4741d6.jpg" 
                  alt="Студенты IT школы" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-white text-accent text-base px-6 py-3 mb-4 font-bold shadow-lg animate-pulse">
              🔥 только до 31.12
            </Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={promoSlides[currentSlide].image}
                alt={promoSlides[currentSlide].title}
                className="w-full h-80 object-cover transition-all duration-500"
              />
            </div>
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">{promoSlides[currentSlide].title}</h3>
              <p className="text-lg mb-6 text-purple-100">{promoSlides[currentSlide].description}</p>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent mb-8 shadow-lg transition-all hover:scale-105"
              >
                ВЫБРАТЬ КУРС
              </Button>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={prevSlide}
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <span className="text-white font-medium text-lg">
                  {currentSlide + 1} / {promoSlides.length}
                </span>
                <Button 
                  onClick={nextSlide}
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            самые популярные
          </h2>
          <h3 className="text-3xl font-bold mb-12 text-gray-700">
            КУРСЫ АКАДЕМИИ ПРОРЫВ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-2 mt-2">
                    <span className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                    <Badge variant="secondary" className="w-fit">{course.level}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">
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

      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">
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

      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Остались вопросы?</h2>
            <p className="text-xl text-gray-600">Оставьте заявку и мы перезвоним в течение 15 минут</p>
          </div>
          <Card className="p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван" className="text-base" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="text-base" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" className="text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Интересующий курс</label>
                <Input placeholder="Например: Python для начинающих" className="text-base" />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IT ШКОЛА ПРОРЫВ</h3>
              <p className="text-purple-200">Образование будущего уже сегодня</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Обучение</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer">Для детей</li>
                <li className="hover:text-white cursor-pointer">Для подростков</li>
                <li className="hover:text-white cursor-pointer">Для взрослых</li>
                <li className="hover:text-white cursor-pointer">Корпоративное</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer">Наша команда</li>
                <li className="hover:text-white cursor-pointer">Отзывы</li>
                <li className="hover:text-white cursor-pointer">Вакансии</li>
                <li className="hover:text-white cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-purple-200">
                <li>г. Рязань</li>
                <li>+7 (915) 593 51 73</li>
                <li>info@proryv-school.ru</li>
              </ul>
              <div className="flex gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>© 2024 IT-Школа ПРОРЫВ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}