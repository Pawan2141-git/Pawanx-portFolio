import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageCircle, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/pawan-pal-28514632a/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Pawan2141-git', label: 'GitHub' },
    { icon: Mail, url: 'mailto:pawannnn2141@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="text-neon-cyan" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 glass border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none text-white placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 glass border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:border-neon-cyan focus:outline-none text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project!"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-neon-blue" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white font-medium">India 🇮🇳</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-neon-cyan" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">pawannnn2141@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Connect with Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="p-4 glass border border-white/10 rounded-lg hover:border-neon-cyan/50 transition-all duration-300 text-center"
                    >
                      <social.icon className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                      <div className="text-white font-medium text-sm">{social.label}</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;