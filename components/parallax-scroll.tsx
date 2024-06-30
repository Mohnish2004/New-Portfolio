// components/ParallaxScroll.js (example path)
"use client"
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef.current,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Calculate number of images per part
  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div key={"grid-1" + idx} style={{ y: translateFirst }}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                alt="thumbnail"
                layout="responsive"
                width={400}
                height={400}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx} style={{ y: translateSecond }}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                alt="thumbnail"
                layout="responsive"
                width={400}
                height={400}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div key={"grid-3" + idx} style={{ y: translateThird }}>
              <Image
                src={el}
                className="h-80 w-full object-cover rounded-lg"
                alt="thumbnail"
                layout="responsive"
                width={400}
                height={400}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
