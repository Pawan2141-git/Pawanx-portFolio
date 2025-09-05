
import { motion } from 'framer-motion';

const Experience = () => {
  const timeline = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building modern web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Bachelor in Computer Science',
      company: 'University',
      period: '2020 - 2024',
      description: 'Focused on Computer Science fundamentals, algorithms, and software development.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 font-medium">{item.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full text-xs font-bold text-black">
                    {item.period}
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;