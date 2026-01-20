import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Flag, Briefcase, Tv, GraduationCap, Users } from 'lucide-react';
import operationsImage from '@/assets/operations.jpg';

const partnerTypes = [
  { icon: Building2, label: 'International Organizations' },
  { icon: Flag, label: 'Sports Federations' },
  { icon: Users, label: 'Local Authorities' },
  { icon: Briefcase, label: 'Corporate Partners' },
  { icon: Tv, label: 'Media Organizations' },
  { icon: GraduationCap, label: 'Educational Institutions' },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const contentX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imageX = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Floating decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-sky/5"
          style={{
            left: `${10 + i * 16}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side with Parallax */}
          <motion.div style={{ x: contentX }}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Collaboration
              </motion.span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  OUR PARTNERS
                </motion.span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                ISC collaborates with a wide range of stakeholders committed to advancing 
                peace and mutual understanding through sports and cultural engagement.
              </motion.p>

              {/* Partner Types Grid with stagger animation */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {partnerTypes.map((partner, index) => (
                  <motion.div
                    key={partner.label}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      backgroundColor: 'hsl(var(--secondary))',
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 transition-colors cursor-default"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <partner.icon className="w-5 h-5 text-navy flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm font-medium text-navy">{partner.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Side with Parallax */}
          <motion.div 
            style={{ x: imageX, rotate: imageRotate }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-elevated"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={operationsImage}
                  alt="ISC operations and planning"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-sky/20" />
              </motion.div>
              
              {/* Floating Stats with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-6 -left-6 bg-navy p-6 rounded-xl shadow-elevated"
              >
                <p className="text-ice font-display text-3xl">Global</p>
                <p className="text-ice/70 text-sm">Network</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
