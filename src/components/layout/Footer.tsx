import { motion } from 'framer-motion';
import logoSymbol from '@/assets/logo-symbol.png';
import unLogo from '@/assets/un-logo.png';

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

          {/* UNGM Badge with UN Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-ice/10 border border-ice/20"
          >
            <img src={unLogo} alt="United Nations" className="w-6 h-6 object-contain" />
            <span className="text-ice/80 text-sm font-medium">UNGM Registered Implementing Partner</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-ice/50 text-sm"
          >
            <p>© 2026 NGO International Sports Committee (ISC). All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
