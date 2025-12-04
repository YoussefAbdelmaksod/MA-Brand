import { memo } from 'react';

// Simplified, performance-optimized background scene
const FitnessScene = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple static gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(0,163,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,0,0,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Static glowing orbs - no animation */}
      <div className="absolute w-64 h-64 rounded-full bg-game-blue/5 blur-3xl" style={{ top: '15%', left: '10%' }} />
      <div className="absolute w-48 h-48 rounded-full bg-game-red/5 blur-3xl" style={{ bottom: '20%', right: '10%' }} />
    </div>
  );
});

FitnessScene.displayName = 'FitnessScene';

export default FitnessScene;