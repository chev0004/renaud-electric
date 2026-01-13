import { Home, Building2, Zap } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Residential Installations',
      description: 'From whole-home rewiring to outlet installations, panel upgrades, and lighting solutions for your home.',
      features: [
        'Electrical Panel Upgrades',
        'Lighting Installation',
        'Outlet & Switch Repair',
        'Home Rewiring',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Service',
      description: 'Professional electrical services for businesses, offices, and commercial properties of all sizes.',
      features: [
        'Commercial Wiring',
        'Emergency Lighting',
        'Code Compliance',
        'Equipment Installation',
      ],
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical repair services to keep you safe and restore power when you need it most.',
      features: [
        'Power Outage Solutions',
        'Electrical Failures',
        'Safety Inspections',
        'Same-Day Service',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1B] mb-4">
            Our <span className="text-[#F2C94C]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions for every need, backed by 16+ years of expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-sm overflow-hidden hover:border-[#F2C94C] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {/* Card Header */}
              <div className="bg-[#1A1A1B] p-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2C94C] opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="bg-[#F2C94C] w-14 h-14 rounded-sm flex items-center justify-center mb-4 relative z-10">
                  <service.icon className="w-7 h-7 text-[#1A1A1B]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-white relative z-10">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#F2C94C] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <a
                  href="tel:7088080020"
                  className="block text-center bg-[#1A1A1B] text-white py-3 px-6 rounded-sm font-bold hover:bg-[#F2C94C] hover:text-[#1A1A1B] transition-all duration-200"
                >
                  Request Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
