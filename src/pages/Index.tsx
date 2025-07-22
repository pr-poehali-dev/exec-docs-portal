import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="HardHat" className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">СтройДокс</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Услуги</a>
              <a href="#workflow" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Документооборот</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Цифровое сопровождение 
                  <span className="text-blue-600"> исполнительной документации</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Инновационная платформа для управления документооборотом во всех направлениях строительства. 
                  Автоматизация процессов и контроль качества на новом уровне.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                  <Icon name="Rocket" className="mr-2 h-5 w-5" />
                  Начать работу
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-3">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Точность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/e67e1017-560d-40bb-bf2b-ebddd8a40045.jpg" 
                  alt="Современная строительная технология" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексное сопровождение документооборота на всех этапах строительства
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "FileText",
                title: "Проектная документация",
                description: "Цифровизация и контроль проектных решений с интеграцией BIM-технологий"
              },
              {
                icon: "CheckSquare",
                title: "Исполнительные схемы",
                description: "Автоматизированное создание и валидация исполнительной документации"
              },
              {
                icon: "Shield",
                title: "Контроль качества",
                description: "Системный контроль соответствия нормам и стандартам строительства"
              },
              {
                icon: "BarChart3",
                title: "Аналитика процессов",
                description: "Детальная аналитика хода работ и прогнозирование рисков"
              },
              {
                icon: "Users",
                title: "Координация команды",
                description: "Единое пространство для взаимодействия всех участников проекта"
              },
              {
                icon: "Cloud",
                title: "Облачное хранение",
                description: "Безопасное хранение и быстрый доступ к документам из любой точки"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon name={service.icon} className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Цифровой документооборот нового поколения
                </h2>
                <p className="text-lg text-gray-600">
                  Наша платформа автоматизирует все этапы работы с документацией, 
                  от создания до архивного хранения, обеспечивая полную прозрачность процессов.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Загрузка документов",
                    description: "Автоматическое распознавание и классификация документации"
                  },
                  {
                    step: "02", 
                    title: "Валидация данных",
                    description: "ИИ-проверка на соответствие стандартам и нормативам"
                  },
                  {
                    step: "03",
                    title: "Цифровой архив",
                    description: "Структурированное хранение с быстрым поиском"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/b6845492-6fee-4ee7-b17d-7f7b816594c3.jpg" 
                alt="Цифровой документооборот" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Мы — команда экспертов в области строительных технологий и цифровизации процессов. 
              Наша миссия — сделать документооборот в строительстве максимально эффективным и прозрачным.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Target",
                title: "Инновации",
                description: "Используем передовые технологии ИИ и машинного обучения для автоматизации процессов"
              },
              {
                icon: "Award",
                title: "Экспертиза", 
                description: "15+ лет опыта в строительной отрасли и глубокое понимание специфики документооборота"
              },
              {
                icon: "Zap",
                title: "Эффективность",
                description: "Сокращаем время обработки документов на 80% и исключаем человеческие ошибки"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon name={item.icon} className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение дня
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес офиса</h3>
                    <p className="text-gray-600">г. Москва, ул. Технологическая, 15</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@строй-докс.рф</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Часы работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input placeholder="example@company.ru" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." className="h-24" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="HardHat" className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">СтройДокс</span>
              </div>
              <p className="text-gray-400">
                Цифровое будущее строительного документооборота
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Проектная документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Исполнительные схемы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контроль качества</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Mail" className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройДокс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}