import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const words = [
  "your", "vision", "becomes", "our", "mission.", "With", "emotional", "ownership",
  "and", "quiet", "precision,", "we", "help", "you", "build", "brands,", "systems,", "and",
  "stories", "that", "perform", "—", "and", "last."
];

const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function Section2() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="section2"
      ref={ref}
      className="bg-[#B488F1] text-white flex items-center justify-center min-h-screen scroll-snap-start w-full transition-opacity duration-1000 ease-out"
    >
      <h1
        className="text-7xl font-bold leading-tighter max-w-[85%] mx-auto my-8 text-center flex flex-wrap justify-center"
      >
        <span className='tracking-[5px] space-x-6'>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2"
            custom={i}
            initial="hidden"
            animate={controls}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
        </span>
      </h1>
    </section>
  );
}