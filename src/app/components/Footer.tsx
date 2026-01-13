import {
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-brand-yellow border-t-4 bg-brand-dark text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Contact & Trust */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-bold text-brand-yellow text-lg uppercase tracking-wide">
                Get In Touch
              </h3>
              <a
                href="tel:6362135272"
                className="mb-2 flex items-center gap-3 font-bold text-2xl text-white transition-colors hover:text-brand-yellow"
              >
                <Phone className="h-6 w-6 shrink-0 text-brand-yellow" />
                <span>(636) 213-5272</span>
              </a>
              <p className="mb-4 text-sm text-white/70 italic">
                Call or text ANYTIME for service
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:renaudelectricllc@gmail.com"
                  className="flex items-center gap-2 text-white/80 transition-colors hover:text-brand-yellow"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
                  <span className="text-sm">renaudelectricllc@gmail.com</span>
                </a>
                <div className="flex items-start gap-2 text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                  <span className="text-sm italic">
                    840 Highway Y<br />
                    O'Fallon, MO 63366
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61570445727621"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-white transition-all hover:bg-brand-yellow hover:text-brand-dark"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mrsmariarenaud/?__d=11"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-white transition-all hover:bg-brand-yellow hover:text-brand-dark"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Availability & Specialties */}
          <div className="space-y-6">
            <div className="space-y-6">
              <h3 className="mb-4 font-bold text-brand-yellow text-lg uppercase tracking-wide">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                  <div>
                    <p className="font-semibold text-sm text-white">
                      Regular Hours
                    </p>
                    <p className="text-sm text-white/80">
                      Mon - Fri: 7:00am - 3:30pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <p className="font-bold text-sm text-white">
                      Emergency Support
                    </p>
                    <p className="text-sm text-white/80">
                      24/7 Rapid Response Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="mb-4 font-bold text-brand-yellow text-lg uppercase tracking-wide">
                Our Specialties
              </h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                  <span>Real Estate Inspection Repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                  <span>Main Panel Upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                  <span>EV Charger Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                  <span>GFCI & Code Compliance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Google Maps */}
          <div className="space-y-6">
            <h3 className="mb-4 font-bold text-brand-yellow text-lg uppercase tracking-wide">
              Find Us
            </h3>
            <div className="overflow-hidden rounded-lg border border-white/20">
              <iframe
                src="https://www.google.com/maps?q=840+Hwy+Y,+St+Paul,+MO+63366&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
                title="Renaud Electric Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-white/10 border-t py-8 text-center sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="font-medium text-[10px] text-white/70 uppercase tracking-widest">
              © 2026 RENAUD ELECTRIC LLC. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-4 font-bold text-[10px] text-white/40 uppercase tracking-widest">
              <span>Licensed</span>
              <span className="text-brand-yellow">•</span>
              <span>Insured</span>
              <span className="text-brand-yellow">•</span>
              <span>St. Charles County</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 sm:items-end">
            <a
              href="https://chev.dev?ref=renaud"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold text-white/60 text-xs transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all hover:text-white hover:after:w-full"
            >
              SITE BY CLYDE CLORES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
