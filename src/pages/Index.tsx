
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CtfSection from '../components/CtfSection';
import MeetupSection from '../components/MeetupSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CtfSection />
        <MeetupSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
