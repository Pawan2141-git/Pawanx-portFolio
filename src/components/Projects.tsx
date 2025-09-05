import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, Star, Code2, Zap } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  liveUrl?: string;
  githubUrl: string;
  tech: string[];
  category: string;
  gradient: string;
  bgColor: string;
  featured: boolean;
  status: string;
  image?: string;
  imageAlt?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const Projects = () => {
  const projects = [
    {
      title: 'ElderHelp.ai',
      subtitle: 'Elder Care Management Platform',
      description: 'A comprehensive React + Node.js application for elder care with dashboard, volunteer management, and medicine delivery.',
      longDescription: 'ElderHelp.ai is a complete elder care ecosystem that connects seniors with volunteers and healthcare providers. Features real-time messaging, appointment scheduling, and emergency response systems.',
      liveUrl: 'https://elderhelp-ai.vercel.app/',
      githubUrl: 'https://github.com/Pawan2141-git/ElderHelp-ai',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/20',
      featured: true,
      status: 'Live',
      image: '/assets/projects/elderhelp-ai.jpg', // Add your ElderHelp.ai screenshot here
      imageAlt: 'ElderHelp.ai Healthcare Dashboard',
    },
    {
      title: 'Salon Booking Website',
      subtitle: 'Modern Appointment System', 
      description: 'A modern salon booking system with premium UI design and appointment scheduling.',
      longDescription: 'A sleek, responsive salon booking platform featuring real-time availability, service customization, and integrated payment processing with beautiful animations.',
      liveUrl: 'https://salon-booking-website.vercel.app/',
      githubUrl: 'https://github.com/Pawan2141-git/salon-booking-website',
      tech: ['React', 'TailwindCSS', 'JavaScript'],
      category: 'Frontend',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
      featured: false,
      status: 'Live',
      image: '/assets/projects/salon-booking.jpg', // Add your Salon Booking Website screenshot here
      imageAlt: 'Modern Salon Booking Interface',
    },
    {
      title: 'Aria AI Chatbot',
      subtitle: 'Voice-Powered Assistant',
      description: 'Voice and text-powered chatbot leveraging GPT API for natural conversations.',
      longDescription: 'An intelligent conversational AI that supports both voice and text input, featuring natural language processing and context-aware responses powered by advanced GPT models.',
      liveUrl: 'https://aria-ai-chatbot.vercel.app/',
      githubUrl: 'https://github.com/Pawan2141-git/Aria-ai-chatbot',
      tech: ['React', 'GPT API', 'Web Speech API'],
      category: 'AI/ML',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
      featured: true,
      status: 'Live',
      image: '/assets/projects/aria-chatbot.jpg', // Add your Aria AI Chatbot screenshot here
      imageAlt: 'Aria AI Chatbot Interface',
    },
    {
      title: 'Harry Potter Invisible Cloak',
      subtitle: 'Computer Vision Magic',
      description: 'Fun Python project using OpenCV for computer vision that creates magical invisible cloak effect.',
      longDescription: 'A computer vision project that recreates the magical invisible cloak effect from Harry Potter using real-time background subtraction and color detection algorithms.',
      githubUrl: 'https://github.com/Pawan2141-git/harry-potter-invible-cloat',
      tech: ['Python', 'OpenCV', 'Computer Vision'],
      category: 'Computer Vision',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-900/20',
      featured: false,
      status: 'Demo',
      image: '/assets/projects/invisible-cloak.jpg', // Add your Invisible Cloak demo screenshot here
      imageAlt: 'Computer Vision Invisible Cloak Demo',
    },
    {
      title: 'Modern Portfolio Website',
      subtitle: 'Interactive Developer Portfolio',
      description: 'A cutting-edge portfolio website built with React, TypeScript, and Framer Motion featuring glassmorphism UI and smooth animations.',
      longDescription: 'This modern portfolio showcases advanced web development skills with React 18, TypeScript, Tailwind CSS, and Framer Motion. Features include particle backgrounds, glassmorphism effects, responsive design, and smooth scrolling navigation.',
      liveUrl: 'https://pawanx-portfolio.vercel.app/',
      githubUrl: 'https://github.com/Pawan2141-git/Pawanx-portFolio',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'Frontend',
      gradient: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
      featured: true,
      status: 'Live',
      image: '/assets/projects/portfolio-website.jpg',
      imageAlt: 'Modern Portfolio Website Interface',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Code2 className="text-blue-400" size={20} />
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400">
                Portfolio Showcase
              </span>
              <Zap className="text-purple-400" size={20} />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Featured</span>{' '}
              <span className="text-white">Projects</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Explore my collection of innovative projects showcasing modern web development,
              AI integration, and creative problem-solving with cutting-edge technologies.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{projects.length}+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{projects.filter(p => p.status === 'Live').length}+</div>
                <div className="text-sm text-gray-500">Live Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{projects.reduce((acc, p) => acc + p.tech.length, 0)}+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </div>
            </motion.div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-400 mb-6">
                Check out my GitHub for more projects and open-source contributions.
              </p>
              <motion.a
                href="https://github.com/Pawan2141-git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Github size={20} />
                <span>View All Projects</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/Pawan2141-git/Pawanx-portFolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-yellow-500/50 text-yellow-400 font-semibold rounded-xl hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 group"
              >
                <Star size={20} className="group-hover:fill-current transition-all duration-300" />
                <span>Star This Project</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Enhanced Card */}
      <div className={`relative glass-hover rounded-2xl overflow-hidden ${project.bgColor} border border-white/10 h-full flex flex-col transition-all duration-500 hover:border-white/20`}>
        {/* Background Image */}
        {project.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 group-hover:opacity-20 transition-all duration-500"
            style={{ 
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(0.5px)' 
            }}
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
        )}
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-gray-900/40"></div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
        
        {/* Status Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-400"
            >
              <Star size={12} fill="currentColor" />
              <span className="font-semibold">Featured</span>
            </motion.div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-current rounded-full text-xs font-semibold text-white/90`}>
                  {project.category}
                </span>
                <span className={`px-2 py-1 ${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30'} border rounded-md text-xs font-medium`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 font-medium mb-4">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 flex-1">
            <motion.p 
              className="text-gray-300 leading-relaxed mb-4"
              animate={{ height: 'auto' }}
            >
              {isExpanded ? project.longDescription : project.description}
            </motion.p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group/btn"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <ChevronDown 
                size={16} 
                className={`transform transition-all duration-200 group-hover/btn:translate-x-1 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                  className="px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group/btn`}
              >
                <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                <span>Live Demo</span>
              </motion.a>
            )}
            
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-6 py-3 glass border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group/btn"
            >
              <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>View Code</span>
            </motion.a>
          </div>
        </div>
        
        {/* Enhanced Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 pointer-events-none`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default Projects;