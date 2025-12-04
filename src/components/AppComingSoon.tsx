import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaChartLine, FaTrophy, FaBell } from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const AppComingSoon = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const { t, isRTL } = useLanguage();

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    const features = [
        { icon: <FaChartLine />, title: t('app.progressXp'), desc: t('app.progressXpDesc') },
        { icon: <FaTrophy />, title: t('app.achievements'), desc: t('app.achievementsDesc') },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 sm:py-24 relative overflow-hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-game-blue/5 to-transparent" />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,163,255,0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="inline-block mb-4"
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-5xl">📱</span>
                    </motion.div>

                    <motion.div
                        className="relative inline-block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-gaming mb-4">
                            <span className="text-game-blue">{t('app.title1')}</span>{' '}
                            <span className="text-game-red">{t('app.title2')}</span>
                        </h2>
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-game-blue/20 to-game-red/20 blur-lg -z-10"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    <p className="text-lg sm:text-xl text-game-white/80 max-w-2xl mx-auto font-gaming">
                        {t('app.subtitle')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center order-1 lg:order-none"
                    >
                        <motion.div
                            className="relative w-64 sm:w-72"
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-[0_0_40px_rgba(0,163,255,0.3)]">
                                {/* Camera Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />

                                {/* Screen */}
                                <div className="relative bg-gradient-to-b from-game-black via-gray-900 to-game-black rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                                    {/* App Preview Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                        {/* Logo */}
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-game-blue/50 mb-4"
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px rgba(0,163,255,0.3)',
                                                    '0 0 40px rgba(0,163,255,0.5)',
                                                    '0 0 20px rgba(0,163,255,0.3)',
                                                ],
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <img src="/4.gif" alt="App Logo" className="w-full h-full object-cover" />
                                        </motion.div>

                                        <span className="text-game-blue font-gaming text-sm mb-2">{t('app.levelUp')}</span>
                                        <span className="text-game-white font-gaming text-xs text-center">{t('app.fitnessApp')}</span>

                                        {/* Loading Bar */}
                                        <div className="w-full mt-8">
                                            <div className="flex justify-between text-xs text-game-white/60 mb-2 font-gaming">
                                                <span>{t('app.loading')}</span>
                                                <motion.span
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    85%
                                                </motion.span>
                                            </div>
                                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-game-blue to-game-red"
                                                    initial={{ width: '0%' }}
                                                    whileInView={{ width: '85%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 2, delay: 0.5 }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan line effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-game-blue/10 to-transparent h-20 pointer-events-none"
                                        animate={{ y: [-100, 400] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    />
                                </div>
                            </div>

                            {/* Floating particles */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-game-blue/50"
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${10 + i * 20}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.3, 0.7, 0.3],
                                    }}
                                    transition={{
                                        duration: 2 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Features & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 lg:order-none"
                    >
                        {/* Features */}
                        <div className="grid gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: isRTL ? -10 : 10 }}
                                    className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-game-blue/30 rounded-xl p-4 group hover:border-game-blue/60 transition-all duration-300"
                                >
                                    <motion.div
                                        className="text-2xl text-game-blue group-hover:text-game-red transition-colors duration-300 flex-shrink-0"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <h4 className="font-gaming text-game-white">{feature.title}</h4>
                                        <p className="text-sm text-game-white/60">{feature.desc}</p>
                                    </div>
                                    <motion.div
                                        className={`text-game-blue/50 flex-shrink-0 ${isRTL ? 'rotate-180' : ''}`}
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            {[
                                { icon: <FaApple className="text-2xl" />, store: t('app.appStore'), label: t('app.downloadOn') },
                                { icon: <FaGooglePlay className="text-xl" />, store: t('app.googlePlay'), label: t('app.getItOn') },
                            ].map((btn) => (
                                <motion.div
                                    key={btn.store}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="flex items-center gap-3 bg-black/60 border border-game-white/20 rounded-xl px-5 py-3 group-hover:border-game-blue/50 transition-all duration-300">
                                        <span className="text-game-white">{btn.icon}</span>
                                        <div>
                                            <p className="text-xs text-game-white/60">{btn.label}</p>
                                            <p className="font-gaming text-game-white text-sm">{btn.store}</p>
                                        </div>
                                    </div>
                                    {/* Coming Soon Badge */}
                                    <motion.div
                                        className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} bg-gradient-to-r from-game-red to-game-blue text-white text-xs px-2 py-1 rounded-full font-gaming`}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {t('app.soon')}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Notify Me Form */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-black/40 backdrop-blur-sm border border-game-blue/30 rounded-xl p-6"
                        >
                            {!subscribed ? (
                                <>
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaBell className="text-game-blue" />
                                        <span className="font-gaming text-game-white text-sm sm:text-base">{t('app.getLaunchNotification')}</span>
                                    </div>
                                    <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={t('app.enterEmail')}
                                            className="flex-1 bg-black/50 border border-game-white/20 rounded-lg px-4 py-3 text-game-white placeholder:text-game-white/40 focus:border-game-blue focus:outline-none transition-colors font-gaming text-sm min-h-[48px]"
                                            required
                                            dir={isRTL ? 'rtl' : 'ltr'}
                                        />
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gradient-to-r from-game-blue to-game-red px-6 py-3 rounded-lg font-gaming text-white text-sm whitespace-nowrap min-h-[48px] w-full sm:w-auto"
                                        >
                                            {t('app.notifyMe')}
                                        </motion.button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-4"
                                >
                                    <motion.span
                                        className="text-4xl block mb-2"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        🎮
                                    </motion.span>
                                    <p className="font-gaming text-game-blue">{t('app.achievementUnlocked')}</p>
                                    <p className="text-sm text-game-white/70">{t('app.firstToKnow')}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AppComingSoon;
