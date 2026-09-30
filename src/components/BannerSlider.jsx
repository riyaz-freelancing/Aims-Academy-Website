import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

export default function BannerSlider({ onOpenEnquiry }) {
  const slides = [
    {
      id: 1,
      image: '/images/banner1.jpg',
      badge: 'Paramedical Sciences',
      title: 'Build Skills in Medical Lab Technology & Nursing',
      subtitle: 'Hands-on practical training in clinical diagnostic techniques, DMLT, DPT, and healthcare assistance.',
      category: 'paramedical',
    },
    {
      id: 2,
      image: '/images/banner2.jpg',
      badge: 'Healthcare & Clinical Services',
      title: 'Essential Medical Services & Community Health',
      subtitle: 'Recognized programs for Rural Medical Care Providers (RMP) and CMS & ED after 10th and 10+2.',
      category: 'healthcare',
    },
    {
      id: 3,
      image: '/images/banner3.jpg',
      badge: 'Vocational Teacher Training',
      title: 'Primary & Montessori Educator Certification',
      subtitle: 'Specialized pre-primary education, nursery teacher training, and creche management programs.',
      category: 'vocational',
    },
    {
      id: 4,
      image: '/images/banner4.jpg',
      badge: 'Ayurveda & Alternative Healthcare',
      title: 'Ayurveda Pharmacy & Natural Wellness Training',
      subtitle: 'Traditional Ayurvedic healthcare, pharmacy assistance, store management, and naturopathy.',
      category: 'additional',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative pt-20 bg-slate-900 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
        
        {/* Main Slider Frame */}
        <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
          
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
                />

                {/* Dark Gradient Overlay for Maximum Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent"></div>

                {/* Slide Text Content Container */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-6 sm:px-12 lg:px-16 max-w-3xl space-y-5 text-white">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-xs sm:text-sm font-bold shadow-md">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                      {slide.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                      {slide.subtitle}
                    </p>

                    {/* Govt. Regd Badge */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-accent font-semibold pt-1">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>{ACADEMY_INFO.registration} • {ACADEMY_INFO.eligibility}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <button
                        onClick={() => onOpenEnquiry(slide.badge)}
                        className="px-7 py-3.5 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      <a
                        href="#courses"
                        className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all"
                      >
                        Explore Programs
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

          {/* Slider Arrow Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/60 hover:bg-secondary text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/60 hover:bg-secondary text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-secondary'
                    : 'w-2.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
