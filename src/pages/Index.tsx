import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activePlatform, setActivePlatform] = useState('all');

  const platforms = [
    { name: 'Goofish', logo: '🐟', desc: 'Топовые бренды по лучшим ценам', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dewu', logo: '🎯', desc: 'Оригинальные лимитки и коллаборации', color: 'from-purple-500 to-pink-500' },
    { name: 'Pinduoduo', logo: '🛍️', desc: 'Массовые закупки с мега-скидками', color: 'from-orange-500 to-red-500' },
  ];

  const recentOrders = [
    { item: 'Nike Dunk Low Panda', platform: 'Dewu', price: '8,500₽', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', status: 'В пути' },
    { item: 'The North Face Puffer', platform: 'Goofish', price: '12,000₽', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', status: 'Доставлен' },
    { item: 'Cargo pants Beige', platform: 'Pinduoduo', price: '3,200₽', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', status: 'В пути' },
    { item: 'Stussy Hoodie Black', platform: 'Goofish', price: '5,800₽', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', status: 'Доставлен' },
  ];

  const reviews = [
    { name: 'Максим', age: 22, text: 'Заказал кроссы New Balance 2002R — пришли за 2 недели, качество огонь! Дешевле чем в РФ в 2 раза', rating: 5, avatar: 'МК', platform: 'Dewu' },
    { name: 'Анна', age: 19, text: 'Взяла себе пуховик TNF, очень довольна! Ребята помогли с размером, все объяснили. Рекомендую', rating: 5, avatar: 'АН', platform: 'Goofish' },
    { name: 'Артём', age: 24, text: 'Уже третий раз заказываю через них. Быстро, надёжно, всегда на связи. Карго и худи топ!', rating: 5, avatar: 'АР', platform: 'Pinduoduo' },
    { name: 'София', age: 20, text: 'Заказывала Dunk Low — точь-в-точь как на фото! Упаковано идеально, пришло быстрее чем ожидала', rating: 5, avatar: 'СО', platform: 'Dewu' },
  ];

  const benefits = [
    { icon: 'Shield', title: 'Гарантия подлинности', desc: 'Работаем только с проверенными продавцами' },
    { icon: 'TrendingDown', title: 'Цены ниже на 40-60%', desc: 'Прямые поставки без посредников' },
    { icon: 'Package', title: 'Быстрая доставка', desc: '14-21 день до вашей двери' },
    { icon: 'HeadphonesIcon', title: 'Поддержка 24/7', desc: 'Всегда на связи в TG' },
  ];

  const filteredOrders = activePlatform === 'all' 
    ? recentOrders 
    : recentOrders.filter(order => order.platform === activePlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">☠️</span>
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-slate-900">POIZON DEALER</div>
                <div className="text-xs text-slate-500">Оригинал из Китая</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Обо мне</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Отзывы</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 shadow-lg">
              <Icon name="Send" size={16} className="mr-2" />
              Написать в TG
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6 text-sm px-4 py-2">
              🔥 Доставка из Китая за 14 дней
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight text-slate-900">
              Оригинальная одежда<br/>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                прямо из Китая
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Nike, Adidas, TNF, Stussy и другие топовые бренды.<br/>
              Дешевле в 2 раза, чем в России 🚀
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-10 h-14 text-base shadow-xl">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Выбрать товар
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-10 h-14 text-base">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает?
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200/50 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={24} className="text-blue-600" />
                </div>
                <h3 className="text-base font-bold mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800" 
                  alt="Fashion clothes" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={28} className="text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-3xl font-black">500+</div>
                    <div className="text-sm text-blue-100">Доставленных заказов</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">Обо мне</Badge>
              <h2 className="text-5xl font-black mb-6 text-slate-900">
                Привет! Я —<br/>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Poizon Dealer
                </span>
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  Занимаюсь поставками оригинальной одежды и обуви из Китая уже <strong className="text-slate-900">более 4 лет</strong>. 
                  За это время помог сотням ребят одеться в стильные вещи по адекватным ценам.
                </p>
                <p>
                  Работаю напрямую с крупнейшими площадками — <strong className="text-slate-900">Goofish, Dewu и Pinduoduo</strong>. 
                  Проверяю каждый товар перед отправкой, чтобы вы получили именно оригинал, а не фейк.
                </p>
                <p>
                  Всегда на связи в Telegram — отвечу на любые вопросы, помогу с выбором размера и отслежу вашу посылку до самой двери 📦
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">4+ года</div>
                  <div className="text-slate-600 text-sm">На рынке поставок</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-slate-600 text-sm">Всегда на связи</div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-10 h-14 shadow-xl">
                <Icon name="Send" size={20} className="mr-2" />
                Написать мне в TG
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-slate-900">Площадки для заказа</h2>
            <p className="text-lg text-slate-600">Работаю с крупнейшими маркетплейсами Китая</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="group overflow-hidden border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-32 bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                  <span className="text-7xl">{platform.logo}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-black mb-3 text-slate-900">{platform.name}</h3>
                  <p className="text-slate-600 mb-6">{platform.desc}</p>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                    Выбрать товар
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-slate-900">Последние заказы</h2>
            <p className="text-lg text-slate-600">Что заказывают мои клиенты прямо сейчас</p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <Button 
              onClick={() => setActivePlatform('all')}
              className={activePlatform === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-full'
              }
            >
              Все площадки
            </Button>
            {platforms.map((platform) => (
              <Button 
                key={platform.name}
                onClick={() => setActivePlatform(platform.name)}
                className={activePlatform === platform.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-full'
                }
              >
                {platform.logo} {platform.name}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredOrders.map((order, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1 border-slate-200">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={order.image} 
                    alt={order.item}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge className="bg-blue-100 text-blue-700 border-0 mb-3 text-xs">{order.platform}</Badge>
                  <h3 className="font-bold mb-2 text-slate-900">{order.item}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-blue-600">{order.price}</span>
                    <Badge variant="outline" className={order.status === 'Доставлен' ? 'border-green-500 text-green-700' : 'border-orange-500 text-orange-700'}>
                      {order.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-slate-900">Отзывы клиентов</h2>
            <p className="text-lg text-slate-600">Реальные истории моих покупателей</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500">
                    <AvatarFallback className="text-white font-bold text-sm">{review.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{review.name}, {review.age}</div>
                    <div className="text-xs text-slate-500">{review.platform}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Напишите мне в Telegram, отправьте ссылку на товар — и я сделаю всё за вас!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-base font-bold shadow-2xl">
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl">☠️</span>
                </div>
                <div>
                  <div className="text-lg font-black">POIZON DEALER</div>
                  <div className="text-xs text-slate-400">Оригинал из Китая</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">Поставки оригинальной одежды и обуви из Китая для молодёжи. Работаю с 2020 года.</p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Send" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MessageCircle" size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Площадки</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>🐟 Goofish</div>
                <div>🎯 Dewu</div>
                <div>🛍️ Pinduoduo</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Как заказать</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Доставка и оплата</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Гарантии</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">FAQ</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2024 Poizon Dealer. Оригинальные товары из Китая</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
