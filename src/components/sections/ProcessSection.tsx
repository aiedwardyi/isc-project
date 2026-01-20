import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Play, BarChart3, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Needs Assessment',
    description: 'Identification of objectives, stakeholders, impact goals, and operational requirements.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Program Design',
    description: 'Development of implementation plans, timelines, governance structures, and performance indicators.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Implementation',
    description: 'On-site execution, coordination, risk management, and operational oversight.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Measurement & Evaluation',
    description: 'Assessment of outcomes, impact indicators, and operational effectiveness.',
  },
  {
    number: '05',
    icon: FileText,
    title: 'Reporting & Review',
    description: 'Transparent reporting to partners and stakeholders, with continuous improvement processes.',
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-navy-gradient overflow-hidden">
      {/* Parallax Decorative Grid */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--ice)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--ice)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-sky/40"
          style={{
            left: `${5 + (i * 7) % 90}%`,
            top: `${10 + (i * 11) % 80}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 10, -10],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
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
            className="inline-block px-4 py-2 rounded-full bg-ice/10 text-ice text-sm font-semibold tracking-wider uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Approach
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              HOW WE OPERATE
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-ice/70 max-w-2xl mx-auto"
          >
            A structured and professional approach to program execution
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-sky/50 to-transparent"
              style={{ width: lineWidth }}
            />
          </div>

          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                className="relative text-center"
              >
                {/* Number Badge with glow effect */}
                <motion.div 
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy border-2 border-sky/30 mb-6 shadow-glow"
                  whileHover={{ 
                    boxShadow: '0 0 30px hsl(var(--sky) / 0.5)',
                    borderColor: 'hsl(var(--sky))',
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border border-sky/20"
                    style={{ borderStyle: 'dashed' }}
                  />
                  <step.icon className="w-8 h-8 text-sky" />
                  <motion.span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sky flex items-center justify-center text-navy-deep font-bold text-sm"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}
                  </motion.span>
                </motion.div>

                <h3 className="font-display text-xl text-ice mb-3">
                  {step.title}
                </h3>
                <p className="text-ice/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
