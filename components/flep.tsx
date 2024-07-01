import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/utils/cn";

export const FlipWords1 = ({
  sentence,
  duration = 3000,
  className,
}: {
  sentence: string;
  duration?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const words = sentence.split(" ");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedText(words.slice(0, currentIndex + 1).join(" "));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, duration / words.length);

    return () => clearInterval(interval);
  }, [sentence, duration, words]);

  const truncatedText = isExpanded ? displayedText : displayedText.split(' ').slice(0, 20).join(' ');
  const isTruncated = words.length > 20 && !isExpanded;

  return (
    <div className="max-w-full rounded-lg">
      <AnimatePresence>
        <motion.div
          key={truncatedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100",
            className
          )}
        >
          {truncatedText}
          {isTruncated && "..."}
        </motion.div>
      </AnimatePresence>
      {isTruncated && (
        <button
          onClick={() => setIsExpanded(true)}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Read more
        </button>
      )}
    </div>
  );
};