import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveCardProps {
  title: string;
  definition: string;
  icon: React.ReactNode;
  color: 'blue' | 'purple';
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({ title, definition, icon, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowClass = color === 'blue' ? 'glow-blue border-neon-blue/30' : 'glow-purple border-neon-purple/30';
  const textGlowClass = color === 'blue' ? 'text-glow-blue text-neon-blue' : 'text-glow-purple text-neon-purple';
  const bgGradient = color === 'blue' 
    ? 'from-neon-blue/10 to-transparent' 
    : 'from-neon-purple/10 to-transparent';

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl glass p-8 h-64 cursor-pointer transition-all duration-500 ${glowClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-50`} />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className={`text-4xl ${textGlowClass}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-wider mb-2">
            {title}
          </h3>
          <div className={`h-1 w-12 rounded-full ${color === 'blue' ? 'bg-neon-blue' : 'bg-neon-purple'}`} />
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`absolute inset-0 z-20 p-8 flex items-center justify-center text-center glass backdrop-blur-2xl ${color === 'blue' ? 'bg-neon-blue/10' : 'bg-neon-purple/10'}`}
          >
            <p className="text-lg font-medium leading-relaxed">
              {definition}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
