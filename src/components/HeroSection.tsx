
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Calendar } from 'lucide-react';

// Featured upcoming event data 
const UPCOMING_EVENT = {
  id: 1,
  title: "Humla: Advanced Penetration Testing",
  date: "March 25, 2025",
  type: "Humla",
  description: "Join us for an intensive hands-on workshop focused on advanced penetration testing techniques and methodologies."
};

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background bg-circuit-pattern">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tighter">
              <span className="text-gradient">NULL VIJAYAWADA</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              An open security community dedicated to spreading cybersecurity awareness and fostering a culture of ethical hacking and digital security.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">
                Join the Community
              </Link>
              <Link to="/events" className="btn-outline">
                Explore Events
              </Link>
            </div>
          </div>
          <div className="glass rounded-xl p-6 md:p-8">
            <h3 className="font-medium text-xl text-primary mb-4">Upcoming Event</h3>
            <div className="mb-4">
              <span className="text-xs px-2 py-1 glass-dark rounded-full mb-2 inline-block">
                {UPCOMING_EVENT.type}
              </span>
              <h4 className="text-lg font-semibold">{UPCOMING_EVENT.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{UPCOMING_EVENT.date}</p>
            </div>
            <p className="text-sm mb-4">{UPCOMING_EVENT.description}</p>
            <Link to={`/events/${UPCOMING_EVENT.id}`} className="btn-primary inline-block">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
