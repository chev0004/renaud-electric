import { Phone, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1B] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#F2C94C] p-2 rounded-sm">
              <Zap className="w-8 h-8 text-[#1A1A1B]" fill="#1A1A1B" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">L&L ELECTRIC</h1>
              <p className="text-xs text-[#F2C94C] font-semibold">Calumet City, IL</p>
            </div>
          </div>

          {/* Emergency Badge & Contact */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-[#F2C94C] text-[#1A1A1B] px-4 py-2 rounded-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm">24/7 Emergency Service</span>
            </div>
            <a 
              href="tel:7088080020"
              className="flex items-center gap-2 bg-white text-[#1A1A1B] px-6 py-3 rounded-sm hover:bg-[#F2C94C] transition-colors duration-200 font-bold"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">(708) 808-0020</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
