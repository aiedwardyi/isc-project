import { motion } from 'framer-motion';
import logoSymbol from '@/assets/logo-symbol.png';

const Footer = () => {
  return (
    <footer className="bg-navy-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={logoSymbol}
            alt="ISC Logo"
            className="h-16 w-auto mb-6"
          />
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-ice/80 text-lg max-w-xl mb-8 font-light"
          >
            Promoting peace, mutual understanding, and human connection 
            through international sports and entertainment initiatives.
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ice/30 to-transparent mb-8" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-ice/50 text-sm"
          >
            <p>© 2026 NGO International Sports Committee (ISC). All rights reserved.</p>
            <p className="mt-2">UNGM Registered Implementing Partner</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
