'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Star } from 'lucide-react';
import '@splidejs/react-splide/css';
import { CurvedEdges } from './CurvedEdges';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Hailey Norwine',
      rating: 5,
      text: "I had a great experience with Renaud Electric! Scheduling was super easy, and the service the day of was both quick and high quality. Drew was so kind and professional, which made the whole process stress free. I'd definitely recommend them!",
    },
    {
      name: 'Epiphany Science',
      rating: 5,
      text: 'Fantastic work! It took Drew only a few minutes to locate a bad install that could have easily been a house fire. You got our A/C running and protected our home. Thank you for making time for us today.',
    },
    {
      name: 'Michelle Lyn',
      rating: 5,
      text: "We recently had the pleasure of working with Renaud Electric, and I can't recommend them enough! Drew, the owner and electrician, is truly exceptional. He is kind, courteous, and hardworking, ensuring that every detail is addressed thoroughly. He really went above and beyond in helping my parents with a challenging HOA situation, demonstrating not only his expertise but also his commitment to customer satisfaction. The pricing for the job was outstanding, making the experience even better. If you need electrical work done, Renaud Electric is the way to go!",
    },
    {
      name: 'Michelle Hill',
      rating: 5,
      text: 'Renaud did a great job at our office today! They were quick to respond, kind, and super professional. Highly recommend!',
    },
    {
      name: 'Jennifer Bachtell Rohrbach',
      rating: 5,
      text: "We had such a wonderful experience with Renaud Electric. From Maria's cheerful attitude and ability to be so flexible with our scheduling to Drew's expertise and friendliness, we have found our forever electrician. They were a pleasure to work with and we will absolutely refer them to friends and family and definitely use them again.",
    },
    {
      name: 'Jean Wilke',
      rating: 5,
      text: '10/10 recommend! Drew does amazing work and is professional and friendly! Could not be happier with my experience.',
    },
    {
      name: 'Michael Beno',
      rating: 5,
      text: "I can't begin to say how grateful I am for Renaud Electric! Drew came out to my house on Friday morning and helped me by installing 10 puck lights. What he was able to accomplish in a short time would have taken me two days to do on my own. He's fast, does great work and just an all around great guy. Thanks so much Renaud! I highly recommend calling them for your electrical needs!",
    },
    {
      name: 'Paige Gardner',
      rating: 5,
      text: 'We hired Renaud Electric this past week to finish our under cabinet lighting and service was great! Drew came for a quote and was able to get us booked for install shortly after. We are very pleased with the results. The communication was great working with this company and would use them again!',
    },
    {
      name: 'Kacie Davis',
      rating: 5,
      text: "Drew came out to our home and was on time and fixed an electrical problem that contractors messed up and couldn't fix. He was very polite and helpful and explained what had happened and why we were having the electrical issues. I will defiantly be using Renaud electric again for any electrical needs!",
    },
    {
      name: 'Denise Pohlman Mueller',
      rating: 5,
      text: "Drew came out to my daughter's house. Arrived on time. Fixed one of the outlets and hung three lighting fixtures. Excellent job we would highly recommend.",
    },
    {
      name: 'Erica Fiore',
      rating: 5,
      text: 'Drew came out to my office and quickly took care of our lighting situation that we had dealt with for YEARS!! Wonderful service and I would highly recommend for all your electrical needs!!',
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .splide__pagination {
            position: relative !important;
            margin-top: 2rem !important;
            bottom: auto !important;
          }
          .splide__pagination__page {
            background-color: rgba(255, 255, 255, 0.5) !important;
          }
          .splide__pagination__page.is-active {
            background-color: #fcdd5f !important;
          }
        `,
        }}
      />
      {/* Semi-transparent red overlay */}
      <div className="absolute inset-0 bg-brand-red/90"></div>
      <CurvedEdges />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-black text-4xl text-white tracking-tight sm:text-5xl">
            What Your Neighbors Are{' '}
            <br />
            <span className="text-brand-yellow">Saying About Us</span>
          </h2>
        </div>

        <Splide
          options={{
            perPage: 3,
            perMove: 3,
            gap: '2rem',
            pagination: true,
            arrows: false,
            breakpoints: {
              768: {
                perPage: 1,
                perMove: 1,
                gap: '1rem',
              },
              1024: {
                perPage: 2,
                perMove: 2,
              },
            },
          }}
          className="mb-8"
        >
          {testimonials.map((testimonial, idx) => (
            <SplideSlide key={idx}>
              <div className="flex h-full flex-col justify-center rounded-lg bg-white p-6 text-brand-dark shadow-lg">
                <h3 className="mb-3 font-bold text-brand-red text-lg">
                  {testimonial.name}
                </h3>
                <div className="mb-4 flex text-brand-yellow">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-brand-dark"
          >
            LEAVE US A REVIEW
          </a>
        </div>
      </div>
    </section>
  );
}
