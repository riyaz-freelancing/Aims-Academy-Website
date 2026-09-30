import React from 'react';
import { 
  Building2, 
  Award, 
  BookOpenCheck, 
  ShieldCheck, 
  CheckCircle, 
  Users, 
  FileText, 
  Briefcase 
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Govt. Registered Institute',
      desc: 'Registered under the Government of Telangana for quality education standard.',
    },
    {
      icon: Briefcase,
      title: 'Job-Oriented Curriculum',
      desc: 'Programs specifically crafted to enhance employability and practical skills.',
    },
    {
      icon: BookOpenCheck,
      title: '10th & 10+2 Pathways',
      desc: 'Structured entry points for students completing 10th standard and 10+2.',
    },
    {
      icon: Users,
      title: 'Educational Consultancy',
      desc: 'Professional guidance assisting students to choose the best career path.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Highlight Box / Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              
              {/* Outer Card with Navy Accent */}
              <div className="bg-gradient-to-br from-primary to-navy-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/15 rounded-full blur-2xl"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-accent text-xs font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Premier Educational Consultant</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Empowering Students with Career Skills
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    AIMS ACADEMY acts as a beacon for students seeking practical skill development in Paramedical, Healthcare, and Vocational domains across Hyderabad and Telangana.
                  </p>

                  {/* Highlights Grid inside visual card */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-medium text-slate-200">
                        Paramedical & Clinical Laboratory Training
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-medium text-slate-200">
                        Ayurveda, Yoga & Alternative Healthcare
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-medium text-slate-200">
                        Montessori & Primary Teacher Training
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Location: Rethi Bowli, Hyderabad</span>
                    <span className="text-accent font-semibold">Govt. Regd.</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Box */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-3xl -z-10 hidden sm:block"></div>
            </div>
          </div>

          {/* Right Column: Detailed Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block">
                About AIMS ACADEMY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Learn Skills. <span className="text-primary">Build Your Future.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>AIMS ACADEMY</strong> is a recognized <strong>Professional Training Centre</strong> and <strong>Educational Consultant</strong> located in Hyderabad, Telangana. We specialize in offering career-focused diploma and certificate courses tailored specifically for candidates looking to build immediate job-oriented expertise after <strong>10th and 10+2</strong> education.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our comprehensive range of programs spans <strong>Paramedical Sciences</strong>, <strong>Healthcare & Essential Medical Services</strong>, and <strong>Vocational Teacher Training</strong>. Whether you aim to work in clinical labs, assist healthcare practitioners, manage pharmacy administration, or excel in primary education, AIMS ACADEMY provides structured guidance.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Fact Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary shrink-0" />
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">Official Campus Address:</span> {ACADEMY_INFO.address}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
