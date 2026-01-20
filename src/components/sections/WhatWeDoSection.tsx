import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wider uppercase mb-6">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            WHAT WE DO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to foster peace through sports and culture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Services List */}
          <div className="lg:col-span-3 space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group flex gap-6 p-6 rounded-2xl bg-card hover:bg-ice border border-transparent hover:border-sky/20 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy/10 group-hover:bg-navy/20 transition-colors">
                  <service.icon className="w-7 h-7 text-navy" />
                </div>
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
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={youthImage}
                alt="Youth sports programs"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-ice font-display text-2xl">Youth Programs</p>
                <p className="text-ice/80 text-sm">Building tomorrow's global leaders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
