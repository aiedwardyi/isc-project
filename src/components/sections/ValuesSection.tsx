import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Scale, Shield, Handshake, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Peace & Human Dignity',
    description: 'Upholding respect for all people and cultures as the foundation of every program.',
    color: 'sky',
  },
  {
    icon: Scale,
    title: 'Neutrality & Cultural Respect',
    description: 'Operating independently of political agendas while honoring cultural diversity and local traditions.',
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Transparency & Accountability',
    description: 'Maintaining responsible governance, ethical standards, and clear operational processes.',
    color: 'sky',
  },
  {
    icon: Handshake,
    title: 'Partnership & Collaboration',
    description: 'Working closely with international organizations, institutions, and communities to achieve shared goals.',
    color: 'gold',
  },
  {
    icon: Award,
    title: 'Professional Execution',
    description: 'Delivering programs that meet international standards in planning, operations, and implementation.',
    color: 'sky',
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Parallax Background Pattern */}
      <motion.div style={{ y: patternY }} className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--navy)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </motion.div>

      {/* Floating decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-sky/10"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header with subtle parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            What Guides Us
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR CORE VALUES
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The principles that drive every initiative, partnership, and decision we make
          </motion.p>
        </motion.div>

        {/* Values Grid with stagger animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-${value.color} transition-all duration-300 hover:shadow-card ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full' : ''}`}
            >
              {/* Icon with animation */}
              <motion.div 
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${value.color === 'sky' ? 'bg-sky/10 group-hover:bg-sky/20' : 'bg-gold/10 group-hover:bg-gold/20'}`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                >
                  <value.icon className={`w-7 h-7 ${value.color === 'sky' ? 'text-sky' : 'text-gold'}`} />
                </motion.div>
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl text-navy mb-3 group-hover:text-sky transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Hover Accent with animation */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${value.color === 'sky' ? 'bg-glow-gradient' : 'bg-gradient-to-r from-gold/50 to-gold'}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
