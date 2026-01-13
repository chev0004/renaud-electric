import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export function SpecialOffers() {
  const offers = [
    {
      title: 'FREE',
      subtitle: 'PROJECT CONSULTATIONS',
      icon: <CheckCircle className="h-6 w-6 text-brand-yellow" />,
      disclaimer:
        '*Expert assessments for real estate addendums, panel upgrades, and new installations.',
    },
    {
      title: '10% HERO',
      subtitle: 'DISCOUNT',
      icon: <ShieldCheck className="h-6 w-6 text-brand-yellow" />,
      disclaimer:
        '*For Veterans, First Responders, and Teachers. Proof of eligibility required. Max $100.',
    },
    {
      title: '$50 OFF',
      subtitle: 'FIRST SERVICE',
      icon: <Zap className="h-6 w-6 text-brand-yellow" />,
      disclaimer:
        '*New customer special for any repair or installation over $500.',
    },
  ];

  return (
    <section className="relative bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-black text-4xl text-brand-dark uppercase tracking-tight sm:text-5xl">
            Exclusive <span className="text-brand-red">Local Perks</span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-gray-600">
            Professional electrical services backed by transparent pricing and a
            commitment to our O&apos;Fallon community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center overflow-hidden rounded-xl border-transparent border-b-4 bg-white p-8 text-center shadow-md transition-all hover:-translate-y-1 hover:border-brand-red hover:shadow-xl"
            >
              {/* Icon / Badge */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark transition-colors group-hover:bg-brand-red">
                {offer.icon}
              </div>

              <div className="grow">
                <h3 className="mb-1 font-black text-4xl text-brand-dark tracking-tighter">
                  {offer.title}
                </h3>
                <p className="mb-4 font-bold text-brand-red text-sm uppercase tracking-widest">
                  {offer.subtitle}
                </p>
                <div className="mx-auto mb-6 h-px w-12 bg-gray-200" />
                <p className="mb-8 text-gray-500 text-sm italic leading-relaxed">
                  {offer.disclaimer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
