import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--navy)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-semibold tracking-wider uppercase mb-6">
            What Guides Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            OUR CORE VALUES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that drive every initiative, partnership, and decision we make
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-${value.color} transition-all duration-300 hover:shadow-card ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full' : ''}`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${value.color === 'sky' ? 'bg-sky/10 group-hover:bg-sky/20' : 'bg-gold/10 group-hover:bg-gold/20'}`}>
                <value.icon className={`w-7 h-7 ${value.color === 'sky' ? 'text-sky' : 'text-gold'}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-navy mb-3 group-hover:text-sky transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity ${value.color === 'sky' ? 'bg-glow-gradient' : 'bg-gradient-to-r from-gold/50 to-gold'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
