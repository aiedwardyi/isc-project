import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users, Target, Heart } from 'lucide-react';
import unityImage from '@/assets/unity-athletes.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Globe, label: 'Global Reach', value: 'Worldwide' },
    { icon: Users, label: 'Partner Network', value: 'Growing' },
    { icon: Target, label: 'Programs', value: 'Multiple' },
    { icon: Heart, label: 'Impact', value: 'Lasting' },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={unityImage}
                alt="International athletes showing unity"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-ice p-6 rounded-xl shadow-card"
            >
              <div className="text-center">
                <p className="text-navy font-display text-4xl">UNGM</p>
                <p className="text-navy/70 text-sm font-medium">Registered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6">
              Who We Are
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
              BUILDING BRIDGES
              <br />
              <span className="text-gradient-navy">THROUGH SPORTS</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              NGO International Sports Committee (ISC) is a U.S.-based nonprofit organization 
              dedicated to promoting peace, mutual understanding, and human connection through 
              international sports and entertainment initiatives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Registered on UNGM (United Nations Global Marketplace) and operating as an 
              Implementing Partner, we focus on the professional planning, execution, and 
              delivery of international programs in collaboration with global partners.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-sky mx-auto mb-2" />
                  <p className="font-semibold text-navy text-sm">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
