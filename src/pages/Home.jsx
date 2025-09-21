import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Pricing from '../components/sections/Pricing'; // <-- নতুন কম্পোনেন্ট ইম্পোর্ট করুন
import Contact from '../components/sections/Contact';
import Newsletter from '../components/sections/Newsletter';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import SectionIndicator from '../components/shared/SectionIndicator';

const Home = () => {
  return (
    <main>
      <SectionIndicator />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing /> {/* <-- নতুন প্রাইসিং সেকশনটি এখানে যুক্ত করুন */}
      <FAQ />
      <Contact />
      <Newsletter />
      <CTA />
    </main>
  );
};

export default Home;