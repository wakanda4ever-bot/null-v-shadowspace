
import React from 'react';
import { Shield, Users, BookOpen, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-mono">About NULL Vijayawada</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            NULL is India's largest open security community. Registered as a non-profit
            society in 2010, we have been organizing meetups and spreading security awareness
            ever since.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="glass p-6 rounded-xl text-center">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-white/10">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium">Open Community</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We are completely open and free for anyone interested in learning about cybersecurity.
            </p>
          </div>

          <div className="glass p-6 rounded-xl text-center">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-white/10">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium">Regular Meetups</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monthly gatherings featuring talks, workshops, and networking opportunities.
            </p>
          </div>

          <div className="glass p-6 rounded-xl text-center">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-white/10">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium">Learning Resources</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Access to tutorials, tools, and guidance from experienced security professionals.
            </p>
          </div>

          <div className="glass p-6 rounded-xl text-center">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-white/10">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium">CTF Competitions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Engaging security challenges designed to test and improve your skills.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-6 text-muted-foreground">
            To spread security awareness and bring together security enthusiasts under a 
            single umbrella to freely share and exchange knowledge and ideas. We believe in 
            the power of community-driven learning and the importance of ethical security practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
