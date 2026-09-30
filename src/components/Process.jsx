import React from 'react';
import { BookOpen, FileCheck, Compass, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenEnquiry }) {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Course',
      description: 'Explore paramedical, healthcare, or vocational programs tailored for 10th & 10+2 students.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Submit Enquiry',
      description: 'Fill out our simple enquiry form or call our counselor team to express your interest.',
      icon: FileCheck,
    },
    {
      number: '03',
      title: 'Get Admission Guidance',
      description: 'Receive personal educational consultation regarding eligibility, documentation, and enrollment.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Start Your Training',
      description: 'Begin your job-oriented practical training and build essential skills for your career.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.25)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/15 border border-accent/30 px-3.5 py-1.5 rounded-full inline-block">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Journey to a <span className="text-accent">Successful Career</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow these straightforward steps to enroll in your preferred course at AIMS Academy.
          </p>
        </div>

        {/* Steps Process Grid / Steps Bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all group relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-accent/80 group-hover:text-accent transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-white group-hover:bg-secondary transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Process CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm shadow-xl transition-all"
          >
            <span>Start Your Admission Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
