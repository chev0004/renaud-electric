import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section
      id="contact"
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
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 font-black text-4xl text-brand-dark tracking-tight sm:text-5xl">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-brand-dark transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-brand-dark transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-brand-dark transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-brand-dark transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-brand-dark transition-colors focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-brand-red px-8 py-4 font-bold text-white transition-all hover:bg-brand-red-dark"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 font-black text-4xl text-brand-dark tracking-tight sm:text-5xl">
              About Renaud Electric
            </h2>
            <div className="space-y-6 text-brand-dark">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-brand-dark">Drew Renaud</strong>, owner
                and principal of Renaud Electric LLC, brings personal expertise
                and commitment to every project. Your satisfaction is at the
                core of everything we do. We stand behind our work with
                confidence and a commitment to quality that you can depend on.
                Whether it's fixing real estate inspection issues, residential
                wiring, or service upgrades, we deliver results you can
                trust—done right the first time.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We're deeply embedded in the St. Charles County "Golden
                Triangle" and proudly serve O'Fallon, Lake Saint Louis,
                Wentzville, Wright City, Troy, Washington, and Chesterfield. As
                a preferred partner of Tech Inspect Home Services, we're trusted
                by home inspectors to fix electrical issues required for real
                estate closings. Our business model relies on responsiveness and
                high-trust direct communication—call or text{' '}
                <strong className="text-brand-red">(636) 213-5272</strong>{' '}
                anytime.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-brand-dark" />
                  <a
                    href="tel:6362135272"
                    className="font-bold text-brand-dark text-xl hover:text-brand-red"
                  >
                    (636) 213-5272
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-brand-dark" />
                  <a
                    href="mailto:renaudelectricllc@gmail.com"
                    className="font-medium text-brand-dark hover:text-brand-red"
                  >
                    renaudelectricllc@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-dark" />
                  <div className="font-medium text-brand-dark">
                    840 Highway Y
                    <br />
                    O'Fallon, MO 63366
                    <br />
                    United States
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-brand-dark" />
                  <div className="font-medium text-brand-dark">
                    <div>Monday - Friday: 7:00am - 3:30pm</div>
                    <div className="font-bold text-brand-dark">
                      24/7 Emergency Service Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
