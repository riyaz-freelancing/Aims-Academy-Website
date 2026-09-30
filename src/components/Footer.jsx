import React from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  ChevronRight,
  MessageCircle,
  Share2,
  Users,
  Send,
  ExternalLink
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/91${ACADEMY_INFO.phones[0]}`,
      color: 'hover:bg-emerald-600 hover:text-white',
      icon: MessageCircle,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:bg-blue-600 hover:text-white',
      icon: Share2,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:bg-pink-600 hover:text-white',
      icon: Globe,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-sky-600 hover:text-white',
      icon: Users,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:bg-red-600 hover:text-white',
      icon: Send,
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  AIMS <span className="text-secondary">ACADEMY</span>
                </span>
                <p className="text-xs text-accent font-semibold tracking-wider uppercase">
                  {ACADEMY_INFO.registration}
                </p>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professional Training Centre & Educational Consultant offering job-oriented paramedical, healthcare, and vocational courses after 10th & 10+2.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Registered by Govt. of Telangana</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Connect With Us
              </h5>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all ${social.color}`}
                    >
                      <IconComp className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Courses', 'Why AIMS', 'Admission Process', 'Contact'].map((item, idx) => {
                const href = `#${item.toLowerCase().replace(/\s+/g, '-').replace('us', '')}`;
                return (
                  <li key={idx}>
                    <a
                      href={href === '#about' ? '#about' : href}
                      className="hover:text-accent transition-colors inline-flex items-center gap-1.5 font-medium"
                    >
                      <ChevronRight className="w-4 h-4 text-secondary" />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Main Course Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Course Disciplines</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Paramedical (DMLT, DPT, Nursing, Pharmacy)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span>Healthcare & RMP Services (CMS & ED)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Ayurveda & Homeopathic Pharmacy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Vocational Teacher Training & Montessori</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>Specialized Medical Certifications</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 {ACADEMY_INFO.phones[0]} / {ACADEMY_INFO.phones[1]}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{ACADEMY_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{ACADEMY_INFO.website}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AIMS ACADEMY. All rights reserved. Registered by Govt. of Telangana.</p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-accent" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
