import React from 'react';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import VerticalMarketsSection from './VerticalMarketsSection';
import PartnerBrandsSection from './PartnerBrandsSection';
import ContactSection from './ContactSection';
import Footer from '../Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />

      <div className="py-16 bg-gray-100">
        <ProductCard />
        <div className="second-section py-16">
          <VerticalMarketsSection />
        </div>
      </div>

      <PartnerBrandsSection />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
