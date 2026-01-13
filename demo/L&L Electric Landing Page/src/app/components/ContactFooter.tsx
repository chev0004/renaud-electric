import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Zap } from 'lucide-react';

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="bg-[#1A1A1B] text-white">
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#F2C94C] p-2 rounded-sm">
                <Zap className="w-10 h-10 text-[#1A1A1B]" fill="#1A1A1B" />
              </div>
              <div>
                <h2 className="text-3xl font-black">Get In Touch</h2>
                <p className="text-[#F2C94C] font-semibold">We're here to help 24/7</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Have a question or need immediate electrical service? Contact L&L Electric today. 
              We're available around the clock for all your electrical needs.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F2C94C] p-3 rounded-sm flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1A1A1B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us Anytime</p>
                  <a
                    href="tel:7088080020"
                    className="text-2xl font-bold text-white hover:text-[#F2C94C] transition-colors"
                  >
                    (708) 808-0020
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F2C94C] p-3 rounded-sm flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#1A1A1B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Us</p>
                  <a
                    href="mailto:Littleelectrical87@gmail.com"
                    className="text-lg font-semibold text-white hover:text-[#F2C94C] transition-colors break-all"
                  >
                    Littleelectrical87@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F2C94C] p-3 rounded-sm flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1A1A1B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Service Area</p>
                  <p className="text-lg font-semibold text-white">
                    Calumet City, IL<br />
                    <span className="text-sm text-gray-300">& Greater Chicagoland Area</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-[#F2C94C] bg-opacity-10 border-l-4 border-[#F2C94C] p-6 rounded-sm">
              <h3 className="font-black text-lg mb-2 text-[#F2C94C]">24/7 Emergency Service</h3>
              <p className="text-gray-300">
                We're always available when you need us most. Day or night, weekends and holidays.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-sm p-8">
            <h3 className="text-3xl font-black text-[#1A1A1B] mb-6">
              Request a <span className="text-[#F2C94C]">Free Quote</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1B] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:border-[#F2C94C] focus:outline-none text-[#1A1A1B] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1B] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:border-[#F2C94C] focus:outline-none text-[#1A1A1B] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#1A1A1B] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:border-[#F2C94C] focus:outline-none text-[#1A1A1B] transition-colors"
                  placeholder="(708) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#1A1A1B] mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:border-[#F2C94C] focus:outline-none text-[#1A1A1B] transition-colors resize-none"
                  placeholder="Tell us about your electrical needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F2C94C] text-[#1A1A1B] py-4 px-6 rounded-sm font-bold text-lg hover:bg-[#1A1A1B] hover:text-[#F2C94C] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 L&L Electric. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Proudly serving Chicagoland since 2008</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
