
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Calendar } from 'lucide-react';

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
              <Link to="/ctf" className="btn-outline">
                Explore CTFs
              </Link>
            </div>
          </div>
          <div className="glass rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">CTF Competitions</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Test your skills in our Capture The Flag competitions designed for all skill levels.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">Community Meetups</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Join our monthly meetups to network and learn from security professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">Workshops & Training</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Regular workshops on cybersecurity tools, techniques, and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
