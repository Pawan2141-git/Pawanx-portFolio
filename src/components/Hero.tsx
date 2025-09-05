import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Globe, Star } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'AI/ML Engineer',
    'Full-Stack Developer', 
    'Web3 Enthusiast',
    'Cloud Architect',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText !== currentTitle) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText !== '') {
          setTypedText(currentTitle.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex, titles]);

  const handleDownloadResume = () => {
    window.open('#', '_blank');
  };

  const handleStarRepo = () => {
    window.open('https://github.com/Pawan2141-git/pawanx-portfolio', '_blank');
  };

  const handleHireMe = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 relative"
          >
            <span className="gradient-text font-extrabold">Hi, I'm Pawan Pal</span>
            <motion.span
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
                scale: [1, 1.2, 1.1, 1.2, 1.1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-4 text-6xl"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light h-16 flex items-center justify-center"
          >
            <span className="gradient-text-slow font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions with cutting-edge technologies.
            Turning ideas into reality through code, one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <Mail size={20} />
              Hire Me
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-8 py-4 glass border border-neon-purple/50 text-white font-semibold rounded-lg transition-all duration-300 hover:border-neon-purple flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStarRepo}
              className="px-6 py-4 glass border border-yellow-500/50 text-yellow-400 font-semibold rounded-lg transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 flex items-center gap-2 group"
            >
              <Star size={20} className="group-hover:fill-current transition-all duration-300" />
              Star on GitHub
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Globe, href: 'https://v0-modern-portfolio-ivory.vercel.app/', label: 'Portfolio' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/pawan-pal-28514632a/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/Pawan2141-git', label: 'GitHub' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass border border-white/20 rounded-full text-gray-300 hover:text-neon-cyan transition-all duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;