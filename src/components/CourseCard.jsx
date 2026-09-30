import React from 'react';
import { 
  TestTube, 
  Activity, 
  HeartPulse, 
  Pill, 
  Smile, 
  Stethoscope, 
  Apple, 
  UserCheck, 
  Users, 
  Building, 
  Cross, 
  ShieldPlus, 
  Sun, 
  FlaskConical, 
  Leaf, 
  Heart, 
  BookOpen, 
  Store, 
  GraduationCap, 
  Sparkles, 
  Brain, 
  Book, 
  Home, 
  Award, 
  Bookmark, 
  Zap, 
  Cpu, 
  Compass, 
  Layers, 
  Feather, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  RotateCw,
  CheckCircle2
} from 'lucide-react';
import FlipCard from './reactbits/FlipCard';
import SpotlightCard from './reactbits/SpotlightCard';

const ICON_MAP = {
  TestTube,
  Activity,
  HeartPulse,
  Pill,
  Smile,
  Stethoscope,
  Apple,
  UserCheck,
  Users,
  Building,
  Cross,
  ShieldPlus,
  Sun,
  FlaskConical,
  Leaf,
  Heart,
  BookOpen,
  Store,
  GraduationCap,
  Sparkles,
  Brain,
  Book,
  Home,
  Award,
  Bookmark,
  Zap,
  Cpu,
  Compass,
  Layers,
  Feather,
  Flame,
  ShieldCheck,
};

export default function CourseCard({ course, onEnquire }) {
  const IconComponent = ICON_MAP[course.iconName] || Stethoscope;

  const FrontFace = (
    <SpotlightCard
      spotlightColor="rgba(30, 58, 138, 0.12)"
      className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full min-h-[340px]"
    >
      {/* Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"></div>

      <div>
        {/* Card Header: Icon & Category Tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-accent/15 group-hover:text-accent-dark transition-colors">
            {course.badge}
          </span>
        </div>

        {/* Course Code & Name */}
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-secondary tracking-wider uppercase">
              {course.code}
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 leading-snug group-hover:text-primary transition-colors">
            {course.name}
          </h3>
        </div>

        {/* Course Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
          {course.description}
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">
          Job-Oriented Program
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-blue-50 px-2.5 py-1 rounded-lg">
          <RotateCw className="w-3.5 h-3.5 text-secondary animate-spin-slow" />
          <span>Flip Card</span>
        </span>
      </div>
    </SpotlightCard>
  );

  const BackFace = (
    <div className="bg-gradient-to-br from-primary via-navy-800 to-slate-900 text-white rounded-3xl p-6 border border-slate-700 shadow-2xl flex flex-col justify-between h-full min-h-[340px] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
            {course.code}
          </span>
          <span className="text-xs text-slate-300 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Govt. Regd.
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white leading-tight mb-4">
          {course.name}
        </h3>

        {/* Course Highlights */}
        <ul className="space-y-2 text-xs sm:text-sm text-slate-200 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Practical clinical & skill orientation</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Eligible after 10th & 10+2 education</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Recognized educational consultancy</span>
          </li>
        </ul>
      </div>

      <div className="pt-3 border-t border-slate-700 flex items-center justify-between">
        <span className="text-xs text-slate-300">AIMS Academy</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEnquire(course);
          }}
          className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <FlipCard
      frontContent={FrontFace}
      backContent={BackFace}
      triggerMode="both"
      className="h-full"
    />
  );
}
