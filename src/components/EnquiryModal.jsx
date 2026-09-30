import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { ACADEMY_INFO, COURSES_DATA } from '../data/courses';

export default function EnquiryModal({ isOpen, onClose, selectedCourse }) {
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
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: typeof selectedCourse === 'string' ? selectedCourse : selectedCourse.name,
      }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.course) newErrors.course = 'Please select a course';
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
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Govt. Regd. AIMS ACADEMY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Course Enquiry</h3>
          <p className="text-xs text-slate-500 mt-1">
            Submit your contact details and our counselor will guide you on eligibility & admission.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-emerald-900">Enquiry Submitted!</h4>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Thank you <strong>{formData.fullName}</strong>. We have registered your inquiry for <strong>{formData.course}</strong>.
            </p>
            <button
              onClick={handleClose}
              className="mt-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-sm hover:bg-emerald-700 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              {errors.fullName && (
                <p className="text-[11px] text-secondary mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9704878385"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              {errors.phone && (
                <p className="text-[11px] text-secondary mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Course Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Course *
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary bg-white"
              >
                <option value="">-- Select Course --</option>
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="text-[11px] text-secondary mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.course}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Additional Questions (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ask any specific question..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Submit Quick Enquiry</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
