'use client';

import { Clipboard, Home, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const topInfoBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Calculate total header height (info bar + main header) dynamically
  useEffect(() => {
    const updateTotalHeight = () => {
      let totalHeight = 0;

      if (topInfoBarRef.current) {
        totalHeight += topInfoBarRef.current.offsetHeight;
      }

      if (headerRef.current) {
        totalHeight += headerRef.current.offsetHeight;
      }

      if (totalHeight > 0) {
        setHeaderHeight(totalHeight);
      }
    };

    // Initial calculation
    updateTotalHeight();

    // Use ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(() => {
      updateTotalHeight();
    });

    if (topInfoBarRef.current) {
      resizeObserver.observe(topInfoBarRef.current);
    }

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    // Also update on window resize as fallback
    window.addEventListener('resize', updateTotalHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateTotalHeight);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div ref={topInfoBarRef} className="bg-brand-yellow py-2 text-brand-dark">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 text-[10px] sm:justify-between sm:gap-4 sm:px-6 sm:text-xs lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Phone className="h-3 w-3 text-brand-dark sm:h-4 sm:w-4" />
            <span className="font-semibold uppercase">Call Us Today</span>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
            <Home className="h-3 w-3 text-brand-dark sm:h-4 sm:w-4" />
            <span className="font-semibold uppercase">Licensed & Insured</span>
          </div>
          <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
            <Clipboard className="h-3 w-3 text-brand-dark sm:h-4 sm:w-4" />
            <span className="font-semibold uppercase">Free Onsite Quote</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-brand-yellow/20 border-b bg-brand-red py-3 text-white shadow-md sm:py-4"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Renaud Electric"
              width={150}
              height={45}
              className="h-auto max-h-10 w-auto sm:max-h-12"
              priority
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden items-center justify-center gap-6 md:flex">
            <a
              href="#top"
              className="font-semibold text-sm text-white transition-colors hover:text-brand-yellow"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-semibold text-sm text-white transition-colors hover:text-brand-yellow"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-semibold text-sm text-white transition-colors hover:text-brand-yellow"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-semibold text-sm text-white transition-colors hover:text-brand-yellow"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="cursor-pointer rounded-lg bg-brand-dark px-4 py-2.5 font-bold text-sm text-white shadow-md transition-all hover:bg-brand-dark-dark"
            >
              BOOK NOW
            </a>
            <a
              href="tel:6362135272"
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-brand-yellow px-6 py-2.5 font-bold text-brand-dark text-sm shadow-md transition-all hover:bg-brand-yellow-dark"
            >
              <Phone className="h-4 w-4" fill="currentColor" />
              <span>(636) 213-5272</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
            className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-brand-red/80 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <button
            type="button"
            style={{
              top: `${headerHeight - 1}px`,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            className="fixed z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          />
        )}

        {/* Mobile Menu Slide-in Panel */}
        <div
          style={{
            top: `${headerHeight - 1}px`,
            height: `calc(100vh - ${headerHeight - 1}px)`,
          }}
          className={`fixed right-0 z-50 w-80 max-w-[85vw] transform bg-brand-red shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col p-6">
            <a
              href="#top"
              onClick={handleLinkClick}
              className="border-white/20 border-b py-4 font-bold text-lg text-white transition-colors hover:text-brand-yellow"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="border-white/20 border-b py-4 font-bold text-lg text-white transition-colors hover:text-brand-yellow"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="border-white/20 border-b py-4 font-bold text-lg text-white transition-colors hover:text-brand-yellow"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="border-white/20 border-b py-4 font-bold text-lg text-white transition-colors hover:text-brand-yellow"
            >
              Contact
            </a>
            <div className="mt-6 space-y-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full cursor-pointer rounded-lg bg-brand-dark px-6 py-4 text-center font-bold text-white shadow-md transition-all hover:bg-brand-dark-dark"
              >
                BOOK NOW
              </a>
              <a
                href="tel:6362135272"
                onClick={handleLinkClick}
                className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-brand-yellow px-6 py-4 font-bold text-brand-dark shadow-md transition-all hover:bg-brand-yellow-dark"
              >
                <Phone className="h-5 w-5" fill="currentColor" />
                <span>(636) 213-5272</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
