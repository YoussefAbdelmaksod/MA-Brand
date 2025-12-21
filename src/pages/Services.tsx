import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Card from '@/components/Card';
import Button from '@/components/Button';
import FitnessScene from '@/components/FitnessScene';
import {
  FaBolt, FaStar, FaTrophy, FaGem, FaShieldAlt
} from 'react-icons/fa';
import { GiCrossedSwords } from 'react-icons/gi';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  level: 'Novice' | 'Warrior' | 'Elite' | 'Legendary';
  price: string;
  originalPrice?: string;
  xpBonus: number;
  color: string;
}

const services: Service[] = [
  {
    title: '1 Month Quest',
    subtitle: 'Begin Your Legend',
    description: 'Perfect starting point. Master the basics with personalized guidance.',
    features: [
      'Custom Training Program',
      'Nutrition Guide',
      'Weekly Progress Tracking',
      'WhatsApp Community'
    ],
    icon: <FaShieldAlt className="text-4xl" />,
    level: 'Novice',
    price: '300 EGP',
    xpBonus: 300,
    color: 'green'
  },
  {
    title: '3 Months Protocol',
    subtitle: 'Forge Your Power',
    description: 'Advanced training techniques with regular coaching support.',
    features: [
      'Advanced Training Plans',
      'Personalized Meal Plans',
      '2x Weekly Check-ins',
      '24/7 WhatsApp Support'
    ],
    icon: <GiCrossedSwords className="text-4xl" />,
    level: 'Warrior',
    price: '900 EGP',
    xpBonus: 900,
    color: 'blue'
  },
  {
    title: '6 Months System',
    subtitle: 'Master Your Destiny',
    description: 'Comprehensive coaching for dedicated athletes.',
    features: [
      'Elite Custom Programming',
      'Advanced Nutrition',
      '3x Weekly Coaching',
      'Priority VIP Support'
    ],
    icon: <FaTrophy className="text-4xl" />,
    level: 'Elite',
    price: '2,000 EGP',
    xpBonus: 2000,
    color: 'purple'
  },
  {
    title: '12 Months Legendary',
    subtitle: 'Become Immortal',
    description: 'Ultimate VIP experience with unlimited access and daily coaching.',
    features: [
      'Legendary Custom Plans',
      'Daily Personal Coaching',
      'Elite Recovery System',
      'Exclusive VIP Benefits'
    ],
    icon: <FaGem className="text-4xl" />,
    level: 'Legendary',
    price: '3,500 EGP',
    originalPrice: '5,000 EGP',
    xpBonus: 5000,
    color: 'yellow'
  }
];

const levelColors: Record<string, string> = {
  Novice: 'from-green-400 to-green-600',
  Warrior: 'from-blue-400 to-blue-600',
  Elite: 'from-purple-400 to-purple-600',
  Legendary: 'from-yellow-400 to-yellow-600'
};

const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
  green: { text: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
  yellow: { text: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' }
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const colors = colorClasses[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card
        glowing
        interactive
        className={`h-full relative overflow-hidden bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg border ${colors.border} hover:border-opacity-60 transition-all duration-300`}
      >
        {/* Level Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-gaming bg-gradient-to-r ${levelColors[service.level]} text-white`}>
          {service.level}
        </div>

        <div className="p-6 sm:p-8 flex flex-col h-full">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 ${colors.text}`}>
            {service.icon}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-gaming text-white mb-1">
            {service.title}
          </h3>
          <p className="text-sm text-white/50 mb-4">{service.subtitle}</p>

          {/* Price */}
          <div className="mb-4">
            {service.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                <span className={`text-2xl font-gaming ${colors.text}`}>{service.price}</span>
              </div>
            ) : (
              <span className={`text-2xl font-gaming ${colors.text}`}>{service.price}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-white/70 mb-6">{service.description}</p>

          {/* Features - Simple List */}
          <ul className="space-y-2 mb-6 flex-grow">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                <FaStar className={`text-xs ${colors.text}`} />
                {feature}
              </li>
            ))}
          </ul>

          {/* XP Badge */}
          <div className={`text-center mb-4 py-2 rounded-lg ${colors.bg}`}>
            <span className={`font-gaming text-sm ${colors.text}`}>+{service.xpBonus} XP</span>
          </div>

          {/* CTA */}
          <Button
            variant="secondary"
            size="lg"
            glowing
            fullWidth
            onClick={() => window.open('https://wa.me/201277877499', '_blank')}
            className="font-gaming"
          >
            <span className="flex items-center justify-center gap-2">
              Start Quest
              <GiCrossedSwords className={colors.text} />
            </span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-game-black overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.15)_0%,transparent_70%)]" />
        <div className="fixed inset-0 pointer-events-none opacity-30">
          <FitnessScene />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-gaming font-bold mb-4 bg-gradient-to-r from-game-blue via-white to-game-red bg-clip-text text-transparent">
                Training Arsenal
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Choose your path and unlock powerful training protocols
              </p>
            </motion.div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>

            {/* Custom Quest CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Card glowing className="inline-block max-w-xl w-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg">
                <div className="p-8">
                  <h2 className="text-2xl sm:text-3xl font-gaming mb-4 bg-gradient-to-r from-game-blue to-game-red bg-clip-text text-transparent">
                    Need Something Custom?
                  </h2>
                  <p className="text-white/70 mb-6">
                    Let's craft a unique training protocol tailored to your goals
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    glowing
                    onClick={() => window.open('https://wa.me/201277877499', '_blank')}
                    className="font-gaming"
                  >
                    <span className="flex items-center gap-2">
                      Create Custom Quest
                      <FaBolt className="text-yellow-400" />
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