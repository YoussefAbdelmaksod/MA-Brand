import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Card from '@/components/Card';
import FitnessScene from '@/components/FitnessScene';
import { FaTrophy, FaStar, FaFire, FaWeightHanging, FaChartLine, FaCalendar } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';

interface Transformation {
  id: string;
  playerName: string;
  beforeImage: string;
  afterImage: string;
  achievement: string;
  durationVal: string;
  weightLostVal: string;
  rank: number;
  xpGained: number;
  program: string;
  testimonial: string;
  badges: string[];
}

// Placeholder data - we'll update the images when you provide them
const transformations: Transformation[] = [
  {
    id: '1',
    playerName: 'Player One',
    beforeImage: '/Clients/Before/client_1.jpeg',
    afterImage: '/Clients/After/client_1.jpeg',
    achievement: 'transformations.achieve.champion',
    durationVal: '12',
    weightLostVal: '15',
    rank: 1,
    xpGained: 5000,
    program: 'transformations.program.elite',
    testimonial: 'transformations.testi.1',
    badges: ['transformations.badge.weight', 'transformations.badge.consistency', 'transformations.badge.elite']
  },
  {
    id: '2',
    playerName: 'Player Two',
    beforeImage: '/Clients/Before/client_2.jpeg',
    afterImage: '/Clients/After/client_2.jpeg',
    achievement: 'transformations.achieve.master',
    durationVal: '16',
    weightLostVal: '18',
    rank: 2,
    xpGained: 4800,
    program: 'transformations.program.warrior',
    testimonial: 'transformations.testi.2',
    badges: ['transformations.badge.fatLoss', 'transformations.badge.king', 'transformations.badge.muscle']
  },
  {
    id: '3',
    playerName: 'Player Three',
    beforeImage: '/Clients/Before/client_3.jpeg',
    afterImage: '/Clients/After/client_3.jpeg',
    achievement: 'transformations.achieve.warrior',
    durationVal: '14',
    weightLostVal: '12',
    rank: 3,
    xpGained: 4600,
    program: 'transformations.program.elite',
    testimonial: 'transformations.testi.3',
    badges: ['transformations.badge.muscle', 'transformations.badge.nutrition', 'transformations.badge.elite']
  },
  {
    id: '4',
    playerName: 'Player Four',
    beforeImage: '/Clients/Before/client_4.jpeg',
    afterImage: '/Clients/After/client_4.jpeg',
    achievement: 'transformations.achieve.legend',
    durationVal: '20',
    weightLostVal: '22',
    rank: 4,
    xpGained: 4400,
    program: 'transformations.program.legendary',
    testimonial: 'transformations.testi.1',
    badges: ['transformations.badge.elite', 'transformations.badge.consistency', 'transformations.badge.fatLoss']
  },
  {
    id: '5',
    playerName: 'Player Five',
    beforeImage: '/Clients/Before/client_5.jpeg',
    afterImage: '/Clients/After/client_5.jpeg',
    achievement: 'transformations.achieve.king',
    durationVal: '15',
    weightLostVal: '14',
    rank: 5,
    xpGained: 4200,
    program: 'transformations.program.warrior',
    testimonial: 'transformations.testi.2',
    badges: ['transformations.badge.consistency', 'transformations.badge.fatLoss', 'transformations.badge.warrior']
  },
  {
    id: '6',
    playerName: 'Player Six',
    beforeImage: '/Clients/Before/client_6.jpeg',
    afterImage: '/Clients/After/client_6.jpeg',
    achievement: 'transformations.achieve.star',
    durationVal: '13',
    weightLostVal: '16',
    rank: 6,
    xpGained: 4000,
    program: 'transformations.program.elite',
    testimonial: 'transformations.testi.3',
    badges: ['transformations.badge.star', 'transformations.badge.consistency', 'transformations.badge.elite']
  },
  // Reused data for others as placeholders
  {
    id: '7',
    playerName: 'Player Seven',
    beforeImage: '/Clients/Before/client_7.jpeg',
    afterImage: '/Clients/After/client_7.jpeg',
    achievement: 'transformations.achieve.master',
    durationVal: '18',
    weightLostVal: '20',
    rank: 7,
    xpGained: 3800,
    program: 'transformations.program.legendary',
    testimonial: 'transformations.testi.1',
    badges: ['transformations.badge.weight', 'transformations.badge.consistency', 'transformations.badge.king']
  },
  {
    id: '8',
    playerName: 'Player Eight',
    beforeImage: '/Clients/Before/client_8.jpeg',
    afterImage: '/Clients/After/client_8.jpeg',
    achievement: 'transformations.achieve.elite',
    durationVal: '14',
    weightLostVal: '15',
    rank: 8,
    xpGained: 3600,
    program: 'transformations.program.warrior',
    testimonial: 'transformations.testi.2',
    badges: ['transformations.badge.dedication', 'transformations.badge.elite', 'transformations.badge.champion']
  },
  {
    id: '9',
    playerName: 'Player Nine',
    beforeImage: '/Clients/Before/client_9.jpeg',
    afterImage: '/Clients/After/client_9.jpeg',
    achievement: 'transformations.achieve.champion',
    durationVal: '16',
    weightLostVal: '17',
    rank: 9,
    xpGained: 3400,
    program: 'transformations.program.elite',
    testimonial: 'transformations.testi.3',
    badges: ['transformations.badge.warrior', 'transformations.badge.nutrition', 'transformations.badge.elite']
  },
  {
    id: '10',
    playerName: 'Player Ten',
    beforeImage: '/Clients/Before/client_10.jpeg',
    afterImage: '/Clients/After/client_10.jpeg',
    achievement: 'transformations.achieve.warrior',
    durationVal: '15',
    weightLostVal: '19',
    rank: 10,
    xpGained: 3200,
    program: 'transformations.program.warrior',
    testimonial: 'transformations.testi.1',
    badges: ['transformations.badge.elite', 'transformations.badge.champion', 'transformations.badge.weight']
  }
];

