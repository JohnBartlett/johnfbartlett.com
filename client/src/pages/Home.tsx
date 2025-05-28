import Hero from '@/components/home/Hero';
import ValueProposition from '@/components/home/ValueProposition';
import ServicesOverview from '@/components/home/ServicesOverview';
import IndustriesSection from '@/components/home/IndustriesSection';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = "JF Bartlett & Associates | AI Advisory Consultancy";
  }, []);

  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <IndustriesSection />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
