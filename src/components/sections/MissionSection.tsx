import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Crosshair, Eye } from 'lucide-react';
import ceoImage from '@/assets/ceo.jpg';

const MissionSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const leftCardX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-navy-gradient overflow-hidden">
      {/* Animated Background Lines with Parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${30 + i * 20} Q25,${20 + i * 15} 50,${30 + i * 20} T100,${30 + i * 20}`}
              stroke="hsl(var(--sky))"
              strokeWidth="0.15"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </svg>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-sky/50"
            style={{
              left: `${10 + (i * 8) % 90}%`,
              top: `${15 + (i * 13) % 70}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission */}
          <motion.div
            style={{ x: leftCardX }}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div 
              className="absolute -top-4 -left-4 w-20 h-20 bg-sky/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <motion.div 
              className="relative bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 h-full"
              whileHover={{ scale: 1.02, borderColor: 'hsl(var(--sky) / 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-sky/20 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Crosshair className="w-8 h-8 text-sky" />
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-4xl text-ice mb-4">
                OUR MISSION
              </h3>
              
              <p className="text-ice/80 text-lg leading-relaxed">
                To design and implement international sports and entertainment programs 
                that foster peace, strengthen mutual understanding among nations, and 
                promote universal human values through professionally executed global initiatives.
              </p>
            </motion.div>
          </motion.div>

          {/* Vision */}
          <motion.div
            style={{ x: rightCardX }}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div 
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            
            <motion.div 
              className="relative bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-10 h-full"
              whileHover={{ scale: 1.02, borderColor: 'hsl(var(--gold) / 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gold/20 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Eye className="w-8 h-8 text-gold" />
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-4xl text-ice mb-4">
                OUR VISION
              </h3>
              
              <p className="text-ice/80 text-lg leading-relaxed">
                A world where nations and communities are connected through sports and culture, 
                transforming dialogue into cooperation and shared humanity into lasting peace.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CEO Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            {/* Background glow */}
            <motion.div 
              className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky/10 rounded-full blur-3xl -translate-y-1/2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* CEO Image */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-br from-sky/30 to-gold/30 rounded-2xl blur-lg"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <img
                    src={ceoImage}
                    alt="CEO of NGO International Sports Committee"
                    className="relative w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-2xl border-2 border-ice/20"
                  />
                </div>
              </motion.div>

              {/* CEO Info */}
              <div className="text-center lg:text-left">
                <motion.p 
                  className="text-sky uppercase tracking-widest text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Leadership
                </motion.p>
                <h3 className="font-display text-3xl md:text-4xl text-ice mb-3">
                  CHIEF EXECUTIVE OFFICER
                </h3>
                <p className="text-ice/80 text-lg leading-relaxed max-w-2xl">
                  Leading our mission to unite nations through the power of sports, 
                  our CEO brings decades of experience in international diplomacy 
                  and sports management to advance global peace initiatives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
