import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/layout/footer';
import HeroSection from '@features/home/components/hero-section';
import FeaturesSection from '@features/home/components/features-section';
import HowItWorksSection from '@features/home/components/how-it-works-section';
import TestimonialsSection from '@features/home/components/testimonials-section';
import CTASection from '@features/home/components/cta-section';
import NavBar from '@components/layout/nav-bar';
import TopBar from '@components/common/top-bar';

function HomePage() {
  useEffect(() => {
    document.title = 'EasyTax - Simplify Your Tax Filing';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBar />

      <header className="bg-gradient-to-t from-pink-300 via-pink-700 to-darkPink-900">
        <div className="container mx-auto px-4">
          <NavBar theme="light" transparent />
          <HeroSection />
        </div>
      </header>

      <main>
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;