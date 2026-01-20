import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Music, Users, Settings } from 'lucide-react';
import youthImage from '@/assets/youth-sports.jpg';

const services = [
  {
    icon: Trophy,
    title: 'International Sports Event Development',
    description: 'ISC plans and operates international sports events in collaboration with partner organizations. Our work includes event design, operational planning, coordination, and on-site execution in accordance with international standards.',
  },
  {
    icon: Music,
    title: 'Entertainment & Cultural Initiatives for Peace',
    description: 'We develop entertainment-based programs—such as cultural events, performances, and global campaigns—that communicate messages of peace, understanding, and unity to broad audiences.',
  },
  {
    icon: Users,
    title: 'Youth & Community Exchange Programs',
    description: 'ISC facilitates youth and community-focused exchange initiatives that integrate sports, leadership development, and cultural education to encourage cross-cultural understanding and long-term cooperation.',
  },
  {
    icon: Settings,
    title: 'Implementation & Operational Support',
    description: 'As an implementing partner, ISC supports partners by transforming program concepts into fully executed initiatives. This includes project design, operational frameworks, logistics coordination, and post-project evaluation.',
  },
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const listX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="services" ref={containerRef} className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Floating background elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-navy/10"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Work
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WHAT WE DO
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive programs designed to foster peace through sports and culture
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Services List with stagger animation */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            style={{ x: listX }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="group flex gap-6 p-6 rounded-2xl bg-card hover:bg-ice border border-transparent hover:border-sky/20 transition-all duration-300 hover:shadow-card"
              >
                <motion.div 
                  className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy/10 group-hover:bg-navy/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-navy" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl text-navy mb-2 group-hover:text-sky transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elevated"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={youthImage}
                alt="Youth sports programs"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-ice font-display text-2xl">Youth Programs</p>
                <p className="text-ice/80 text-sm">Building tomorrow's global leaders</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
