
import React from 'react';
import { Link } from 'react-router-dom';

const CTF_EVENTS = [
  {
    id: 1,
    title: "Web Exploitation Challenge",
    date: "May 15, 2025",
    difficulty: "Intermediate",
    description: "Tackle various web vulnerabilities including XSS, CSRF, and SQL injection in this intermediate level CTF.",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Cryptography & Steganography",
    date: "June 10, 2025",
    difficulty: "Beginner",
    description: "Learn the basics of cryptographic challenges and hidden data techniques in this beginner-friendly event.",
    registrationOpen: true,
  },
  {
    id: 3,
    title: "Network Security Challenge",
    date: "July 5, 2025",
    difficulty: "Advanced",
    description: "Advanced network security challenges including packet analysis, network protocols, and more.",
    registrationOpen: false,
  },
];

const CtfCard = ({ event }) => {
  return (
    <div className="card h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            event.difficulty === "Beginner" 
              ? "bg-green-500/20 text-green-300" 
              : event.difficulty === "Intermediate"
              ? "bg-yellow-500/20 text-yellow-300"
              : "bg-red-500/20 text-red-300"
          }`}>
            {event.difficulty}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{event.date}</p>
        <p className="mt-4 text-sm">{event.description}</p>
      </div>
      <div className="mt-6">
        {event.registrationOpen ? (
          <Link to={`/ctf/${event.id}`} className="btn-primary w-full text-center">
            Register Now
          </Link>
        ) : (
          <button disabled className="w-full py-2 px-4 rounded-md bg-muted text-muted-foreground cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};

const CtfSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-mono">Upcoming CTF Events</h2>
          <p className="mt-4 text-muted-foreground">
            Test your skills in our cybersecurity challenges and compete with other security enthusiasts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CTF_EVENTS.map((event) => (
            <CtfCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/ctf" className="btn-outline">
            View All CTF Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtfSection;
