import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ngo-isc.org',
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United States',
      delay: 0.3,
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: 'UNGM Registered',
      delay: 0.4,
    },
  ];

  return (
    <section id="contact" ref={containerRef} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: decorY }} 
        className="absolute top-0 right-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }} 
        className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" 
      />

      {/* Floating decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sky/10"
          style={{
            left: `${15 + i * 14}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              CONTACT US
            </motion.span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12"
          >
            For partnership inquiries, program collaboration, or general information, 
            please reach out through our official communication channels.
          </motion.p>

          {/* Contact Cards with stagger animation */}
          <motion.div 
            style={{ y: cardsY }}
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px -10px hsl(var(--sky) / 0.2)',
                }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-sky/30 transition-all duration-300 group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky/10 group-hover:bg-sky/20 transition-colors mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <contact.icon className="w-7 h-7 text-sky" />
                  </motion.div>
                </motion.div>
                <h3 className="font-display text-xl text-navy mb-2">{contact.title}</h3>
                <p className="text-muted-foreground text-sm">{contact.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
