
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 95, color: 'text-neon-blue' },
    { name: 'JavaScript', level: 90, color: 'text-neon-cyan' },
    { name: 'React', level: 88, color: 'text-neon-purple' },
    { name: 'Node.js', level: 85, color: 'text-neon-pink' },
    { name: 'AI/ML', level: 82, color: 'text-neon-blue' },
    { name: 'Web3', level: 78, color: 'text-neon-cyan' },
    { name: 'TypeScript', level: 80, color: 'text-neon-purple' },
    { name: 'MongoDB', level: 75, color: 'text-neon-pink' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-white/10"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-lg font-semibold ${skill.color}`}>
                    {skill.name}
                  </span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;