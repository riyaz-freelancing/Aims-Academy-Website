import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why AIMS', href: '#why-us' },
    { name: 'Admission Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >


      {/* Main Navbar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-navy-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                  AIMS <span className="text-secondary">ACADEMY</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-none tracking-wide">
                Professional Training Centre
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-base font-semibold text-slate-700 hover:text-secondary rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-semibold bg-secondary text-white rounded-lg shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 mb-2 border border-slate-100">
            <p className="font-semibold text-primary flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              {ACADEMY_INFO.registration}
            </p>
            <p className="text-slate-600">{ACADEMY_INFO.eligibility}</p>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="text-xs text-slate-500 space-y-1 px-1">
              <p className="flex items-center gap-2 font-medium">
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span>Call: +91 {ACADEMY_INFO.phones[0]} / {ACADEMY_INFO.phones[1]}</span>
              </p>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary text-white font-semibold text-sm shadow-md"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
