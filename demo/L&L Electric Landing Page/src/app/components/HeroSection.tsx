import { Phone, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#1A1A1B] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636218685495-8f6545aadb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGVsZWN0cmljaWFufGVufDF8fHx8MTc2ODIxMTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Electrical work background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Diagonal Yellow Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2C94C] opacity-10 transform skew-x-12 translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Enlightening <span className="text-[#F2C94C]">Electrical Service</span> for the Chicagoland Area
          </h1>

          {/* Subheadline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-[#F2C94C]"></div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-300">
              Over 16 Years of Professional Experience
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-10 max-w-2xl">
            Trust the experts at L&L Electric for all your residential and commercial electrical needs. 
            Licensed, insured, and available 24/7 for emergency service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-[#F2C94C] text-[#1A1A1B] px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:7088080020"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#1A1A1B] transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F2C94C]"></div>
    </section>
  );
}
