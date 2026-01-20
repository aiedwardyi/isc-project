import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crosshair, Eye } from 'lucide-react';

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-navy-gradient overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="hsl(var(--sky))"
            strokeWidth="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky/20 rounded-full blur-xl" />
            
            <div className="relative bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-sky/20 mb-6">
                <Crosshair className="w-8 h-8 text-sky" />
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl text-ice mb-4">
                OUR MISSION
              </h3>
              
              <p className="text-ice/80 text-lg leading-relaxed">
                To design and implement international sports and entertainment programs 
                that foster peace, strengthen mutual understanding among nations, and 
                promote universal human values through professionally executed global initiatives.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl" />
            
            <div className="relative bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gold/20 mb-6">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl text-ice mb-4">
                OUR VISION
              </h3>
              
              <p className="text-ice/80 text-lg leading-relaxed">
                A world where nations and communities are connected through sports and culture, 
                transforming dialogue into cooperation and shared humanity into lasting peace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
