import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  HeartPulse, 
  PhoneCall,
  MapPin,
  Users,
  ChevronRight,
  Activity
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

export default function Hero({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('paramedical');

  const highlightTabs = [
    {
      id: 'paramedical',
      label: 'Paramedical',
      icon: Stethoscope,
      title: 'DMLT, DPT & Assistant Nursing',
      desc: 'Clinical lab technology, pathology & patient care skills.',
      badge: 'After 10th & 12th',
      bgGradient: 'from-blue-600 to-navy-800',
    },
    {
      id: 'healthcare',
      label: 'Healthcare & RMP',
      icon: HeartPulse,
      title: 'CMS & ED, RMP & Essential Drugs',
      desc: 'Community medical care & primary healthcare training.',
      badge: 'Job Oriented',
      bgGradient: 'from-emerald-600 to-teal-800',
    },
    {
      id: 'vocational',
      label: 'Teacher Training',
      icon: BookOpen,
      title: 'Primary & Montessori Education',
      desc: 'Early childhood pedagogy & pre-school management.',
      badge: 'Certificate',
      bgGradient: 'from-amber-600 to-orange-800',
    },
    {
      id: 'ayurveda',
      label: 'Ayurveda & Yoga',
      icon: Activity,
      title: 'Ayurvedic Pharmacy & Naturopathy',
      desc: 'Traditional medicine preparation & natural wellness therapies.',
      badge: 'Specialized',
      bgGradient: 'from-indigo-600 to-purple-800',
    },
  ];

  const currentHighlight = highlightTabs.find((t) => t.id === activeTab) || highlightTabs[0];

  return (
    <section id="home" className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-slate-900 text-white">
      
      {/* Background Lighting & Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,41,66,0.5)_0,transparent_75%)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Premium Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Registration Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                {ACADEMY_INFO.registration}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold text-white leading-[1.12] tracking-tight">
              Transform Your Future in{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Healthcare
              </span>{' '}
              &{' '}
              <span className="text-secondary underline decoration-accent/50 underline-offset-8">
                Education
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal">
              AIMS ACADEMY offers practical, job-oriented diploma and certificate programs after <strong>10th and 10+2</strong>. Build in-demand clinical, paramedical, and teaching expertise with official educational guidance.
            </p>

            {/* Quick Interactive Domain Selector Tabs */}
            <div className="pt-2 pb-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Select Discipline Preview:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {highlightTabs.map((tab) => {
                  const IconComp = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border ${
                        isActive
                          ? 'bg-secondary text-white border-secondary shadow-lg'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/15'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Highlight Banner Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto lg:mx-0 shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-accent/20 text-accent text-xs font-bold">
                    {currentHighlight.badge}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Featured Discipline</span>
                </div>
                <h4 className="text-base font-bold text-white">{currentHighlight.title}</h4>
                <p className="text-xs text-slate-300">{currentHighlight.desc}</p>
              </div>

              <button
                onClick={() => onOpenEnquiry(currentHighlight.title)}
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-md transition-colors"
              >
                <span>Enquire Discipline</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md shadow-md transition-all"
              >
                <PhoneCall className="w-5 h-5 text-accent" />
                <span>Contact Counselor</span>
              </button>
            </div>

            {/* Trust Metrics Ribbon */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">25+</span>
                <span className="text-xs text-slate-300 font-medium">Job-Oriented Courses</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">10th & 12th</span>
                <span className="text-xs text-slate-300 font-medium">Direct Eligibility</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">100%</span>
                <span className="text-xs text-slate-300 font-medium">Practical Orientation</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">Govt. Regd.</span>
                <span className="text-xs text-slate-300 font-medium">Official Consultancy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Unique Multi-Layered Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Container */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-blue-500/20 via-slate-800 to-secondary/30 border border-white/15 shadow-2xl overflow-hidden group">
                
                {/* Main Photo Frame */}
                <div className="relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden">
                  <img
                    src="/images/hero_student.jpg"
                    alt="AIMS Academy Practical Student Training"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Top Right Floating Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2 text-xs font-bold text-white shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Govt. Regd. Centre</span>
                  </div>

                  {/* Top Left Floating Badge */}
                  <div className="absolute top-4 left-4 bg-secondary px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Hyderabad Campus</span>
                  </div>

                  {/* Bottom Interactive Content Overlay Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white space-y-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Active Practical Labs
                      </span>
                      <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                        Job Ready
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-extrabold text-white">
                        {currentHighlight.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-snug">
                        {currentHighlight.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        Rethi Bowli, Hyderabad
                      </span>
                      <button
                        onClick={() => onOpenEnquiry(currentHighlight.title)}
                        className="text-accent font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Apply Now</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Accent Badge Bottom Left */}
              <div className="absolute -bottom-5 -left-5 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3.5 max-w-xs hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">After 10th & 10+2</p>
                  <p className="text-[11px] text-slate-500 font-medium">Diploma & Certificate Courses</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
