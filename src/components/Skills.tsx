
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Cloud, Palette, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, color: 'text-cyan-400' },
        { name: 'TypeScript', level: 85, color: 'text-blue-400' },
        { name: 'JavaScript', level: 92, color: 'text-yellow-400' },
        { name: 'Tailwind CSS', level: 88, color: 'text-teal-400' },
        { name: 'Next.js', level: 82, color: 'text-gray-300' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 88, color: 'text-green-400' },
        { name: 'Python', level: 95, color: 'text-blue-400' },
        { name: 'Express.js', level: 85, color: 'text-gray-300' },
        { name: 'MongoDB', level: 80, color: 'text-green-500' },
        { name: 'PostgreSQL', level: 75, color: 'text-blue-500' },
      ]
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'text-emerald-400' },
        { name: 'TensorFlow', level: 78, color: 'text-orange-400' },
        { name: 'Computer Vision', level: 80, color: 'text-green-400' },
        { name: 'Data Analysis', level: 82, color: 'text-blue-400' },
        { name: 'OpenCV', level: 75, color: 'text-red-400' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 75, color: 'text-orange-400' },
        { name: 'Docker', level: 70, color: 'text-blue-400' },
        { name: 'Git & GitHub', level: 90, color: 'text-gray-300' },
        { name: 'Vercel', level: 85, color: 'text-gray-400' },
        { name: 'CI/CD', level: 72, color: 'text-green-400' },
      ]
    },
    {
      title: 'Web3 & Blockchain',
      icon: Globe,
      color: 'from-yellow-500 to-amber-500',
      skills: [
        { name: 'Solidity', level: 70, color: 'text-gray-300' },
        { name: 'Web3.js', level: 75, color: 'text-orange-400' },
        { name: 'Smart Contracts', level: 72, color: 'text-yellow-400' },
        { name: 'DeFi', level: 68, color: 'text-green-400' },
        { name: 'NFTs', level: 70, color: 'text-purple-400' },
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'UI/UX Design', level: 82, color: 'text-pink-400' },
        { name: 'Figma', level: 78, color: 'text-purple-400' },
        { name: 'Framer Motion', level: 85, color: 'text-blue-400' },
        { name: 'Responsive Design', level: 90, color: 'text-teal-400' },
        { name: 'Design Systems', level: 80, color: 'text-indigo-400' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Skills &</span>{' '}
            <span className="text-white">Technologies</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            A comprehensive overview of my technical expertise across various domains
            of modern software development and emerging technologies.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="glass-hover rounded-2xl p-8 border border-white/10 h-full transition-all duration-500 hover:border-white/20">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 border border-current/20`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className={`font-medium ${skill.color}`}>
                              {skill.name}
                            </span>
                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color} relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
              <p className="text-gray-400 mb-6">
                Let's work together to bring your ideas to life with these cutting-edge technologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;