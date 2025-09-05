import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, Eye } from 'lucide-react';

interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
}

const GitHubStarWidget = () => {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0, watchers: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    
    // Fetch GitHub stats (optional - you can remove this if you don't want API calls)
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Pawan2141-git/Pawanx-portFolio');
        if (response.ok) {
          const data = await response.json();
          setStats({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0
          });
        }
      } catch (error) {
        console.log('GitHub API rate limited or error fetching stats');
        // Use default values if API fails
        setStats({ stars: 1, forks: 0, watchers: 1 });
      }
    };

    fetchStats();
    return () => clearTimeout(timer);
  }, []);

  const handleStarClick = () => {
    window.open('https://github.com/Pawan2141-git/Pawanx-portFolio', '_blank');
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="glass border border-white/20 rounded-xl p-4 backdrop-blur-md bg-gray-900/80">
        <div className="text-center mb-3">
          <h3 className="text-sm font-semibold text-white mb-2">⭐ Star this project!</h3>
          <div className="flex flex-col gap-2 text-xs text-gray-400">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400" />
                <span>Stars</span>
              </div>
              <span className="text-yellow-400 font-semibold">{stats.stars}</span>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <GitBranch size={12} className="text-blue-400" />
                <span>Forks</span>
              </div>
              <span className="text-blue-400 font-semibold">{stats.forks}</span>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <Eye size={12} className="text-green-400" />
                <span>Watching</span>
              </div>
              <span className="text-green-400 font-semibold">{stats.watchers}</span>
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStarClick}
          className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <Star size={16} className="fill-current" />
          Star on GitHub
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GitHubStarWidget;