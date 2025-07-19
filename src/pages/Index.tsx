import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-warm-brown/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="w-8 h-8 text-warm-peach" />
              <h1 className="text-2xl font-montserrat font-semibold text-warm-brown">Анна Петрова</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="font-open-sans text-warm-brown hover:text-warm-peach transition-colors">Обо мне</a>
              <a href="#services" className="font-open-sans text-warm-brown hover:text-warm-peach transition-colors">Услуги</a>
              <a href="#approaches" className="font-open-sans text-warm-brown hover:text-warm-peach transition-colors">Подходы</a>
              <a href="#reviews" className="font-open-sans text-warm-brown hover:text-warm-peach transition-colors">Отзывы</a>
              <a href="#contact" className="font-open-sans text-warm-brown hover:text-warm-peach transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-cream to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-montserrat font-bold text-warm-brown leading-tight">
                Создаем гармонию
                <span className="text-warm-peach block">в вашей жизни</span>
              </h2>
              <p className="text-xl font-open-sans text-warm-brown/80 leading-relaxed">
                Профессиональная психологическая поддержка в уютной и доверительной атмосфере. 
                Помогаю найти путь к внутреннему балансу и счастью.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-warm-peach hover:bg-warm-light text-white font-montserrat font-medium px-8 py-3 rounded-full">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-warm-peach text-warm-peach hover:bg-warm-peach hover:text-white font-montserrat font-medium px-8 py-3 rounded-full">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/dee25793-2a50-4ddc-98d8-f847f25f563e.jpg" 
                  alt="Уютный кабинет психолога"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-montserrat font-bold text-warm-brown mb-8">Обо мне</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/img/a8854bf6-31c5-4812-9ff5-8aee2dbb34e2.jpg"
                    alt="Анна Петрова, психолог"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-left space-y-4">
                <p className="text-lg font-open-sans text-warm-brown/80 leading-relaxed">
                  Меня зовут Анна Петрова, и я практикующий психолог с более чем 8-летним опытом работы. 
                  Моя специализация — работа с тревожными расстройствами, семейными кризисами и личностным ростом.
                </p>
                <p className="text-lg font-open-sans text-warm-brown/80 leading-relaxed">
                  Я верю, что каждый человек обладает внутренними ресурсами для преодоления трудностей. 
                  Моя задача — помочь вам их обнаружить и эффективно использовать.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="GraduationCap" className="w-5 h-5 text-warm-peach" />
                    <span className="font-open-sans text-warm-brown">МГУ, факультет психологии</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" className="w-5 h-5 text-warm-peach" />
                    <span className="font-open-sans text-warm-brown">8+ лет практики</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-warm-cream/50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-bold text-warm-brown text-center mb-12">Услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "MessageCircle",
                title: "Индивидуальная терапия",
                description: "Персональные сессии для работы с личными проблемами, тревогой, депрессией и самооценкой",
                price: "от 3000 ₽"
              },
              {
                icon: "Users",
                title: "Семейная терапия",
                description: "Работа с парами и семьями для восстановления гармонии в отношениях",
                price: "от 4500 ₽"
              },
              {
                icon: "Lightbulb",
                title: "Групповые сессии",
                description: "Тематические группы поддержки и личностного роста",
                price: "от 1500 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-warm-brown/10">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-warm-peach/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="w-8 h-8 text-warm-peach" />
                  </div>
                  <CardTitle className="font-montserrat text-warm-brown">{service.title}</CardTitle>
                  <CardDescription className="font-open-sans text-warm-brown/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-montserrat font-semibold text-warm-peach mb-4">{service.price}</div>
                  <Button className="w-full bg-warm-peach hover:bg-warm-light text-white font-montserrat rounded-full">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section id="approaches" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-bold text-warm-brown text-center mb-12">Мои подходы</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Compass",
                title: "Когнитивно-поведенческая терапия",
                description: "Помогаю изменить деструктивные мысли и поведенческие паттерны"
              },
              {
                icon: "Flower",
                title: "Гуманистический подход",
                description: "Фокусируемся на ваших сильных сторонах и потенциале роста"
              },
              {
                icon: "Puzzle",
                title: "Системная терапия",
                description: "Рассматриваем проблемы в контексте отношений и семейных систем"
              },
              {
                icon: "Zap",
                title: "Краткосрочная терапия",
                description: "Эффективные техники для быстрого достижения результатов"
              }
            ].map((approach, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 rounded-lg hover:bg-warm-cream/30 transition-colors">
                <div className="w-12 h-12 bg-warm-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={approach.icon as any} className="w-6 h-6 text-warm-peach" />
                </div>
                <div>
                  <h4 className="text-xl font-montserrat font-semibold text-warm-brown mb-2">{approach.title}</h4>
                  <p className="font-open-sans text-warm-brown/80 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-warm-cream/50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-bold text-warm-brown text-center mb-12">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Мария К.",
                review: "Анна помогла мне справиться с тревожностью. Теперь я чувствую себя намного увереннее и спокойнее.",
                rating: 5
              },
              {
                name: "Алексей В.",
                review: "Семейная терапия с Анной спасла наш брак. Мы научились лучше понимать друг друга.",
                rating: 5
              },
              {
                name: "Екатерина М.",
                review: "Профессиональный подход и искреннее желание помочь. Рекомендую всем, кто ищет поддержку.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-open-sans text-warm-brown/80 mb-4 italic leading-relaxed">"{review.review}"</p>
                  <p className="font-montserrat font-semibold text-warm-brown">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-montserrat font-bold text-warm-brown text-center mb-12">Запись на консультацию</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h4 className="text-2xl font-montserrat font-semibold text-warm-brown mb-6">Выберите удобную дату</h4>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border border-warm-brown/20"
              />
            </div>
            <div>
              <h4 className="text-2xl font-montserrat font-semibold text-warm-brown mb-6">Форма записи</h4>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="border-warm-brown/30 focus:border-warm-peach"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="border-warm-brown/30 focus:border-warm-peach"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="border-warm-brown/30 focus:border-warm-peach"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Кратко опишите ваш запрос (необязательно)" 
                    className="border-warm-brown/30 focus:border-warm-peach min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-warm-peach hover:bg-warm-light text-white font-montserrat font-medium py-3 rounded-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-warm-brown text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Icon name="MapPin" className="w-8 h-8" />
              <h5 className="font-montserrat font-semibold">Адрес</h5>
              <p className="font-open-sans">г. Москва, ул. Тверская, 12, офис 301</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Icon name="Phone" className="w-8 h-8" />
              <h5 className="font-montserrat font-semibold">Телефон</h5>
              <p className="font-open-sans">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Icon name="Mail" className="w-8 h-8" />
              <h5 className="font-montserrat font-semibold">Email</h5>
              <p className="font-open-sans">anna.petrova@psychology.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown/90 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-open-sans">&copy; 2024 Анна Петрова, психолог. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;