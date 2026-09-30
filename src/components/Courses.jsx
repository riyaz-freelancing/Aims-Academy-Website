import React, { useState } from 'react';
import { Search, Filter, BookOpen, Stethoscope, HeartPulse, GraduationCap, Award } from 'lucide-react';
import { COURSE_CATEGORIES, COURSES_DATA } from '../data/courses';
import CourseCard from './CourseCard';

export default function Courses({ onEnquireCourse }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on active category and search query
  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return COURSES_DATA.length;
    return COURSES_DATA.filter((c) => c.category === categoryId).length;
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Program Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Job-Oriented <span className="text-primary">Diploma & Certificate</span> Courses
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our specialized healthcare, paramedical, and vocational education courses designed after 10th and 10+2. Registered by Govt. of Telangana.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-6">
          
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course name or code (e.g. DMLT, RMP, Montessori)..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={onEnquireCourse}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto p-8 shadow-xs">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your search</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Additional Programs Highlight Footer Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary via-navy-800 to-primary text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-accent">
              <Award className="w-4 h-4" />
              <span>Specialized Qualifications & Certifications</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for BAMS, DAMS, BEMS, DEMS or Other Higher Programs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              AIMS Academy offers educational consultancy and practical guidance for alternative medicine and specialized healthcare credentials.
            </p>
          </div>
          <button
            onClick={() => {
              setActiveCategory('additional');
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-semibold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            View Additional Programs
          </button>
        </div>

      </div>
    </section>
  );
}
