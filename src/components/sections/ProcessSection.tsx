import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-navy-gradient overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--ice)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--ice)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
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
          <span className="inline-block px-4 py-2 rounded-full bg-ice/10 text-ice text-sm font-semibold tracking-wider uppercase mb-6">
            Our Approach
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ice mb-4">
            HOW WE OPERATE
          </h2>
          <p className="text-lg text-ice/70 max-w-2xl mx-auto">
            A structured and professional approach to program execution
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy border-2 border-sky/30 mb-6 shadow-glow">
                  <step.icon className="w-8 h-8 text-sky" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sky flex items-center justify-center text-navy-deep font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl text-ice mb-3">
                  {step.title}
                </h3>
                <p className="text-ice/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
