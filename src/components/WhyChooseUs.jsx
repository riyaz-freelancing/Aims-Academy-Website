import React from 'react';
import { 
  Briefcase, 
  BookOpenCheck, 
  Target, 
  Award, 
  HeartPulse, 
  Users,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import AnimatedCounter from './reactbits/AnimatedCounter';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Briefcase,
      title: 'Job-Oriented Training',
      description: 'Curriculum structured specifically to build practical skills relevant to job markets in healthcare and education.',
    },
    {
      icon: BookOpenCheck,
      title: 'Practical Learning',
      description: 'Hands-on practical training orientation giving students real-world technical confidence.',
    },
    {
      icon: Target,
      title: 'Career-Focused Programs',
      description: 'Pathway options tailored for students after 10th standard and 10+2 to jumpstart their career journey.',
    },
    {
      icon: Award,
      title: 'Diploma & Certificate Courses',
      description: 'Flexible options spanning short-term certificates to comprehensive professional diploma programs.',
    },
    {
      icon: HeartPulse,
      title: 'Multiple Healthcare Programs',
      description: 'Diverse choice of paramedical, clinical laboratory, pharmacy, and traditional healthcare disciplines.',
    },
    {
      icon: Users,
      title: 'Supportive Learning Environment',
      description: 'Dedicated educational consultancy and guidance supporting every student through their admission and studies.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Students Choose <span className="text-primary">AIMS ACADEMY</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We are committed to delivering high-quality training and educational guidance registered under Govt. of Telangana.
          </p>
        </div>

        {/* Feature Cards Grid wrapped in SpotlightCard */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(220, 38, 38, 0.08)"
                className="group p-8 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary group-hover:bg-secondary text-white flex items-center justify-center mb-6 shadow-md transition-colors">
                    <IconComp className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Card Accent Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:from-secondary/10 transition-colors"></div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Live Animated Statistics Counter Ribbon */}
        <div className="bg-gradient-to-r from-primary via-navy-800 to-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block text-4xl sm:text-5xl font-extrabold text-accent">
              <AnimatedCounter end={25} suffix="+" />
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Job-Oriented Courses</span>
          </div>

          <div className="space-y-1">
            <span className="block text-4xl sm:text-5xl font-extrabold text-accent">
              <AnimatedCounter end={100} suffix="%" />
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Practical Orientation</span>
          </div>

          <div className="space-y-1">
            <span className="block text-4xl sm:text-5xl font-extrabold text-accent">
              <AnimatedCounter end={10} suffix="th & 12th" />
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Entry Eligibility</span>
          </div>

          <div className="space-y-1">
            <span className="block text-4xl sm:text-5xl font-extrabold text-accent">
              Govt. Regd.
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Official Consultancy</span>
          </div>
        </div>

      </div>
    </section>
  );
}
