import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-16"></div>

          <div className="glass p-8 rounded-xl border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm <span className="text-neon-blue font-semibold">Pawan Pal</span> from India 🇮🇳, 
              passionate about AI/ML, Web3, and full-stack development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I love building real-world impactful projects, exploring cutting-edge technologies, 
              and contributing to open-source communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;