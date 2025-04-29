
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const FEATURED_EVENTS = [
  {
    id: 1,
    title: "Pre-Null Meet: Introduction to Cybersecurity",
    type: "Pre-null-meet",
    date: "April 18, 2025",
    image: "/lovable-uploads/358cbbdf-4170-4e05-8ad6-69fad8ca5a4d.png",
    description: "An introductory session for newcomers to learn about cybersecurity fundamentals and the NULL community.",
    highlights: "Over 100 attendees gathered for a comprehensive introduction to cybersecurity concepts and career paths."
  },
  {
    id: 2,
    title: "Humla: Advanced Penetration Testing",
    type: "Humla",
    date: "March 25, 2025",
    image: "/placeholder.svg",
    description: "Hands-on workshop focused on advanced penetration testing techniques and methodologies.",
    highlights: "Security professionals demonstrated real-world penetration testing scenarios and defensive measures."
  },
  {
    id: 3,
    title: "Public Puliya: Open Security Discussion",
    type: "Public Puliya",
    date: "February 12, 2025",
    image: "/placeholder.svg",
    description: "An open forum discussion on current trends and challenges in cybersecurity.",
    highlights: "Industry experts discussed recent security breaches and provided insights on prevention strategies."
  },
  {
    id: 4,
    title: "Workshop: Secure Coding Practices",
    type: "Workshop",
    date: "January 30, 2025",
    image: "/placeholder.svg",
    description: "Interactive workshop on implementing secure coding practices for developers.",
    highlights: "Participants learned to identify and fix common security vulnerabilities in their code."
  },
  {
    id: 5,
    title: "Bachaav: Defensive Security Tactics",
    type: "Bachaav",
    date: "December 15, 2024",
    image: "/placeholder.svg",
    description: "Session focused on defensive security measures and incident response strategies.",
    highlights: "Cybersecurity defenders shared their experience handling real-world security incidents."
  }
];

const EventCard = ({ event }) => {
  return (
    <Card className="glass h-full flex flex-col">
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="text-xs px-2 py-1 glass-dark rounded-full">
            {event.type}
          </span>
        </div>
      </div>
      <CardContent className="py-4 flex-grow">
        <h3 className="text-lg font-semibold line-clamp-2">{event.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
        <p className="mt-4 text-sm line-clamp-3">{event.highlights}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/events/${event.id}`} className="btn-outline w-full text-center">
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

const EventHighlightsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-mono">Event Highlights</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our recent security events and community gatherings
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {FEATURED_EVENTS.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <EventCard event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <Link to="/events" className="btn-outline">
            Browse All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventHighlightsSection;
