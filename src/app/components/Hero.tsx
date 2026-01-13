import {
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react';
import { FaFacebookSquare } from 'react-icons/fa';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden bg-brand-dark text-white sm:min-h-[650px] lg:min-h-[850px]"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dynamic Overlay: Darker on bottom and left for text legibility */}
      <div className="absolute inset-0 bg-linear-to-tr from-brand-dark via-brand-dark/80 to-transparent"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start text-left lg:max-w-3xl">
          {/* Social Proof Badge - Mobile Optimized */}
          <div className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md sm:mb-6 sm:gap-4 sm:px-4 sm:py-2">
            <FaFacebookSquare className="h-4 w-4 text-white sm:h-6 sm:w-6" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-2.5 w-2.5 fill-current sm:h-3.5 sm:w-3.5"
                  />
                ))}
              </div>
              <span className="font-bold text-[9px] text-white uppercase tracking-widest sm:text-[10px]">
                5.0 Rated Local Expert
              </span>
            </div>
          </div>

          {/* Value-Driven Headline - Mobile Optimized */}
          <h1 className="mb-4 font-black text-3xl leading-[1.1] tracking-tight sm:mb-6 sm:text-5xl sm:leading-[1.1] lg:text-7xl">
            Reliable Power for the <br />
            <span className="text-brand-yellow">Golden Triangle</span>
          </h1>

          {/* Focused Sub-headline - Mobile Optimized */}
          <p className="mb-6 max-w-xl font-medium text-base text-white/90 leading-relaxed sm:mb-10 sm:text-lg lg:text-xl">
            St. Charles County's premier specialist for{' '}
            <span className="font-bold text-white underline decoration-brand-yellow">
              Real Estate Inspection Repairs
            </span>{' '}
            and modern home electrical upgrades.
          </p>

          {/* Value Props Grid - Mobile Optimized */}
          <div className="mb-8 grid grid-cols-1 gap-3 sm:mb-12 sm:grid-cols-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-yellow sm:h-5 sm:w-5" />
              <span className="font-bold text-xs uppercase tracking-wide sm:text-sm">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 shrink-0 text-brand-yellow sm:h-5 sm:w-5" />
              <span className="font-bold text-xs uppercase tracking-wide sm:text-sm">
                24/7 Emergency Support
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-yellow sm:h-5 sm:w-5" />
              <span className="font-bold text-xs uppercase tracking-wide sm:text-sm">
                Tech Inspect Partner
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand-yellow sm:h-5 sm:w-5" />
              <span className="font-bold text-xs uppercase tracking-wide sm:text-sm">
                O'Fallon & Beyond
              </span>
            </div>
          </div>

          {/* Direct CTA Section - Mobile Optimized */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-md bg-brand-yellow px-8 py-4 font-black text-base text-brand-dark shadow-[0_0_20px_rgba(255,204,0,0.3)] transition-all hover:scale-105 hover:bg-brand-yellow-dark active:scale-95 sm:px-10 sm:py-5 sm:text-lg"
            >
              FREE ESTIMATE
            </a>
            <a
              href="tel:6362135272"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 bg-white/10 px-8 py-4 font-black text-base text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-dark sm:px-10 sm:py-5 sm:text-lg"
            >
              <Phone className="mr-2 h-5 w-5 sm:hidden" />
              <span className="sm:inline">(636) 213-5272</span>
            </a>
          </div>

          {/* Secondary Trust Indicator - Mobile Optimized */}
          <p className="mt-6 font-bold text-[10px] text-white/40 uppercase tracking-[0.15em] sm:mt-8 sm:text-xs sm:tracking-[0.2em]">
            Serving O'Fallon • Wentzville • Lake St. Louis • Chesterfield
          </p>
        </div>
      </div>

      {/* Mobile Floating Call Button - Unique Design */}
      <a
        href="tel:6362135272"
        className="fixed right-6 bottom-6 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-brand-yellow shadow-[0_4px_20px_rgba(252,221,95,0.5)] transition-all hover:scale-110 hover:bg-brand-yellow-dark hover:shadow-[0_6px_30px_rgba(252,221,95,0.7)] active:scale-95 md:hidden"
        aria-label="Call (636) 213-5272"
      >
        <Phone className="h-7 w-7 fill-brand-dark text-brand-dark" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red font-bold text-white text-xs">
          !
        </span>
      </a>
    </section>
  );
}
