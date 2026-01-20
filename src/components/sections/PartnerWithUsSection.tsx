import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="partner" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax Background with gradient */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-hero-gradient scale-110" 
      />
      
      {/* Animated glow effects with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-ice/30"
          style={{
            left: `${10 + (i * 8) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div 
        style={{ scale: contentScale }}
        className="relative container mx-auto px-4" 
        ref={ref}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-ice/10 backdrop-blur-sm border border-ice/20 text-ice text-sm font-semibold tracking-wider uppercase mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Join Our Mission
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                PARTNER WITH US
              </motion.span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ice/80 max-w-2xl mx-auto leading-relaxed"
            >
              ISC welcomes collaboration with organizations that share our commitment to 
              peace, mutual understanding, and global cooperation.
            </motion.p>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 mb-10"
          >
            <h3 className="font-display text-2xl text-ice mb-6 text-center">
              Partnership Opportunities
            </h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-sky flex-shrink-0" />
                  </motion.div>
                  <span className="text-ice/90">{opportunity}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-ice/70 mb-10"
          >
            Partners benefit from ISC's international network, professional execution 
            capabilities, and alignment with globally recognized humanitarian values.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerWithUsSection;
