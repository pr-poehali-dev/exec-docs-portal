import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">СтройДокументооборот</span>
                <div className="text-xs text-gray-600">Цифровое сопровождение</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Главная</a>
              <a href="#directions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Направления</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Решения</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Процесс</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                  Инновационная платформа
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Цифровое 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> сопровождение</span>
                  <br />исполнительной документации
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Комплексная автоматизация документооборота для всех направлений строительства: 
                  от жилых комплексов до промышленных объектов и инфраструктуры.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg">
                  <Icon name="Rocket" className="mr-2 h-5 w-5" />
                  Попробовать платформу
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-4 text-lg hover:bg-gray-50">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Демонстрация возможностей
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600 font-medium">Объектов в работе</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15</div>
                  <div className="text-sm text-gray-600 font-medium">Направлений строительства</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600 font-medium">Точность обработки</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/c19e139f-e204-4b8d-a90a-ffc9e9a86893.jpg" 
                  alt="Современное строительство" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl transform rotate-2 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Directions Section */}
      <section id="directions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Направления строительства</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Обеспечиваем цифровое сопровождение исполнительной документации во всех сферах строительной индустрии
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "Home",
                title: "Жилое строительство",
                description: "Многоквартирные дома, коттеджные поселки, социальное жилье",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "Building2",
                title: "Коммерческая недвижимость",
                description: "Офисные центры, торговые комплексы, гостиницы",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "Factory",
                title: "Промышленное строительство",
                description: "Заводы, склады, производственные комплексы",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "Zap",
                title: "Энергетические объекты",
                description: "ТЭЦ, ГЭС, солнечные и ветровые электростанции",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: "BridgeIcon",
                title: "Транспортная инфраструктура",
                description: "Дороги, мосты, туннели, железнодорожные пути",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: "Droplets",
                title: "Водохозяйственные объекты",
                description: "Очистные сооружения, водопроводы, канализация",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: "Plane",
                title: "Аэропорты и порты",
                description: "Терминалы, взлетно-посадочные полосы, портовая инфраструктура",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "Hospital",
                title: "Социальная инфраструктура",
                description: "Больницы, школы, спортивные комплексы",
                color: "from-pink-500 to-rose-500"
              }
            ].map((direction, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${direction.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${direction.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={direction.icon} fallback="Building" className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {direction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-indigo-600 border-indigo-200 bg-indigo-50">
                  <Icon name="Cpu" className="mr-2 h-4 w-4" />
                  Технологические решения
                </Badge>
                <h2 className="text-5xl font-bold text-gray-900">
                  ИИ-платформа нового поколения
                </h2>
                <p className="text-lg text-gray-600">
                  Наша система использует передовые алгоритмы машинного обучения для автоматической 
                  обработки и валидации строительной документации любой сложности.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "Brain",
                    title: "Искусственный интеллект",
                    description: "Автоматическое распознавание типов документов и извлечение ключевой информации"
                  },
                  {
                    icon: "Eye",
                    title: "Компьютерное зрение",
                    description: "Анализ чертежей, схем и фотоматериалов с выявлением несоответствий"
                  },
                  {
                    icon: "Database",
                    title: "Централизованное хранилище",
                    description: "Единая база данных всех проектов с возможностью быстрого поиска"
                  },
                  {
                    icon: "Shield",
                    title: "Контроль качества",
                    description: "Многоуровневая система проверки соответствия нормативам"
                  }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={solution.icon} fallback="Cpu" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/aa4d2de2-cd72-48e2-85cb-804768848880.jpg" 
                alt="Технологическая платформа" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Как работает процесс</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Простой и эффективный workflow для любого типа строительных объектов
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Загрузка документации",
                  description: "Автоматическое распознавание и классификация всех типов строительных документов: проектная документация, исполнительные схемы, акты, протоколы",
                  icon: "Upload",
                  position: "left"
                },
                {
                  step: "02",
                  title: "ИИ-анализ и валидация",
                  description: "Интеллектуальная проверка документов на соответствие СНиП, ГОСТ, техническим регламентам. Выявление ошибок и несоответствий",
                  icon: "Search",
                  position: "right"
                },
                {
                  step: "03",
                  title: "Создание цифрового двойника",
                  description: "Формирование полной цифровой модели объекта с привязкой всей документации к конструктивным элементам",
                  icon: "Layers",
                  position: "left"
                },
                {
                  step: "04",
                  title: "Мониторинг и отчетность",
                  description: "Непрерывный контроль хода работ, автоматическое формирование отчетов для заказчика, подрядчика и надзорных органов",
                  icon: "BarChart3",
                  position: "right"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:w-1/2">
                    <Card className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                            <Icon name={item.icon} className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-6xl font-black text-gray-100">{item.step}</div>
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full items-center justify-center mx-8 z-10 shadow-xl">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  
                  <div className="flex-1 lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Результаты внедрения</h2>
            <p className="text-xl text-blue-100">Эффективность, которую видят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                value: "85%",
                label: "Сокращение времени на документооборот",
                icon: "Clock"
              },
              {
                value: "92%",
                label: "Снижение количества ошибок",
                icon: "CheckCircle"
              },
              {
                value: "70%",
                label: "Экономия бюджета проекта",
                icon: "TrendingUp"
              },
              {
                value: "99%",
                label: "Соответствие требованиям",
                icon: "Award"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Начните цифровую трансформацию</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нашими экспертами для оценки вашего проекта и демонстрации возможностей платформы
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: "MapPin",
                    title: "Головной офис",
                    content: "г. Москва, Деловой центр \"Москва-Сити\"\nБашня \"Федерация\", этаж 42"
                  },
                  {
                    icon: "Phone", 
                    title: "Горячая линия",
                    content: "+7 (495) 123-45-67\n+7 (800) 555-01-02"
                  },
                  {
                    icon: "Mail",
                    title: "Электронная почта",
                    content: "info@строй-документооборот.рф\nsupport@строй-документооборот.рф"
                  },
                  {
                    icon: "Clock",
                    title: "Режим работы",
                    content: "Пн-Пт: 8:00 - 20:00\nСб: 10:00 - 16:00\nВс: выходной"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Получить консультацию</h3>
                  <p className="text-blue-100">Заполните форму, и мы свяжемся с вами в течение 30 минут</p>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Имя и фамилия</label>
                      <Input placeholder="Иван Петров" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Должность</label>
                      <Input placeholder="Главный инженер" className="h-12" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Компания</label>
                      <Input placeholder="ООО \"СтройТех\"" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Направление строительства</label>
                      <select className="w-full h-12 px-3 border border-gray-300 rounded-lg">
                        <option>Выберите направление</option>
                        <option>Жилое строительство</option>
                        <option>Коммерческая недвижимость</option>
                        <option>Промышленное строительство</option>
                        <option>Инфраструктурные объекты</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Email</label>
                      <Input placeholder="example@company.ru" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Описание проекта</label>
                    <Textarea placeholder="Расскажите о специфике вашего проекта, объемах документооборота, текущих проблемах..." className="h-32" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 text-lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Icon name="Building2" className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">СтройДокументооборот</span>
                  <div className="text-sm text-gray-400">Цифровое будущее строительства</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ведущий поставщик решений для цифровизации документооборота в строительной отрасли. 
                Помогаем компаниям повысить эффективность и качество управления проектами.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Mail" className="h-6 w-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Phone" className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Направления</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Жилое строительство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Промышленные объекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Инфраструктура</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Энергетика</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Решения</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">ИИ-платформа</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мобильное приложение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API интеграции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консалтинг</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Поддержка</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 СтройДокументооборот. Все права защищены.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}