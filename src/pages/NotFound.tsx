
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold font-mono">404</h1>
          <p className="text-xl text-muted-foreground mt-4 mb-8">
            This page has been secured and is not accessible.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
