import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    { name: 'Эспрессо', price: '120₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600' },
    { name: 'Капучино', price: '180₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600' },
    { name: 'Латте', price: '200₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600' },
    { name: 'Флэт Уайт', price: '210₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600' },
    { name: 'Раф кофе', price: '220₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600' },
    { name: 'Американо', price: '140₽', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600' },
    { name: 'Матча латте', price: '250₽', category: 'drinks', image: 'https://images.unsplash.com/photo-1536013266624-479ab0c5e441?w=600' },
    { name: 'Какао', price: '150₽', category: 'drinks', image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=600' },
    { name: 'Смузи боул', price: '320₽', category: 'food', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600' },
    { name: 'Круассан', price: '120₽', category: 'food', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600' },
    { name: 'Чизкейк', price: '180₽', category: 'food', image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600' },
    { name: 'Панини', price: '240₽', category: 'food', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-2xl font-black text-neutral-950">62</span>
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">ПУНКТ 62</div>
                <div className="text-xs text-neutral-400">coffee bar</div>
              </div>
            </div>
            <Button className="bg-white text-neutral-950 hover:bg-neutral-100 font-semibold rounded-full px-6">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6 text-sm px-4 py-2">
              ☕ 7:00 — 23:00 каждый день
            </Badge>
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none">
              Кофе для<br/>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                настоящих<br/>
                ценителей
              </span>
            </h1>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
              Авторские напитки, свежая выпечка и атмосфера уюта в самом центре города
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-neutral-950 font-bold rounded-full px-8 h-14 text-base">
                Смотреть меню
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-700 text-white hover:bg-neutral-900 rounded-full px-8 h-14 text-base">
                <Icon name="MapPin" size={20} className="mr-2" />
                Ленина, 62
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="bg-neutral-900 border-neutral-800 p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Icon name="Coffee" size={24} className="text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Свежая обжарка</h3>
              <p className="text-neutral-400 text-sm">Обжариваем зерна каждую неделю</p>
            </Card>
            <Card className="bg-neutral-900 border-neutral-800 p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Быстро готовим</h3>
              <p className="text-neutral-400 text-sm">Ваш напиток за 3 минуты</p>
            </Card>
            <Card className="bg-neutral-900 border-neutral-800 p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Icon name="Award" size={24} className="text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Рейтинг 4.9</h3>
              <p className="text-neutral-400 text-sm">500+ отзывов на Яндекс</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">Меню</h2>
            <p className="text-neutral-400">Выберите категорию</p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <Button 
              onClick={() => setActiveCategory('all')}
              className={activeCategory === 'all'
                ? 'bg-amber-500 text-neutral-950 hover:bg-amber-600 rounded-full'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 rounded-full'
              }
            >
              Все
            </Button>
            <Button 
              onClick={() => setActiveCategory('coffee')}
              className={activeCategory === 'coffee'
                ? 'bg-amber-500 text-neutral-950 hover:bg-amber-600 rounded-full'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 rounded-full'
              }
            >
              <Icon name="Coffee" size={16} className="mr-2" />
              Кофе
            </Button>
            <Button 
              onClick={() => setActiveCategory('drinks')}
              className={activeCategory === 'drinks'
                ? 'bg-amber-500 text-neutral-950 hover:bg-amber-600 rounded-full'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 rounded-full'
              }
            >
              <Icon name="Wine" size={16} className="mr-2" />
              Напитки
            </Button>
            <Button 
              onClick={() => setActiveCategory('food')}
              className={activeCategory === 'food'
                ? 'bg-amber-500 text-neutral-950 hover:bg-amber-600 rounded-full'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 rounded-full'
              }
            >
              <Icon name="Cake" size={16} className="mr-2" />
              Еда
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-amber-500/50 transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-amber-500 font-bold text-lg">{item.price}</span>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold rounded-full">
                    Добавить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-neutral-950 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">О нас</Badge>
              <h2 className="text-5xl font-black mb-6">Пункт 62 —<br/>это особое место</h2>
              <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                Мы создали пространство, где каждый гость чувствует себя как дома. Используем только отборные зерна арабики, профессиональное оборудование и главное — вкладываем душу в каждую чашку.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-neutral-400">Гостей каждый день</div>
                </div>
                <div>
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">3 года</div>
                  <div className="text-neutral-400">Работаем для вас</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" alt="Coffee" className="rounded-2xl w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400" alt="Coffee bar" className="rounded-2xl w-full h-80 object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400" alt="Interior" className="rounded-2xl w-full h-80 object-cover" />
                <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400" alt="Coffee cup" className="rounded-2xl w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-2xl font-black text-neutral-950">62</span>
                </div>
                <div>
                  <div className="text-xl font-black">ПУНКТ 62</div>
                  <div className="text-xs text-neutral-400">coffee bar</div>
                </div>
              </div>
              <p className="text-neutral-400 mb-6">Кофейня с характером в самом центре города</p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="MessageCircle" size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Phone" size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-neutral-400 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span>г. Рязань<br/>ул. Ленина, 62</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="flex-shrink-0" />
                  <span>+7 (915) 593 51 73</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="flex-shrink-0" />
                  <span>7:00 — 23:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-neutral-400 text-sm">
                <div className="hover:text-amber-500 cursor-pointer transition-colors">Меню</div>
                <div className="hover:text-amber-500 cursor-pointer transition-colors">О кофейне</div>
                <div className="hover:text-amber-500 cursor-pointer transition-colors">Доставка</div>
                <div className="hover:text-amber-500 cursor-pointer transition-colors">Контакты</div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
            <p>© 2024 Пункт 62. Создано с любовью к кофе</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
