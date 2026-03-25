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

  // Sections 2 & 3 Combo
  const yCombo = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [100, 0, 0, -200]);
  const opacityCombo = useTransform(scrollYProgress, [0.15, 0.25, 0.75, 0.85], [0, 1, 1, 0]);

  // General hint at the bottom to transition to grid
  const opacityHint = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 h-[500vh] w-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center p-4 sm:p-8 md:p-16 lg:p-24 overflow-hidden text-black z-10">

        {/* Section 1 */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-black to-neutral-700 drop-shadow-[0_5px_15px_rgba(255,255,255,0.7)] mix-blend-plus-lighter">
            SATVIK GAUR
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-semibold text-neutral-800 tracking-[0.2em] drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
            SOFTWARE DEVELOPER.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-16 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] mb-2 text-neutral-900 font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Sections 2 & 3 Combined */}
        <motion.div
          style={{ y: yCombo, opacity: opacityCombo }}
          className="absolute inset-0 flex flex-col justify-center gap-16 lg:gap-32 px-4 sm:px-8 md:px-16 lg:px-24 pointer-events-none"
        >
          <div className="max-w-2xl text-left self-start">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-black to-neutral-700 drop-shadow-[0_5px_15px_rgba(255,255,255,0.7)]">
              Bridging <span className="text-neutral-600 italic font-medium">design</span> and engineering.
            </h2>
            <p className="mt-6 text-base md:text-lg font-medium text-neutral-900 drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
              Focusing on the intersection of intuitive interfaces and intelligent, AI-driven backend architectures.
            </p>
          </div>

          <div className="max-w-md text-right self-end">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-black to-neutral-700 drop-shadow-[0_5px_15px_rgba(255,255,255,0.7)]">
              Empowered by <span className="text-neutral-600 italic font-medium">AI</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg font-medium text-neutral-900 drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
              Leveraging machine learning, generative AI, and computer vision to solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Hint for what's next */}
        <motion.div
          style={{ opacity: opacityHint }}
          className="absolute bottom-16 left-0 right-0 text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-black drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Selected Works
          </span>
        </motion.div>

      </div>
    </div>
  );
}
