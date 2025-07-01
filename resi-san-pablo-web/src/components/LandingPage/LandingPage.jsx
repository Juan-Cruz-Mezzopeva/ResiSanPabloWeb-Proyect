import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Users, Mail, Heart, Home } from 'lucide-react';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      title: "Educación Innovadora",
      description: "Transformamos la manera de aprender con metodologías modernas y tecnología de vanguardia."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      title: "Comunidad Estudiantil",
      description: "Construimos una red sólida de estudiantes comprometidos con el cambio y la excelencia académica."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop",
      title: "Proyectos Colaborativos",
      description: "Desarrollamos iniciativas que impactan positivamente en nuestra comunidad educativa."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      title: "Futuro Prometedor",
      description: "Preparamos a los estudiantes para los desafíos del mañana con herramientas actuales."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">EduProyecto</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Estudiantado
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contáctanos
                </button>
                <button 
                  onClick={() => scrollToSection('help')}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Ayúdanos
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Estudiantado
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contáctanos
                </button>
                <button 
                  onClick={() => scrollToSection('help')}
                  className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Ayúdanos
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transformando la Educación
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Un proyecto estudiantil dedicado a crear nuevas oportunidades de aprendizaje 
              y crecimiento para nuestra comunidad educativa.
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Estudiantado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una comunidad vibrante de estudiantes comprometidos con la excelencia académica y el impacto social.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div 
              className="h-96 bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop')`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Unidos por la Educación</h3>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Creemos en el poder transformador de la educación y trabajamos juntos para 
                    crear oportunidades que marquen la diferencia en la vida de cada estudiante.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm">Estudiantes Activos</div>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm">Proyectos Realizados</div>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-sm">Carreras Representadas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
            <p className="text-xl text-gray-600">
              Explora las iniciativas que están transformando nuestra comunidad educativa
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselData.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-4">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">{item.description}</p>
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 self-start">
                            Saber Más
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">
              ¿Tienes alguna pregunta o quieres unirte a nuestro proyecto?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">contacto@eduproyecto.com</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">Universidad Nacional de Córdoba</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">¡Únete a nosotros!</h4>
                <p className="text-blue-700">
                  Estamos siempre buscando estudiantes motivados que quieran hacer la diferencia 
                  en la educación. ¡Contáctanos para saber cómo puedes participar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ayúdanos a Crecer</h2>
            <p className="text-xl text-gray-600">
              Tu apoyo hace posible que sigamos transformando la educación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dona</h3>
              <p className="text-gray-600 mb-6">
                Cada contribución, por pequeña que sea, nos ayuda a mantener nuestros proyectos activos.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200">
                Donar Ahora
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voluntariado</h3>
              <p className="text-gray-600 mb-6">
                Únete como voluntario y ayuda directamente en nuestras actividades y eventos.
              </p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
                Ser Voluntario
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Difunde</h3>
              <p className="text-gray-600 mb-6">
                Comparte nuestro proyecto en redes sociales y ayúdanos a llegar a más estudiantes.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                Compartir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduProyecto</h3>
              <p className="text-gray-400">
                Transformando la educación, un estudiante a la vez.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">Estudiantado</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contáctanos</button></li>
                <li><button onClick={() => scrollToSection('help')} className="text-gray-400 hover:text-white transition-colors">Ayúdanos</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@eduproyecto.com</li>
                <li>Universidad Nacional de Córdoba</li>
                <li>Córdoba, Argentina</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-5 h-5 bg-blue-500 rounded"></div>
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-5 h-5 bg-sky-500 rounded"></div>
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-5 h-5 bg-pink-500 rounded"></div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EduProyecto. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;