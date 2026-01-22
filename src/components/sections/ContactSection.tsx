import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import unLogo from '@/assets/un-logo.png';
import texasLogo from '@/assets/texas-logo.png';

const ContactSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      value: 'ceo@ngosports.com',
      delay: 0.2,
      type: 'default',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United States',
      delay: 0.3,
      type: 'default',
    },
    {
      icon: null,
      title: 'UN Partner',
      value: 'Registration #5048',
      delay: 0.4,
      type: 'un',
    },
    {
      icon: null,
      title: 'TX Nonprofit',
      value: 'Registration #806374700',
      delay: 0.5,
      type: 'texas',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call when backend is set up)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
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
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              For partnership inquiries, program collaboration, or general information, 
              please reach out through our official communication channels.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-display text-2xl text-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-sky" />
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-sky"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky" />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-sky"
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-sky" />
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-sky min-h-[150px] resize-none"
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy/90 text-ice font-semibold py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-ice/30 border-t-ice rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Cards */}
            <motion.div 
              style={{ y: cardsY }}
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {contacts.map((contact, index) => {
                const isClickable = contact.type === 'un' || contact.type === 'texas';
                const pdfUrl = contact.type === 'un' ? '/UN-Certificate.pdf' : contact.type === 'texas' ? '/TX-State-Certificate.pdf' : undefined;
                
                const CardWrapper = isClickable ? motion.a : motion.div;
                const wrapperProps = isClickable ? {
                  href: pdfUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                } : {};

                return (
                  <CardWrapper
                    key={contact.title}
                    {...wrapperProps}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: '0 20px 40px -10px hsl(var(--sky) / 0.2)',
                    }}
                    className={`p-5 rounded-2xl bg-card border border-border hover:border-sky/30 transition-all duration-300 group ${isClickable ? 'cursor-pointer' : ''}`}
                  >
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky/10 group-hover:bg-sky/20 transition-colors mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {contact.type === 'un' ? (
                          <img src={unLogo} alt="United Nations" className="w-7 h-7 object-contain" />
                        ) : contact.type === 'texas' ? (
                          <img src={texasLogo} alt="Texas Secretary of State" className="w-7 h-7 object-contain" />
                        ) : (
                          contact.icon && <contact.icon className="w-6 h-6 text-sky" />
                        )}
                      </motion.div>
                    </motion.div>
                    <h3 className="font-display text-lg text-navy mb-1">{contact.title}</h3>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </CardWrapper>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
