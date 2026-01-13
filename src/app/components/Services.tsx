import { Building2, Home, Zap } from 'lucide-react';
import Image from 'next/image';

export function Services() {
  const serviceList = [
    {
      title: 'Real Estate Repair Addendums',
      icon: <Zap className="h-12 w-12" />,
      desc: 'Fixing inspection deal-breakers to help close your real estate transaction. We specialize in GFCI outlets, panel upgrades, double-tapped breakers, and other electrical issues that home inspectors flag. Preferred partner of Tech Inspect Home Services.',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Residential Electrical',
      icon: <Home className="h-12 w-12" />,
      desc: 'Full-service wiring for new construction and residential expansion in the St. Charles/Warren County corridor. From new builds to home additions, we handle all your residential electrical needs with precision and care.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Service Upgrades',
      icon: <Building2 className="h-12 w-12" />,
      desc: 'Modernizing electrical systems for older homes in areas like Chesterfield. Upgrade your panel, increase capacity, and bring your home up to current electrical codes for safety and reliability.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="services"
      className="relative -scroll-mt-16 bg-white py-20 md:scroll-mt-4"
    >
      {/* Curved Top Divider */}
      <div className="absolute top-0 right-0 left-0 h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-black text-4xl text-brand-dark tracking-tight sm:text-5xl">
            Our Most Popular{' '}
            <span className="text-brand-red">Electrical Services</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-brand-red">{service.icon}</div>
                <h3 className="mb-4 font-bold text-2xl text-brand-dark tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
