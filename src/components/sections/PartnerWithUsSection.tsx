import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const opportunities = [
  'Program and project partnerships',
  'Implementation and operational support roles',
  'Sponsorship and philanthropic collaboration',
  'Media and communications partnerships',
  'Community-based cooperation initiatives',
];

const PartnerWithUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="partner" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative container mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-ice/10 backdrop-blur-sm border border-ice/20 text-ice text-sm font-semibold tracking-wider uppercase mb-6">
              Join Our Mission
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice mb-6">
              PARTNER WITH US
            </h2>
            <p className="text-lg text-ice/80 max-w-2xl mx-auto leading-relaxed">
              ISC welcomes collaboration with organizations that share our commitment to 
              peace, mutual understanding, and global cooperation.
            </p>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 mb-10"
          >
            <h3 className="font-display text-2xl text-ice mb-6 text-center">
              Partnership Opportunities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-sky flex-shrink-0" />
                  <span className="text-ice/90">{opportunity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-ice/70 mb-10"
          >
            Partners benefit from ISC's international network, professional execution 
            capabilities, and alignment with globally recognized humanitarian values.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;
