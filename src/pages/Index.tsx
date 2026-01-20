import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import ValuesSection from '@/components/sections/ValuesSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PartnerWithUsSection from '@/components/sections/PartnerWithUsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ValuesSection />
        <WhatWeDoSection />
        <ProcessSection />
        <PartnersSection />
        <PartnerWithUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
