import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/utils/utils/cn';

export const FlipWords1 = ({
  sentence,
  duration = 3000,
  className,
  onClickToAnimate = false, // Add onClickToAnimate prop to control animation click trigger
}: {
  sentence: string;
  duration?: number;
  className?: string;
  onClickToAnimate?: boolean;
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true }); // Use inView from react-intersection-observer

  const sentences = sentence.split(';'); // Split sentence by ";" for multiple sentences

  const startAnimation = useCallback(() => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    setIsAnimating(true);
  }, [sentences.length]);

  const handleClickToAnimate = () => {
    startAnimation();
  };

  useEffect(() => {
    if (inView && !isAnimating && !onClickToAnimate) {
      startAnimation();
    }
  }, [inView, isAnimating, onClickToAnimate, startAnimation]);

  return (
    <div ref={ref} className="relative inline-block">
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute',
          }}
          className={cn(
            'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
            className
          )}
          key={currentSentenceIndex}
        >
          {sentences[currentSentenceIndex].split('').map((character, index) => (
            <motion.span
              key={currentSentenceIndex + index}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {character === ' ' ? '\u00A0' : character} {/* Replace space with non-breaking space */}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
      {onClickToAnimate && (
        <button
          className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={handleClickToAnimate}
        >
          Animate
        </button>
      )}
    </div>
  );
};
