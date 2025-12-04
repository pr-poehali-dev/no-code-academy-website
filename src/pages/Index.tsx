import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      { name: 'Эспрессо', price: '120₽', desc: 'Классический крепкий кофе', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400' },
      { name: 'Капучино', price: '180₽', desc: 'С нежной молочной пенкой', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
      { name: 'Латте', price: '200₽', desc: 'Больше молока, нежный вкус', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400' },
      { name: 'Раф кофе', price: '220₽', desc: 'Со сливками и ванилью', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400' },
    ],
    drinks: [
      { name: 'Матча латте', price: '250₽', desc: 'Японский зеленый чай', image: 'https://images.unsplash.com/photo-1536013266624-479ab0c5e441?w=400' },
      { name: 'Какао', price: '150₽', desc: 'С маршмеллоу', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400' },
      { name: 'Смузи', price: '280₽', desc: 'Свежие фрукты и ягоды', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400' },
    ],
    desserts: [
      { name: 'Круассан', price: '120₽', desc: 'Французская выпечка', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
      { name: 'Чизкейк', price: '180₽', desc: 'Нежный творожный торт', image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400' },
      { name: 'Брауни', price: '150₽', desc: 'Шоколадный десерт', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' },
    ]
  };

  const features = [
    { icon: 'Coffee', title: 'Свежая обжарка', desc: 'Зерна обжариваем каждую неделю' },
    { icon: 'Clock', title: 'Быстро', desc: 'Ваш кофе готов за 3 минуты' },
    { icon: 'Heart', title: 'С любовью', desc: 'Каждый напиток - произведение искусства' },
    { icon: 'MapPin', title: 'Удобно', desc: 'В центре города, рядом с метро' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <Icon name="Coffee" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black text-amber-900">ПУНКТ 62</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#menu" className="hover:text-amber-600 transition-colors font-medium">Меню</a>
            <a href="#about" className="hover:text-amber-600 transition-colors font-medium">О нас</a>
            <a href="#contacts" className="hover:text-amber-600 transition-colors font-medium">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-amber-600 text-white mb-4 text-sm px-4 py-2">
                ☕ Работаем с 7:00 до 23:00
              </Badge>
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-amber-900 leading-tight">
                КОФЕ<br/>
                ПУНКТ<br/>
                <span className="text-orange-600">62</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                Место, где рождается<br/>идеальный кофе ☕
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-8 py-6 text-lg">
                  <Icon name="Menu" size={20} className="mr-2" />
                  Смотреть меню
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как добраться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800" 
                  alt="Кофейня" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                    <Icon name="Star" size={32} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-amber-900">4.9</div>
                    <div className="text-sm text-gray-600">Рейтинг на Яндекс</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-amber-100"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-amber-900">Наше меню</h2>
            <p className="text-xl text-gray-600">Выбирайте то, что вам по душе</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              onClick={() => setActiveCategory('coffee')}
              className={activeCategory === 'coffee' 
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-amber-50'
              }
            >
              <Icon name="Coffee" size={18} className="mr-2" />
              Кофе
            </Button>
            <Button 
              onClick={() => setActiveCategory('drinks')}
              className={activeCategory === 'drinks' 
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-amber-50'
              }
            >
              <Icon name="Wine" size={18} className="mr-2" />
              Напитки
            </Button>
            <Button 
              onClick={() => setActiveCategory('desserts')}
              className={activeCategory === 'desserts' 
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-amber-50'
              }
            >
              <Icon name="Cake" size={18} className="mr-2" />
              Десерты
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <Badge className="bg-amber-600 text-white">{item.price}</Badge>
                  </div>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" 
                alt="Наша кофейня" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6 text-amber-900">О нашей кофейне</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Пункт 62</strong> — это уютное место в самом центре города, где каждый гость становится частью нашей дружной кофейной семьи.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Мы используем зерна прямой обжарки, работаем на профессиональном оборудовании и создаем атмосферу, в которой хочется возвращаться снова и снова.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <div className="text-4xl font-black text-amber-600 mb-2">500+</div>
                  <div className="text-gray-700">Гостей в день</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <div className="text-4xl font-black text-amber-600 mb-2">3 года</div>
                  <div className="text-gray-700">На рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Coffee" size={24} />
                </div>
                <span className="text-3xl font-black">ПУНКТ 62</span>
              </div>
              <p className="text-amber-100">Кофейня с душой и характером</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-3 text-amber-100">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Рязань, ул. Ленина, 62</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (915) 593 51 73</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>Пн-Вс: 7:00 - 23:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MapPin" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-12 pt-8 text-center text-amber-100">
            <p>© 2024 Пункт 62. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
