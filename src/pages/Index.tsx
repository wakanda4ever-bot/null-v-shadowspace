
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CtfSection from '../components/CtfSection';
import MeetupSection from '../components/MeetupSection';
import AboutSection from '../components/AboutSection';
import EventHighlightsSection from '../components/EventHighlightsSection';
import TwitterFeedSection from '../components/TwitterFeedSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <EventHighlightsSection />
        <MeetupSection />
        <CtfSection />
        <AboutSection />
        <TwitterFeedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
