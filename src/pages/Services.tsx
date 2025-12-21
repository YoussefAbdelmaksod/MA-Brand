import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Card from '@/components/Card';
import Button from '@/components/Button';
import FitnessScene from '@/components/FitnessScene';
import { FaBolt, FaStar, FaTrophy, FaGem, FaShieldAlt, FaCheck, FaFire, FaCrown, FaRocket, FaWhatsapp } from 'react-icons/fa';
import { GiCrossedSwords, GiLaurelsTrophy } from 'react-icons/gi';
import { useLanguage } from '@/hooks/useLanguage';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlights: string[];
  icon: React.ReactNode;
  level: 'Novice' | 'Warrior' | 'Elite' | 'Legendary';
  price: string;
  originalPrice?: string;
  xpBonus: number;
  color: string;
  popular?: boolean;
  bestValue?: boolean;
}

const services: Service[] = [
  {
    title: '1 Month Quest',
    subtitle: 'Begin Your Legend',
    description: 'The perfect starting point for aspiring fitness warriors. Master the fundamentals and build your foundation.',
    features: [
      'Customized Training Program',
      'Detailed Nutrition Guide',
      'Weekly Progress Tracking',
      'WhatsApp Community Access',
      'Video Form Tutorials'
    ],
    highlights: ['Perfect for beginners', 'Foundation building'],
    icon: <FaShieldAlt className="text-5xl" />,
    level: 'Novice',
    price: '300 EGP',
    xpBonus: 300,
    color: 'green'
  },
  {
    title: '3 Months Protocol',
    subtitle: 'Forge Your Power',
    description: 'Intermediate program with advanced training techniques and regular personalized coaching support.',
    features: [
      'Advanced Training Plans',
      'Personalized Meal Plans',
      '2x Weekly Check-ins',
      'Video Form Analysis',
      '24/7 WhatsApp Support'
    ],
    highlights: ['Most popular choice', 'Real transformations'],
    icon: <GiCrossedSwords className="text-5xl" />,
    level: 'Warrior',
    price: '900 EGP',
    xpBonus: 900,
    color: 'blue',
    popular: true
  },
  {
    title: '6 Months System',
    subtitle: 'Master Your Destiny',
    description: 'Comprehensive coaching for dedicated athletes with premium support and advanced programming.',
    features: [
      'Elite Custom Programming',
      'Advanced Nutrition Planning',
      '3x Weekly Coaching Calls',
      'Priority VIP Support',
      'Recovery & Sleep Guide'
    ],
    highlights: ['For serious athletes', 'Complete transformation'],
    icon: <FaTrophy className="text-5xl" />,
    level: 'Elite',
    price: '2,000 EGP',
    xpBonus: 2000,
    color: 'purple'
  },
  {
    title: '12 Months Legendary',
    subtitle: 'Become Immortal',
    description: 'The ultimate VIP experience with unlimited access, daily coaching, and exclusive benefits for maximum results.',
    features: [
      'Legendary Custom Plans',
      'Daily Personal Coaching',
      'Elite Recovery System',
      'Private WhatsApp Line',
      'Exclusive VIP Benefits',
      'Monthly Body Analysis'
    ],
    highlights: ['Best value', 'VIP treatment'],
    icon: <FaGem className="text-5xl" />,
    level: 'Legendary',
    price: '3,500 EGP',
    originalPrice: '5,000 EGP',
    xpBonus: 5000,
    color: 'yellow',
    bestValue: true
  }
];

const colorClasses: Record<string, { text: string; bg: string; border: string; gradient: string; glow: string }> = {
  green: {
    text: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/40',
    gradient: 'from-green-400 to-green-600',
    glow: 'shadow-[0_0_30px_rgba(74,222,128,0.3)]'
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/40',
    gradient: 'from-blue-400 to-blue-600',
    glow: 'shadow-[0_0_30px_rgba(96,165,250,0.3)]'
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/40',
    gradient: 'from-purple-400 to-purple-600',
    glow: 'shadow-[0_0_30px_rgba(192,132,252,0.3)]'
  },
  yellow: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/40',
    gradient: 'from-yellow-400 to-yellow-600',
    glow: 'shadow-[0_0_30px_rgba(250,204,21,0.4)]'
  }
};

