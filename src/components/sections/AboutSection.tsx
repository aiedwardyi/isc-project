import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users, Target, Heart } from 'lucide-react';
import unityImage from '@/assets/unity-athletes.jpg';
import unLogo from '@/assets/un-logo.png';
import texasLogo from '@/assets/texas-logo.png';

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const decorY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const stats = [
    { icon: Globe, label: 'Global Reach', value: 'Worldwide' },
    { icon: Users, label: 'Partner Network', value: 'Growing' },
    { icon: Target, label: 'Programs', value: 'Multiple' },
    { icon: Heart, label: 'Impact', value: 'Lasting' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={containerRef} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: decorY }} 
        className="absolute top-0 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        style={{ y: decorY, rotate }} 
        className="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" 
      />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elevated"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={unityImage}
                alt="International athletes showing unity"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Badges with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-6 bg-ice p-4 rounded-xl shadow-card w-28"
            >
              <div className="text-center flex flex-col items-center">
                <img src={unLogo} alt="United Nations" className="w-8 h-8 object-contain mb-1" />
                <p className="text-navy font-display text-sm">UN Partner</p>
                <p className="text-navy/70 text-xs font-medium">#5048</p>
              </div>
            </motion.div>
            
            {/* Texas Nonprofit Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -top-4 -right-4 bg-ice p-4 rounded-xl shadow-card w-28"
            >
              <div className="text-center flex flex-col items-center">
                <img src={texasLogo} alt="Texas Secretary of State" className="w-8 h-8 object-contain mb-1" />
                <p className="text-navy font-display text-sm">TX Nonprofit</p>
                <p className="text-navy/70 text-xs font-medium">#806374700</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side with Parallax */}
          <motion.div style={{ y: contentY }}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6"
                whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--sky) / 0.2)' }}
              >
                Who We Are
              </motion.span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  BUILDING BRIDGES
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gradient-navy block"
                >
                  THROUGH SPORTS
                </motion.span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                NGO International Sports Committee (ISC) is a U.S.-based nonprofit organization 
                dedicated to promoting peace, mutual understanding, and human connection through 
                international sports and entertainment initiatives.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Registered on UNGM (United Nations Global Marketplace) and operating as an 
                Implementing Partner, we focus on the professional planning, execution, and 
                delivery of international programs in collaboration with global partners.
              </motion.p>

              {/* Stats Grid with stagger animation */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <stat.icon className="w-8 h-8 text-sky mx-auto mb-2" />
                    </motion.div>
                    <p className="font-semibold text-navy text-sm">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
