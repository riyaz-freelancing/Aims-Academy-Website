import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerSlider from './components/BannerSlider';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course = null) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar onOpenEnquiry={handleOpenModal} />
      
      <main className="grow">
        <Hero onOpenEnquiry={handleOpenModal} />
        <BannerSlider onOpenEnquiry={handleOpenModal} />
        <About />
        <Courses onEnquireCourse={handleOpenModal} />
        <WhyChooseUs />
        <Process onOpenEnquiry={handleOpenModal} />
        <Contact preselectedCourse={selectedCourse} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}
