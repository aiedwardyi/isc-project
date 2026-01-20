import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-stadium.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import unLogo from '@/assets/un-logo.png';
import { useRef, useState } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback Background Image (shows while video loads) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          opacity: videoLoaded ? 0 : 1,
        }}
      />
      
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 scale-110"
        style={{ y: backgroundY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-overlay-gradient" />
      
      {/* Cinematic Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 25, 47, 0.4) 100%)'
      }} />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-2 h-2 rounded-full bg-sky/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: textY, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 mt-8"
        >
          <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-ice/10 backdrop-blur-sm border border-ice/20 text-ice text-sm font-medium tracking-wider uppercase">
            <img src={unLogo} alt="United Nations" className="w-6 h-6 object-contain" />
            UN Implementing Partner #5048
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-[11vw] sm:text-6xl md:text-8xl lg:text-9xl text-ice tracking-wide mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block"
          >
            INTERNATIONAL
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gradient block"
          >
            SPORTS COMMITTEE
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-ice/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          Promoting peace, mutual understanding, and human connection 
          through international sports and entertainment initiatives
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero" size="xl" onClick={scrollToAbout}>
              Discover Our Mission
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}>
              Partner With Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-ice/60 hover:text-ice transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
