import React from 'react';
import HeroSection from './Hero';
import ProductCard from './ProductCard';
import VerticalMarketsSection from './VericalMarket';
import PartnerBrandsSection from './PartnerBrands';
import ContactSection from './Contact';
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
