import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6">
              Collaboration
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
              OUR PARTNERS
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ISC collaborates with a wide range of stakeholders committed to advancing 
              peace and mutual understanding through sports and cultural engagement.
            </p>

            {/* Partner Types Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={partner.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <partner.icon className="w-5 h-5 text-navy flex-shrink-0" />
                  <span className="text-sm font-medium text-navy">{partner.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={operationsImage}
                alt="ISC operations and planning"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-sky/20" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -left-6 bg-navy p-6 rounded-xl shadow-elevated"
            >
              <p className="text-ice font-display text-3xl">Global</p>
              <p className="text-ice/70 text-sm">Network</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
