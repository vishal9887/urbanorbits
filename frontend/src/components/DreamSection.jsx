import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrase1 = ["we", "don’t", "just", "build", "brands", "—"];
const phrase2 = ["we", "co-dream", "with", "you."];

const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,   // Increased delay to slow the animation
      duration: 0.6,     // Increased duration to slow the animation
      ease: 'easeOut',
    },
  }),
};

export default function DreamSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="py-20 px-5 min-h-screen [background-image:radial-gradient(circle_at_center,_#F1EFEC,_#85CEE5)] mb-6 flex flex-col items-center justify-center"
    >
      <div className="text-8xl font-extrabold text-center w-[80%] mx-auto text-black">
        <div className="flex flex-wrap justify-center">
          {phrase1.map((word, i) => (
            <motion.span
              key={`p1-${i}`}
              className="inline-block mr-3"
              custom={i}
              initial="hidden"
              animate={controls}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center">
          {phrase2.map((word, i) => (
            <motion.span
              key={`p2-${i}`}
              className="inline-block mr-3"
              custom={phrase1.length + i}
              initial="hidden"
              animate={controls}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
