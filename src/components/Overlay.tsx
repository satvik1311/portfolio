"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);

  // Section 2
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.5], [100, 0, -200]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);

  // Section 3
  const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.9], [100, 0, -200]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.8, 0.9], [0, 1, 1, 0]);

  // General hint at the bottom to transition to grid
  const opacityHint = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 h-[500vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center p-8 md:p-24 overflow-hidden text-neutral-100">

        {/* Section 1 */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg uppercase tracking-widest text-white">
            SATVIK GAUR
          </h1>
          <p className="text-lg md:text-2xl font-light text-neutral-300 tracking-[0.2em] drop-shadow-md">
            SOFTWARE DEVELOPER.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-16 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] mb-2 text-neutral-400">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 pointer-events-none"
        >
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight drop-shadow-lg text-white">
              Bridging <span className="text-neutral-400 italic font-light">design</span> and engineering.
            </h2>
            <p className="mt-6 text-base md:text-lg text-neutral-300 drop-shadow-md">
              Focusing on the intersection of intuitive interfaces and intelligent, AI-driven backend architectures.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-24 pointer-events-none"
        >
          <div className="max-w-xl text-right">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight drop-shadow-lg text-white">
              Empowered by <span className="text-neutral-400 italic font-light">AI</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg text-neutral-300 drop-shadow-md">
              Leveraging machine learning, generative AI, and computer vision to solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Hint for what's next */}
        <motion.div
          style={{ opacity: opacityHint }}
          className="absolute bottom-16 left-0 right-0 text-center"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-white drop-shadow-lg">
            Selected Works
          </span>
        </motion.div>

      </div>
    </div>
  );
}
