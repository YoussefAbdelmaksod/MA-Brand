import { memo } from 'react';
import { motion } from 'framer-motion';

// Lightweight CSS-only floating logo - no Three.js dependency
const FloatingLogo = memo(() => {
  return (
    <motion.div
      className="w-full h-full relative"
      animate={{
        y: [0, -8, 0],
        rotateY: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="w-full h-full rounded-full overflow-hidden border-4 border-game-blue/50 shadow-[0_0_30px_rgba(0,163,255,0.4)]"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0,163,255,0.3)',
            '0 0 40px rgba(0,163,255,0.5)',
            '0 0 20px rgba(0,163,255,0.3)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img
          src="/4.gif"
          alt="Coach Moumen"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
});

FloatingLogo.displayName = 'FloatingLogo';

export default FloatingLogo;