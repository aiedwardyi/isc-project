import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, Shield, DollarSign, Trophy, Megaphone, ChevronDown, Globe } from 'lucide-react';
import logoSymbol from '@/assets/logo-symbol.png';

const divisions = [
  {
    title: 'Executive Office',
    leader: 'Edward Yi',
    role: 'Chairman / President',
    icon: Building2,
    responsibilities: [],
  },
  {
    title: 'Governance & Compliance Office',
    leader: 'Mark Johnson',
    icon: Shield,
    responsibilities: ['Legal Affairs', 'Ethics & Risk Control', 'Compliance Officer (N/Firm)'],
  },
  {
    title: 'Finance & Sponsorship Division',
    leader: 'David Hersavec',
    icon: DollarSign,
    responsibilities: ['Investment Management', 'Sponsorship Contracts', 'Central Accounting & Audit'],
  },
  {
    title: 'Tournament & Operations',
    leader: 'John Miller',
    icon: Trophy,
    responsibilities: ['Competition Planning', 'Logistics & Security Coordination', 'International Match Operations'],
  },
  {
    title: 'Media Division',
    leader: 'Sarah Williams',
    icon: Megaphone,
    responsibilities: ['Global Media Relations', 'Official Statements & Press', 'Branding & Messaging Control'],
  },
];

const supportOffices = [
  { name: 'China Support Office', code: 'CN' },
  { name: 'Japan Support Office', code: 'JP' },
  { name: 'Russia Support Office', code: 'RU' },
  { name: 'Europe Support Office', code: 'EU' },
  { name: 'Other National Support Offices', code: '🌍' },
];

const OrganizationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.6 },
    },
  };


  return (
    <section
      ref={containerRef}
      id="organization"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-navy via-navy/95 to-navy"
    >
      {/* Animated Background Grid */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-5"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sky/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky/10 border border-sky/20 rounded-full text-sky text-sm font-medium tracking-wider mb-6">
            OUR STRUCTURE
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice mb-6">
            GLOBAL ORGANIZATION
          </h2>
          <p className="text-ice/60 text-lg max-w-2xl mx-auto">
            ISC's governance structure ensures effective leadership and coordination across all divisions and international offices.
          </p>
        </motion.div>

        {/* Organization Chart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Top Logo & Title */}
          <motion.div variants={cardVariants} className="text-center mb-8">
            <div className="inline-flex items-center gap-4 mb-4">
              <img src={logoSymbol} alt="ISC Logo" className="h-16 w-auto" />
              <div className="text-left">
                <h3 className="font-display text-2xl md:text-3xl text-ice">ISC</h3>
                <p className="text-ice/60 text-sm">International Sports Committee</p>
              </div>
            </div>
          </motion.div>

          {/* Headquarters Banner */}
          <motion.div
            variants={cardVariants}
            className="relative mb-12"
          >
            <div className="bg-gradient-to-r from-sky/20 via-sky/30 to-sky/20 border border-sky/30 rounded-xl py-4 px-8 text-center backdrop-blur-sm">
              <h4 className="font-display text-xl md:text-2xl text-ice tracking-wider">
                ISC HEADQUARTERS (USA)
              </h4>
            </div>
            
            {/* Vertical connecting line - Desktop */}
            <motion.div
              variants={lineVariants}
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-sky/50 to-sky/20 origin-top"
            />
          </motion.div>

          {/* Horizontal connecting line - Desktop */}
          <motion.div
            variants={cardVariants}
            className="hidden lg:block relative h-0.5 bg-gradient-to-r from-transparent via-sky/30 to-transparent mb-8 mx-8"
          >
            {/* Vertical lines to each card */}
            {divisions.map((_, index) => (
              <motion.div
                key={index}
                variants={lineVariants}
                className="absolute top-0 w-0.5 h-8 bg-sky/30 origin-top"
                style={{ left: `${10 + index * 20}%` }}
              />
            ))}
          </motion.div>

          {/* Division Cards - Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-16">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-xl p-5 hover:border-sky/30 hover:bg-ice/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sky/20 rounded-lg flex items-center justify-center group-hover:bg-sky/30 transition-colors">
                      <Icon className="w-5 h-5 text-sky" />
                    </div>
                  </div>
                  <h5 className="font-display text-sm text-ice mb-2 leading-tight">
                    {division.title}
                  </h5>
                  <p className="text-sky text-xs font-medium mb-3">{division.leader}</p>
                  {division.role && (
                    <p className="text-ice/50 text-xs mb-3">{division.role}</p>
                  )}
                  {division.responsibilities.length > 0 && (
                    <ul className="space-y-1">
                      {division.responsibilities.map((resp, i) => (
                        <li key={i} className="text-ice/40 text-xs flex items-start gap-2">
                          <span className="w-1 h-1 bg-sky/50 rounded-full mt-1.5 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Division Cards - Mobile Accordion */}
          <div className="lg:hidden space-y-3 mb-12">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sky/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-sky" />
                      </div>
                      <div>
                        <h5 className="font-display text-sm text-ice">{division.title}</h5>
                        <p className="text-sky text-xs">{division.leader}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-ice/50 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      {division.role && (
                        <p className="text-ice/50 text-xs mb-3">{division.role}</p>
                      )}
                      {division.responsibilities.length > 0 && (
                        <ul className="space-y-2">
                          {division.responsibilities.map((resp, i) => (
                            <li key={i} className="text-ice/60 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-sky/50 rounded-full mt-1.5 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* National Support Offices */}
          <motion.div variants={cardVariants} className="mb-8">
            <div className="bg-gradient-to-r from-sky/20 via-sky/30 to-sky/20 border border-sky/30 rounded-xl py-3 px-6 text-center backdrop-blur-sm mb-8">
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 text-sky" />
                <h4 className="font-display text-lg md:text-xl text-ice tracking-wider">
                  NATIONAL SUPPORT OFFICES <span className="text-ice/60 font-sans text-sm">(Non-Representative)</span>
                </h4>
              </div>
            </div>

            {/* Support Office Cards */}
            <div className="flex flex-wrap justify-center gap-3">
              {supportOffices.map((office, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-ice/5 backdrop-blur-sm border border-ice/10 rounded-lg p-4 text-center hover:border-sky/30 hover:bg-ice/10 transition-all duration-300 w-40 md:w-44"
                >
                  <span className="text-xl mb-2 block text-ice font-display">{office.code}</span>
                  <p className="text-ice text-xs font-medium">{office.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div variants={cardVariants} className="text-center max-w-4xl mx-auto space-y-2">
            <p className="text-ice/50 text-xs italic">
              All authority, representation, contracts, and financial control are exclusively vested in ISC Headquarters (USA).
            </p>
            <p className="text-ice/50 text-xs italic">
              National Support Offices perform administrative and support functions only, with no representative or contractual authority.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationSection;
