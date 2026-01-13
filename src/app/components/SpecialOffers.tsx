'use client';

import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
            <OfferCard key={idx} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Offer = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  disclaimer: string;
};

function OfferCard({ offer }: { offer: Offer }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col items-center overflow-hidden rounded-xl border-transparent border-b-4 bg-white p-8 text-center shadow-md transition-all md:hover:-translate-y-1 md:hover:border-brand-red md:hover:shadow-xl ${
        isVisible
          ? '-translate-y-1 border-brand-red shadow-xl md:translate-y-0 md:border-transparent md:shadow-md'
          : ''
      }`}
    >
      {/* Icon / Badge */}
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark transition-colors md:group-hover:bg-brand-red ${
          isVisible ? 'bg-brand-red md:bg-brand-dark' : ''
        }`}
      >
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
  );
}
