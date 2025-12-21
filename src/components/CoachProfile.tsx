import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import { FaCrown, FaDumbbell, FaBolt, FaRunning, FaBrain, FaAppleAlt } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';



interface Stat {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const CoachProfile = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'stats' | 'achievements' | 'moves'>('stats');
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Stats data
  const stats: Stat[] = [
    {
      name: t('coach.stat.strength'),
      value: 95,
      icon: <FaDumbbell className="text-red-400" />,
      color: 'from-red-500 to-red-700',
      description: t('coach.stat.strengthDesc')
    },
    {
      name: t('coach.stat.agility'),
      value: 88,
      icon: <FaBolt className="text-yellow-400" />,
      color: 'from-yellow-400 to-yellow-600',
      description: t('coach.stat.agilityDesc')
    },
    {
      name: t('coach.stat.endurance'),
      value: 92,
      icon: <FaRunning className="text-green-400" />,
      color: 'from-green-400 to-green-600',
      description: t('coach.stat.enduranceDesc')
    },
    {
      name: t('coach.stat.wisdom'),
      value: 97,
      icon: <FaBrain className="text-blue-400" />,
      color: 'from-blue-400 to-blue-600',
      description: t('coach.stat.wisdomDesc')
    }
  ];

  // Achievements data
  const achievements = [
    { title: t('coach.achieve.warriors'), value: '1000+', icon: <FaCrown className="text-purple-400" />, color: 'from-purple-400 to-purple-600' },
    { title: t('coach.achieve.bossFights'), value: '500+', icon: <FaDumbbell className="text-red-400" />, color: 'from-red-400 to-red-600' },
    { title: t('coach.achieve.success'), value: '95%', icon: <FaBolt className="text-green-400" />, color: 'from-green-400 to-green-600' },
    { title: t('coach.expTitle'), value: t('coach.achieve.years'), icon: <FaCrown className="text-yellow-400" />, color: 'from-yellow-400 to-yellow-600' }
  ];

  // Special moves data
  const specialMoves = [
    { name: t('coach.move.form'), description: t('coach.move.formDesc'), icon: <FaBolt className="text-blue-400" /> },
    { name: t('coach.move.nutrition'), description: t('coach.move.nutritionDesc'), icon: <FaAppleAlt className="text-green-400" /> },
    { name: t('coach.move.mind'), description: t('coach.move.mindDesc'), icon: <FaBrain className="text-purple-400" /> },
    { name: t('coach.move.motivation'), description: t('coach.move.motivationDesc'), icon: <FaBolt className="text-orange-400" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-gaming mb-4">
          <span className="text-game-blue">{t('about.title').split(' ')[0]}</span>
          <span className="text-game-white"> {t('coach.title')}</span>
        </h2>
        <p className="text-lg text-game-white/80">{t('about.title')}</p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section - Enhanced Image */}
        <div className="lg:col-span-1 flex items-center justify-center py-4 sm:py-6 lg:py-8">
          <motion.div
            className="relative w-[min(220px,90vw)] h-[min(220px,90vw)] xs:w-[min(260px,80vw)] xs:h-[min(260px,80vw)] sm:w-[min(320px,70vw)] sm:h-[min(320px,70vw)] md:w-[min(380px,50vw)] md:h-[min(380px,50vw)] lg:w-[420px] lg:h-[420px]"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            {/* Hexagonal Frame Animation layers... keeping original visual logic */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full"
                  style={{
                    transform: `rotate(${60 * i + rotation}deg)`,
                    transformOrigin: 'center',
                    border: '2px solid rgba(0,163,255,0.3)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backdropFilter: 'blur(4px)',
                    background: 'linear-gradient(45deg, rgba(0,163,255,0.05), transparent)'
                  }}
                />
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              className="absolute inset-[8%] xs:inset-[10%] sm:inset-[12%] md:inset-[15%] rounded-xl overflow-hidden bg-game-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="/profile_optimized.jpg"
                alt="Coach Profile"
                className="w-full h-full object-cover object-center"
                width={400}
                height={400}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-game-black/80 to-transparent" />
            </motion.div>

            {/* MA Coach Badge */}
            <motion.div
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-game-black/90 px-3 sm:px-4 py-1 sm:py-2 rounded-lg border-2 border-game-blue/50 shadow-lg z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-game-blue font-gaming text-sm sm:text-lg flex items-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl">👑</span>
                <span>{t('coach.role')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats and Achievements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tab Navigation */}
          <div className="flex gap-4">
            {[
              { id: 'stats', label: t('coach.stats') },
              { id: 'achievements', label: t('app.achievements') },
              { id: 'moves', label: t('training.skillTree') }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-lg font-gaming text-lg transition-all
                ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-game-blue to-game-red text-white'
                    : 'bg-black/50 text-game-white/70 hover:bg-black/70'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {activeTab === 'stats' && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {stats.map((stat) => (
                  <Card
                    key={stat.name}
                    interactive
                    className="relative overflow-hidden"
                    onClick={() => setHoveredStat(stat.name)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${stat.color})`,
                        opacity: 0.1
                      }}
                    />
                    <div className="relative z-10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{stat.icon}</span>
                          <span className="font-gaming text-game-white">{stat.name}</span>
                        </div>
                        <span className="font-gaming text-game-blue">{stat.value}/100</span>
                      </div>
                      <div className="h-3 bg-black/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${stat.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <AnimatePresence>
                        {hoveredStat === stat.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-4 p-3 bg-black/50 rounded-lg border border-game-blue/30"
                          >
                            <p className="text-sm text-game-white/90">{stat.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}

            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.title}
                    interactive
                    className="relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${achievement.color})`,
                        opacity: 0.1
                      }}
                    />
                    <div className="relative z-10 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-3xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {achievement.icon}
                          </motion.span>
                          <div>
                            <h3 className="font-gaming text-game-white text-lg">{achievement.title}</h3>
                            <span className="font-gaming text-game-blue text-xl">{achievement.value}</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="h-2 bg-black/30 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1 }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${achievement.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}

            {activeTab === 'moves' && (
              <motion.div
                key="moves"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {specialMoves.map((move) => (
                  <Card
                    key={move.name}
                    interactive
                    className="relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-game-blue/20 to-game-red/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span
                          className="text-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {move.icon}
                        </motion.span>
                        <h3 className="font-gaming text-game-white text-lg">{move.name}</h3>
                      </div>
                      <p className="text-game-white/80 text-sm">{move.description}</p>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-game-blue to-game-red"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;