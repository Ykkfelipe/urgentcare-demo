import { siteData } from '../lib/data';
import { Phone, MapPin, Clock, Star, Scissors, Users, Award, Facebook } from 'lucide-react';

export default function HomePage() {
  const { header, hero, services, barbers, reviews, contact, footer } = siteData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="w-8 h-8 text-blue-600" />
            <div className="text-2xl font-bold text-gray-900">{header.logo}</div>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            {header.menu.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors duration-200 relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <a
            href={header.cta.href}
            className="btn-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>{header.cta.label}</span>
          </a>
        </div>
      </header>

      {/* Quick Info Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>{contact.address}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Mon-Fri: 10AM-7PM | Sat: 9AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        id="home"
        className="relative text-white flex items-center justify-center min-h-[80vh]"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-blue-200 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Ottawa's Premier Barber Shop</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {hero.headline}
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hero.buttons.map((btn, index) => (
              <a
                key={btn.href}
                href={btn.href}
                className={`${
                  index === 0 
                    ? 'btn-primary text-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20'
                } px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2`}
              >
                {index === 0 ? <Phone className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                <span>{btn.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-200">Days a Week</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Scissors className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Cuts & Styling</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From classic cuts to modern fades, we offer premium grooming services for the modern gentleman.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="service-card bg-white p-8 rounded-xl shadow-lg text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Scissors className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-600">Professional service with attention to detail</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Barbers */}
      <section id="barbers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Master Barbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to making you look and feel your best.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
            {barbers.map((barber) => (
              <div key={barber.name} className="barber-card text-center group">
                <div className="relative mb-6">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="mx-auto rounded-2xl w-48 h-48 object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                    <Scissors className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{barber.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">{barber.title}</p>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{barber.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Client Reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {reviews.map((rev, index) => (
              <div key={rev.author} className="review-card bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{rev.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {rev.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg">{rev.author}</span>
                    <p className="text-gray-500 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Visit Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready for a fresh cut? Visit us or give us a call to book your appointment.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className="text-gray-600">{contact.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600">{contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours</h3>
                    <div className="space-y-1">
                      {contact.hours.map((h) => (
                        <div key={h.days} className="flex justify-between">
                          <span className="text-gray-600">{h.days}:</span>
                          <span className="text-gray-900 font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <a
                      href={contact.social.facebook}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="500"
                loading="lazy"
                className="border-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Best Look?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Walk-ins welcome or call ahead to guarantee your spot. We're here to make you look sharp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16135231110"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://goo.gl/maps/3sP2q4qjXJ72"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="w-8 h-8 text-blue-400" />
                <div className="text-2xl font-bold">Sunnyside Barber Shop</div>
              </div>
              <p className="text-gray-400 mb-4">
                Ottawa's premier destination for classic cuts and modern styling.
              </p>
              <div className="flex space-x-4">
                <a
                  href={contact.social.facebook}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {footer.links.map((link) => (
                  <a key={link.href} href={link.href} className="block text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 10AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <p>{footer.copyright}</p>
            <p className="mt-2 sm:mt-0">Designed for success</p>
          </div>
        </div>
      </footer>
    </div>
  );
}