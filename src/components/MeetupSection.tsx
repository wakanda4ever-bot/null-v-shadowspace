
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MeetupSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'beginner',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Registration successful!",
      description: "You've been registered for our next meetup.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'beginner',
    });
  };

  const nextMeetupDate = "May 28, 2025";
  const nextMeetupTime = "6:00 PM - 8:30 PM";
  const nextMeetupLocation = "Tech Hub, Vijayawada";
  const nextMeetupTopic = "Introduction to Penetration Testing";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold font-mono">Monthly Meetups</h2>
            <p className="mt-4 text-muted-foreground">
              Join our monthly in-person gatherings to network with like-minded security enthusiasts,
              learn from industry experts, and stay updated with the latest in cybersecurity.
            </p>

            <div className="mt-8 glass p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="text-xl font-medium">Next Meetup</h3>
                  <p className="text-sm text-muted-foreground">{nextMeetupDate}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Topic</h4>
                  <p className="mt-1">{nextMeetupTopic}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Time</h4>
                  <p className="mt-1">{nextMeetupTime}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                  <p className="mt-1">{nextMeetupLocation}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-medium">Register for the Next Meetup</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below to reserve your spot at our next monthly meeting.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full glass-dark rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full glass-dark rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full glass-dark rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="(Optional)"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-1">
                    Experience Level
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full glass-dark rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="beginner">Beginner - New to Security</option>
                    <option value="intermediate">Intermediate - Some Experience</option>
                    <option value="advanced">Advanced - Security Professional</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button type="submit" className="btn-primary w-full">
                    Register for Meetup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;
