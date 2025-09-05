
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-transparent" />
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text mb-4">Pawan Pal</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-md mx-auto">
              Full-Stack Developer passionate about AI/ML, Web3, and creating innovative solutions.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              {[
                { icon: Linkedin, url: 'https://www.linkedin.com/in/pawan-pal-28514632a/', label: 'LinkedIn' },
                { icon: Github, url: 'https://github.com/Pawan2141-git', label: 'GitHub' },
                { icon: Mail, url: 'mailto:pawannnn2141@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 glass border border-white/20 rounded-full text-gray-300 hover:text-neon-cyan transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-center md:text-left">
                <p className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                  © 2025 Pawan Pal | Built with 
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-red-500"
                  >
                    <Heart size={16} className="fill-current" />
                  </motion.span>
                  using React & Tailwind
                </p>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 glass border border-white/20 rounded-full text-gray-300 hover:text-neon-cyan transition-all duration-300"
              >
                <ArrowUp size={18} />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;