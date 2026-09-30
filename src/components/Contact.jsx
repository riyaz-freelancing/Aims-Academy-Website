import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { ACADEMY_INFO, COURSES_DATA } from '../data/courses';

export default function Contact({ preselectedCourse }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: preselectedCourse.name || preselectedCourse,
      }));
    }
  }, [preselectedCourse]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.course) {
      newErrors.course = 'Please select a course of interest';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Reset form after short delay if needed
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Start Your Career Journey Today
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about our job-oriented paramedical, healthcare, or vocational courses? Send an enquiry or visit our Hyderabad office.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-primary to-navy-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-accent mb-2">
                  Official Details
                </span>
                <h3 className="text-2xl font-bold text-white">AIMS ACADEMY</h3>
                <p className="text-xs text-slate-300 font-medium">
                  {ACADEMY_INFO.tagline}
                </p>
                <p className="text-xs text-accent mt-1 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {ACADEMY_INFO.registration}
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/90 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone / Mobile
                    </h4>
                    <div className="mt-1 space-y-1">
                      {ACADEMY_INFO.phones.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone}`}
                          className="block text-base font-semibold text-white hover:text-accent transition-colors"
                        >
                          +91 {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${ACADEMY_INFO.email}`}
                      className="text-sm font-medium text-white hover:text-accent transition-colors mt-1 block"
                    >
                      {ACADEMY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Website
                    </h4>
                    <a
                      href={`https://${ACADEMY_INFO.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white hover:text-accent transition-colors mt-1 block"
                    >
                      {ACADEMY_INFO.website}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Academy Address
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1 leading-relaxed">
                      {ACADEMY_INFO.address}
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-700/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Working Days: Mon – Sat</span>
                <span className="text-slate-300">Hyderabad, TS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/80">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Send an Admission Enquiry</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out your details below and our guidance team will assist you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Enquiry Received Successfully!</h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. We have registered your enquiry for <strong>{formData.course}</strong>. Our counselor will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', phone: '', email: '', course: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.fullName
                          ? 'border-secondary focus:ring-2 focus:ring-secondary/20'
                          : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-secondary mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9704878385"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-secondary focus:ring-2 focus:ring-secondary/20'
                            : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-secondary mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                          errors.email
                            ? 'border-secondary focus:ring-2 focus:ring-secondary/20'
                            : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-secondary mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Course Selection <span className="text-secondary">*</span>
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-white transition-all ${
                        errors.course
                          ? 'border-secondary focus:ring-2 focus:ring-secondary/20'
                          : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                      }`}
                    >
                      <option value="">-- Select Course of Interest --</option>
                      <optgroup label="Paramedical Courses">
                        {COURSES_DATA.filter((c) => c.category === 'paramedical').map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Healthcare Courses">
                        {COURSES_DATA.filter((c) => c.category === 'healthcare').map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Vocational Courses">
                        {COURSES_DATA.filter((c) => c.category === 'vocational').map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Additional Programs">
                        {COURSES_DATA.filter((c) => c.category === 'additional').map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.course && (
                      <p className="text-xs text-secondary mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.course}</span>
                      </p>
                    )}
                  </div>

                  {/* Message / Remarks */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write any questions regarding admission or eligibility..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Your information is confidential and will only be used for admission consultation.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
