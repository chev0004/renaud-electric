import Image from 'next/image';
import { CurvedEdges } from './CurvedEdges';

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative -scroll-mt-16 py-20 text-white md:scroll-mt-[6.7rem]"
    >
      {/* Semi-transparent red overlay */}
      <div className="absolute inset-0 bg-brand-red/90"></div>
      <CurvedEdges />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-black text-4xl text-white tracking-tight sm:text-5xl">
              Why Choose{' '}
              <span className="text-brand-yellow">Renaud Electric</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Drew Renaud</strong>, owner and
              principal of Renaud Electric LLC, brings personal expertise and
              commitment to every project. As a trusted member of Business
              Network International (BNI), Drew's reputation is our strongest
              asset.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're deeply embedded in the St. Charles County "Golden Triangle"
              (O'Fallon, Wentzville, Lake St. Louis) and serve O'Fallon, Lake
              Saint Louis, Wentzville, Wright City, Troy, Washington, and
              Chesterfield. As a preferred partner of Tech Inspect Home
              Services, we're trusted by home inspectors to fix electrical
              issues required for real estate closings. We're fully licensed,
              insured, and committed to delivering top-tier workmanship with a
              local, personal touch.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-brand-dark transition-all hover:bg-gray-100"
              >
                RECEIVE A FREE QUOTE
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
                alt="Drew Renaud, Owner and Principal of Renaud Electric LLC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
