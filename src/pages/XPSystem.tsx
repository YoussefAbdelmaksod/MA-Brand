import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { FaGamepad, FaTrophy, FaMedal, FaChartLine, FaCrown, FaGift, FaStar, FaFire, FaShieldAlt, FaGem, FaBullseye } from 'react-icons/fa';
import { GiCrossedSwords, GiLaurelsTrophy } from 'react-icons/gi';
import { useLanguage } from '@/hooks/useLanguage';

const XPSystem = () => {
  const [currentLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const maxXP = 1000;
  const { t } = useLanguage();

  const handleViewArsenal = () => {
    window.location.href = '/services';
  };

  useEffect(() => {
    // Simulate XP progress animation
    const timer = setInterval(() => {
      setCurrentXP(prev => (prev < maxXP ? prev + 5 : prev));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const xpProgress = (currentXP / maxXP) * 100;

  // Themed icons instead of emojis
  const tierIcons = [
    <FaStar className="text-green-400" />,           // Novice
    <GiCrossedSwords className="text-game-red" />,   // Warrior
    <FaBullseye className="text-game-blue" />,       // Elite Trainee
    <FaStar className="text-yellow-400" />,          // Legend
    <FaCrown className="text-game-gold" />,          // Leader
    <FaShieldAlt className="text-purple-400" />,     // Knight
    <FaTrophy className="text-game-red" />,          // Victory Master
    <GiLaurelsTrophy className="text-game-blue" />,  // Champion
    <FaFire className="text-orange-500" />,          // Beast
    <FaStar className="text-game-gold" />,           // Legend Elite
    <FaGem className="text-cyan-400" />,             // Supreme Warrior
    <FaCrown className="text-game-gold" />,          // Captain MA
  ];

  const levelTiers = [
    { level: '1-9', titleKey: 'xp.tier.fitnessNovice', rewardKey: 'xp.reward.gaining' },
    { level: '10-19', titleKey: 'xp.tier.maWarrior', rewardKey: 'xp.reward.warriorTshirt' },
    { level: '20-29', titleKey: 'xp.tier.eliteTrainee', rewardKey: 'xp.reward.hoodie' },
    { level: '30-39', titleKey: 'xp.tier.maLegend', rewardKey: 'xp.reward.specialTshirt' },
    { level: '40-49', titleKey: 'xp.tier.fitnessLeader', rewardKey: 'xp.reward.limitedHoodie' },
    { level: '50-59', titleKey: 'xp.tier.maKnight', rewardKey: 'xp.reward.newDesign' },
    { level: '60-69', titleKey: 'xp.tier.victoryMaster', rewardKey: 'xp.reward.levelHoodie' },
    { level: '70-79', titleKey: 'xp.tier.maChampion', rewardKey: 'xp.reward.exclusiveTshirt' },
    { level: '80-89', titleKey: 'xp.tier.fitnessBeast', rewardKey: 'xp.reward.champHoodie' },
    { level: '90-98', titleKey: 'xp.tier.maLegendElite', rewardKey: 'xp.reward.topTshirt' },
    { level: '99', titleKey: 'xp.tier.supremeWarrior', rewardKey: 'xp.reward.vipHoodie' },
    { level: '100', titleKey: 'xp.tier.captainMA', rewardKey: 'xp.reward.captain' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.2)_0%,transparent_70%)] animate-pulse opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_0%,transparent_100%)] animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,163,255,0.1)_0%,rgba(255,0,0,0.1)_25%,rgba(0,163,255,0.1)_50%,rgba(255,0,0,0.1)_75%,rgba(0,163,255,0.1)_100%)] animate-spin-slow opacity-30" />

        {/* Current Level Display with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gradient-to-br from-black/80 to-black/40 p-8 rounded-2xl border-2 border-game-blue/30 shadow-[0_0_50px_rgba(0,163,255,0.4)] relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-game-blue/10 via-transparent to-game-red/10 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-4xl font-gaming text-game-blue mb-4 animate-glow">{t('xp.currentLevel')}</h2>
              <div className="text-7xl font-gaming text-game-white mb-6 animate-bounce-slow relative">
                {currentLevel}
                <div className="absolute -inset-4 bg-gradient-to-r from-game-blue/20 to-game-red/20 blur-lg animate-pulse" />
              </div>
              <div className="relative w-full h-6 bg-black/50 rounded-full overflow-hidden border-2 border-game-blue/30 p-1">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-game-blue via-white to-game-red relative overflow-hidden"
                  style={{ width: `${xpProgress}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-shimmer"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              <div className="mt-4 text-xl text-game-white/80 font-gaming animate-pulse">
                {currentXP} / {maxXP} XP
              </div>
              <motion.button
                onClick={handleViewArsenal}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,163,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-game-blue/20 border-2 border-game-blue rounded-lg font-gaming text-game-blue hover:bg-game-blue/30 transition-colors"
              >
                {t('xp.viewArsenal')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-game-blue/10 to-game-red/10 blur-xl animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gaming text-game-white mb-6 relative z-10">
            {t('xp.heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-game-white/80 max-w-3xl mx-auto relative z-10">
            {t('xp.heroSubtitle')}
          </p>
        </motion.div>

        {/* How to Earn XP Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card glowing className="p-6 sm:p-8 bg-gradient-to-br from-black/80 to-black/40 border-game-blue/30 hover:border-game-blue/50 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaGamepad className="text-3xl text-game-blue animate-bounce-slow" />
              <h2 className="text-2xl sm:text-3xl font-gaming text-game-white">{t('xp.howToEarnXp')}</h2>
            </div>
            <ul className="space-y-4 text-game-white/80">
              <motion.li
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-2 h-2 mt-2 bg-game-blue rounded-full group-hover:animate-pulse" />
                <p className="group-hover:text-game-blue transition-colors">{t('xp.rule1')}</p>
              </motion.li>
              <motion.li
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-2 h-2 mt-2 bg-game-blue rounded-full group-hover:animate-pulse" />
                <p className="group-hover:text-game-blue transition-colors">{t('xp.rule2')}</p>
              </motion.li>
              <motion.li
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-2 h-2 mt-2 bg-game-blue rounded-full group-hover:animate-pulse" />
                <p className="group-hover:text-game-blue transition-colors">{t('xp.rule3')}</p>
              </motion.li>
              <motion.li
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-2 h-2 mt-2 bg-game-blue rounded-full group-hover:animate-pulse" />
                <p className="group-hover:text-game-blue transition-colors">{t('xp.rule4')}</p>
              </motion.li>
            </ul>
          </Card>
        </motion.section>

        {/* Level Tiers Grid - Clean Responsive Design */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {levelTiers.map((tier, index) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Card
                  glowing
                  interactive
                  className="h-full p-6 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-black/80 to-black/40 border-2 border-game-blue/20 hover:border-game-blue/50"
                >
                  {/* Animated Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-game-blue/5 to-game-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Level Range Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded-lg bg-black/50 border border-game-blue/30 text-game-blue font-gaming text-sm">
                      LVL {tier.level}
                    </div>
                    <div className="text-2xl text-game-white/20 group-hover:text-game-gold transition-colors duration-300">
                      {tierIcons[index]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-black/60 to-black/20 border border-game-blue/30 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,163,255,0.1)]">
                      <div className="text-2xl">
                        {tierIcons[index]}
                      </div>
                    </div>

                    <h3 className="text-xl font-gaming text-game-white mb-3 group-hover:text-game-blue transition-colors duration-300">
                      {t(tier.titleKey)}
                    </h3>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-game-blue/50 to-game-red/50 mx-auto mb-4" />

                    <p className="text-game-white/70 text-sm leading-relaxed group-hover:text-game-white/90 transition-colors duration-300">
                      {t(tier.rewardKey)}
                    </p>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue to-game-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Full Arsenal CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16 text-center"
        >
          <Card
            glowing
            className="inline-block max-w-2xl w-full transform hover:scale-105 transition-all duration-300 
              hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] relative overflow-hidden bg-gradient-to-br from-black/80 to-black/40"
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(0,163,255,0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(255,0,0,0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(0,163,255,0.4) 0%, transparent 50%)',
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10 p-6 xs:p-8 sm:p-10">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-gaming mb-4 xs:mb-6 bg-gradient-to-r from-game-blue to-game-red bg-clip-text text-transparent">
                {t('xp.ctaTitle')}
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-game-white/90 mb-6 xs:mb-8">
                {t('xp.ctaSubtitle')}
              </p>
              <Button
                variant="primary"
                size="lg"
                glowing
                fullWidth
                onClick={() => window.location.href = '/services'}
                className="relative overflow-hidden group text-sm sm:text-base font-gaming rounded-xl border-2"
              >
                <span className="relative z-10 group-hover:text-white transition-colors flex items-center justify-center gap-2 py-1">
                  <span>{t('xp.viewArsenal')}</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <GiCrossedSwords />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-game-blue to-game-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </div>
          </Card>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <Card glowing className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaChartLine className="text-3xl text-game-red" />
              <h2 className="text-2xl sm:text-3xl font-gaming text-game-white">{t('xp.benefitsTitle')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4 text-game-white/80">
                <div className="flex items-start gap-3">
                  <FaCrown className="text-xl text-game-blue mt-1" />
                  <p>{t('xp.benefit1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaGift className="text-xl text-game-blue mt-1" />
                  <p>{t('xp.benefit2')}</p>
                </div>
              </div>
              <div className="space-y-4 text-game-white/80">
                <div className="flex items-start gap-3">
                  <FaTrophy className="text-xl text-game-blue mt-1" />
                  <p>{t('xp.benefit3')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaMedal className="text-xl text-game-blue mt-1" />
                  <p>{t('xp.benefit4')}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default XPSystem;