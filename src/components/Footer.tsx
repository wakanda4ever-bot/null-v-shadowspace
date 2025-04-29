
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter font-mono">NULL</span>
              <span className="text-xs font-mono text-muted-foreground ml-2">VIJAYAWADA</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A non-profit open security community dedicated to spreading cybersecurity awareness and knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold">Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/ctf" className="text-muted-foreground hover:text-white transition-colors">
                    CTF Events
                  </Link>
                </li>
                <li>
                  <Link to="/meetups" className="text-muted-foreground hover:text-white transition-colors">
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Stay Connected</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Follow us on social media to stay updated with our latest events and announcements.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NULL Vijayawada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
