import { siteData } from '../lib/data';

export default function HomePage() {
  const { header, hero, services, barbers, reviews, contact, footer } = siteData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">{header.logo}</div>
          <nav className="flex space-x-4 text-gray-600 text-sm">
            {header.menu.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={header.cta.href}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
          >
            {header.cta.label}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="text-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{hero.headline}</h1>
          <p className="mb-6 text-lg md:text-xl">{hero.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hero.buttons.map((btn) => (
              <a
                key={btn.href}
                href={btn.href}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-blue-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers */}
      <section id="barbers" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Barbers</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {barbers.map((barber) => (
              <div key={barber.name} className="text-center">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="mx-auto mb-4 rounded-full w-40 h-40 object-cover"
                />
                <h3 className="text-xl font-semibold">{barber.name}</h3>
                <p className="text-blue-600 mb-2">{barber.title}</p>
                <p className="text-sm text-gray-600">{barber.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((rev) => (
              <div key={rev.author} className="bg-white p-6 rounded-lg shadow">
                <p className="mb-4">{rev.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{rev.author}</span>
                  <span className="text-yellow-500">{'⭐⭐⭐⭐⭐'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2"><strong>Address:</strong> {contact.address}</p>
              <p className="mb-2"><strong>Phone:</strong> {contact.phone}</p>
              <div className="mb-4">
                <p className="font-semibold mb-1">Hours:</p>
                <ul>
                  {contact.hours.map((h) => (
                    <li key={h.days} className="text-sm">{h.days}: {h.time}</li>
                  ))}
                </ul>
              </div>
              <a
                href={contact.social.facebook}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="300"
                loading="lazy"
                className="border-0 w-full h-72"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>{footer.copyright}</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {footer.links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
