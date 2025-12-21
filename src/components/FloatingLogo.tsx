import { memo } from 'react';
import { motion } from 'framer-motion';

// Lightweight floating logo with GPU-optimized animations
const FloatingLogo = memo(() => {
  return (
    <motion.div
      className="w-full h-full relative will-change-transform"
      style={{ transform: 'translateZ(0)' }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden border-4 border-game-blue/50 shadow-[0_0_30px_rgba(0,163,255,0.4)]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/4-poster.jpg"
          className="w-full h-full object-cover"
          width={192}
          height={192}
        >
          <source src="/4.webm" type="video/webm" />
          <source src="/4.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
});

FloatingLogo.displayName = 'FloatingLogo';

export default FloatingLogo;