const rankColors = {
  1: 'from-yellow-400 to-yellow-600',
  2: 'from-gray-300 to-gray-500',
  3: 'from-amber-600 to-amber-800',
};

const TransformationCard = ({ transformation, index }: { transformation: Transformation; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Card
        glowing
        interactive
        className="relative overflow-hidden transform transition-all duration-500 h-full cursor-pointer"
      >
        {/* Rank Badge */}
        <motion.div
          className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 rounded-full 
            bg-gradient-to-r ${rankColors[transformation.rank as keyof typeof rankColors] || 'from-blue-400 to-blue-600'}
            flex items-center justify-center z-20`}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(255,255,255,0.2)',
              '0 0 40px rgba(255,255,255,0.4)',
              '0 0 20px rgba(255,255,255,0.2)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-base sm:text-xl font-gaming text-white">#{transformation.rank}</span>
        </motion.div>

        <div className="p-3 sm:p-6">
          <motion.div
            className="relative w-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front Side */}
            <div className={`relative ${isFlipped ? 'invisible' : 'visible'}`}>
              {/* Before/After Images */}
              <div className="relative h-48 sm:h-64 md:h-80 flex">
                <motion.div
                  className="w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={transformation.beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black/50 px-2 py-1 text-[10px] sm:text-xs font-gaming">
                    {t('transformations.before')}
                  </div>
                </motion.div>
                <motion.div
                  className="w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={transformation.afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-black/50 px-2 py-1 text-[10px] sm:text-xs font-gaming">
                    {t('transformations.after')}
                  </div>
                </motion.div>
              </div>

              {/* Player Info */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xl sm:text-2xl font-gaming text-game-white mb-2">
                  {transformation.playerName}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <FaTrophy className="text-game-gold text-base sm:text-lg" />
                  <span className="text-game-gold font-gaming text-xs sm:text-sm">
                    {t(transformation.achievement)}
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-black/30 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-1 sm:gap-2 text-game-blue">
                      <FaCalendar className="text-xs sm:text-base" />
                      <span className="text-[10px] sm:text-sm font-gaming">{transformation.durationVal} {t('common.weeks')}</span>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-1 sm:gap-2 text-game-red">
                      <FaWeightHanging className="text-xs sm:text-base" />
                      <span className="text-[10px] sm:text-sm font-gaming">{transformation.weightLostVal} {t('common.kg')}</span>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-1 sm:gap-2 text-game-gold">
                      <FaFire className="text-xs sm:text-base" />
                      <span className="text-[10px] sm:text-sm font-gaming">+{transformation.xpGained} XP</span>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {transformation.badges.map((badge, i) => (
                    <motion.span
                      key={i}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-game-blue/20 text-game-blue rounded-full text-[10px] sm:text-xs font-gaming"
                      whileHover={{ scale: 1.1 }}
                    >
                      {t(badge)}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 text-center text-[10px] sm:text-sm text-game-white/60">
                  {t('transformations.tapToSee')}
                </div>
              </div>
            </div>

            {/* Back Side (Journey Details) */}
            <div
              className={`absolute inset-0 bg-black/90 backdrop-blur-md p-4 sm:p-6 ${isFlipped ? 'visible' : 'invisible'}`}
              style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
            >
              <h4 className="text-lg sm:text-xl font-gaming text-game-blue mb-4">{t('transformations.journeyDetails')}</h4>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h5 className="text-base sm:text-lg font-gaming text-game-gold mb-2">{t('transformations.program')}</h5>
                  <p className="text-sm sm:text-base text-game-white/80">{t(transformation.program)}</p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-gaming text-game-gold mb-2">{t('transformations.testimonial')}</h5>
                  <p className="text-sm sm:text-base text-game-white/80 italic">{t(transformation.testimonial)}</p>
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-gaming text-game-gold mb-2">{t('transformations.achievements')}</h5>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center gap-1 sm:gap-2 text-game-blue">
                        <FaChartLine className="text-xs sm:text-base" />
                        <span className="text-[10px] sm:text-sm">{t('transformations.achieve.master')}</span>
                      </div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center gap-1 sm:gap-2 text-game-red">
                        <FaFire className="text-xs sm:text-base" />
                        <span className="text-[10px] sm:text-sm">{t('transformations.achieve.champion')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 text-center text-[10px] sm:text-sm text-game-white/60">
                {t('transformations.tapToFlip')}
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

const Transformations = () => {
  const { t } = useLanguage();
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-game-black overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.2)_0%,transparent_70%)] animate-pulse opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_0%,transparent_100%)] animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,163,255,0.1)_0%,rgba(255,0,0,0.1)_25%,rgba(0,163,255,0.1)_50%,rgba(255,0,0,0.1)_75%,rgba(0,163,255,0.1)_100%)] animate-spin-slow opacity-30" />

        {/* Background Scene */}
        <div className="fixed inset-0 pointer-events-none">
          <FitnessScene />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-20 sm:pt-32 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-gaming font-bold mb-4 sm:mb-8 relative inline-block">
                {t('transformations.title')}
                <motion.div
                  className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 text-2xl sm:text-4xl text-game-gold"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaStar />
                </motion.div>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-game-white/90 max-w-3xl mx-auto px-4">
                {t('transformations.subtitle')}
              </p>
            </motion.div>

            {/* Transformations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {transformations.map((transformation, index) => (
                <TransformationCard
                  key={transformation.id}
                  transformation={transformation}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Transformations;