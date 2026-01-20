import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wider uppercase mb-6">
            Get In Touch
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            CONTACT US
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            For partnership inquiries, program collaboration, or general information, 
            please reach out through our official communication channels.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-sky/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky/10 group-hover:bg-sky/20 transition-colors mb-4">
                <Mail className="w-7 h-7 text-sky" />
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">info@ngo-isc.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-sky/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky/10 group-hover:bg-sky/20 transition-colors mb-4">
                <MapPin className="w-7 h-7 text-sky" />
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">United States</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-sky/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky/10 group-hover:bg-sky/20 transition-colors mb-4">
                <Globe className="w-7 h-7 text-sky" />
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">UNGM Registered</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
