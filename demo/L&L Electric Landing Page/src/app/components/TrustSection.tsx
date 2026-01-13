import { Award, Shield, Clock } from 'lucide-react';

export function TrustSection() {
  const trustFeatures = [
    {
      icon: Award,
      title: '16+ Years Experience',
      description: 'Serving the Chicagoland area with expert electrical solutions since 2008',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind',
    },
    {
      icon: Clock,
      title: 'Always Open/24-Hour Support',
      description: 'Emergency electrical services available around the clock, every day',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1B] mb-4">
            Why Choose <span className="text-[#F2C94C]">L&L Electric</span>?
          </h2>
          <div className="w-24 h-1 bg-[#F2C94C] mx-auto"></div>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-[#1A1A1B] p-8 rounded-sm hover:bg-[#1A1A1B] hover:border-[#F2C94C] transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-[#F2C94C] w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#1A1A1B]" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-[#1A1A1B] mb-3 group-hover:text-[#F2C94C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