const ServiceCard = ({ service, index, t }: { service: Service; index: number; t: (key: string) => string }) => {
  const colors = colorClasses[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full relative group"
    >
      {/* Popular/Best Value Badge */}
      {(service.popular || service.bestValue) && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          className={`absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full font-gaming text-sm
            bg-gradient-to-r ${colors.gradient} text-white ${colors.glow}`}
        >
          {service.popular ? <><FaFire className="inline mr-1" /> {t('services.mostPopular')}</> : <><FaCrown className="inline mr-1" /> {t('services.bestValue')}</>}
        </motion.div>
      )}

      <Card
        glowing
        interactive
        className={`h-full relative overflow-hidden backdrop-blur-xl 
          ${service.popular || service.bestValue ? 'border-2' : 'border'} ${colors.border}
          bg-gradient-to-br from-black/90 via-black/70 to-black/50
          hover:${colors.glow} transition-all duration-500`}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Corner Decorations */}
        <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-20 blur-2xl`} />
        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${colors.gradient} opacity-10 blur-3xl`} />

        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
          {/* Level Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-gaming bg-gradient-to-r ${colors.gradient} text-white`}>
            {service.level}
          </div>

          {/* Icon with Glow */}
          <motion.div
            className={`w-20 h-20 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-6 ${colors.text} ${colors.glow}`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            {service.icon}
          </motion.div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-gaming text-white mb-2">
            {service.title}
          </h3>
          <p className={`text-sm ${colors.text} font-gaming mb-4`}>{service.subtitle}</p>

          {/* Price Section */}
          <div className="mb-6">
            {service.originalPrice && (
              <motion.span
                className="text-gray-500 line-through text-lg mr-3"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {service.originalPrice}
              </motion.span>
            )}
            <motion.span
              className={`text-4xl font-gaming bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
              whileHover={{ scale: 1.05 }}
            >
              {service.price}
            </motion.span>
            <span className="text-white/50 text-sm ml-2">/month</span>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.highlights.map((highlight, i) => (
              <span key={i} className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border`}>
                {highlight}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/70 text-sm mb-6 leading-relaxed">{service.description}</p>

          {/* Features List */}
          <div className="flex-grow mb-6">
            <h4 className={`text-sm font-gaming ${colors.text} mb-4 flex items-center gap-2`}>
              <FaStar /> {t('services.whatsIncluded')}
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/80"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  <FaCheck className={`text-sm mt-0.5 ${colors.text} flex-shrink-0`} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* XP Bonus */}
          <motion.div
            className={`text-center py-3 rounded-xl ${colors.bg} ${colors.border} border mb-6`}
            animate={{
              boxShadow: [
                `0 0 10px ${service.color === 'yellow' ? 'rgba(250,204,21,0.2)' : 'rgba(96,165,250,0.2)'}`,
                `0 0 20px ${service.color === 'yellow' ? 'rgba(250,204,21,0.4)' : 'rgba(96,165,250,0.4)'}`,
                `0 0 10px ${service.color === 'yellow' ? 'rgba(250,204,21,0.2)' : 'rgba(96,165,250,0.2)'}`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className={`font-gaming ${colors.text}`}>
              <FaBolt className="inline mr-2" />
              +{service.xpBonus} {t('services.xpBonus')}
            </span>
          </motion.div>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            glowing
            fullWidth
            onClick={() => window.open('https://wa.me/201277877499', '_blank')}
            className={`font-gaming text-lg relative overflow-hidden group/btn`}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <FaWhatsapp className="text-xl" />
              {t('services.startQuest')}
              <GiCrossedSwords className={colors.text} />
            </span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-game-black overflow-hidden">
        {/* Enhanced Background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.15)_0%,transparent_50%)]" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,0,0,0.1)_0%,transparent_50%)]" />
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <FitnessScene />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0,163,255,0.5)',
                    '0 0 40px rgba(255,0,0,0.5)',
                    '0 0 20px rgba(0,163,255,0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-gaming font-bold mb-6 bg-gradient-to-r from-game-blue via-white to-game-red bg-clip-text text-transparent">
                  {t('services.title')}
                </h1>
              </motion.div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
                {t('services.subtitle')}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2"><FaRocket className="text-game-blue" /> {t('services.instantStart')}</span>
                <span className="flex items-center gap-2"><GiLaurelsTrophy className="text-game-gold" /> {t('services.provenResults')}</span>
                <span className="flex items-center gap-2"><FaWhatsapp className="text-green-400" /> {t('services.support247')}</span>
              </div>
            </motion.div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} t={t} />
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: <FaTrophy className="text-3xl text-game-gold" />, value: '1000+', labelKey: 'services.warriorsTrained' },
                { icon: <FaStar className="text-3xl text-yellow-400" />, value: '95%', labelKey: 'home.successRate' },
                { icon: <FaFire className="text-3xl text-game-red" />, value: '8+', labelKey: 'services.yearsExperience' },
                { icon: <GiCrossedSwords className="text-3xl text-game-blue" />, value: '500+', labelKey: 'nav.transformations' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-gaming text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{t(stat.labelKey)}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Custom Quest CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <Card glowing className="inline-block max-w-2xl w-full bg-gradient-to-br from-game-blue/20 via-black/60 to-game-red/20 backdrop-blur-xl border-2 border-white/20">
                <div className="p-8 sm:p-12">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <FaGem className="text-6xl text-game-gold" />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-gaming mb-4 bg-gradient-to-r from-game-blue to-game-red bg-clip-text text-transparent">
                    {t('services.customQuest')}
                  </h2>
                  <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                    {t('services.customDescription')}
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    glowing
                    onClick={() => window.open('https://wa.me/201277877499', '_blank')}
                    className="font-gaming text-lg px-12"
                  >
                    <span className="flex items-center gap-3">
                      <FaWhatsapp className="text-xl" />
                      {t('services.createCustom')}
                      <FaRocket />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;