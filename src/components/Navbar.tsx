
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter font-mono">NULL</span>
            <span className="text-xs font-mono text-muted-foreground">VIJAYAWADA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/ctf" className="nav-link">CTF Events</Link>
          <Link to="/meetups" className="nav-link">Meetups</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/register" className="btn-primary">
            Join Community
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/"
              className="block py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/ctf"
              className="block py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              CTF Events
            </Link>
            <Link
              to="/meetups"
              className="block py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Meetups
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="block py-2 text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
