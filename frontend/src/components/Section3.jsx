import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import whywearehere from '../assets/whywearehere.png';

const headingWords = ["WHY", "WE'RE", "HERE"];
const subheadingText = [
  "Most businesses aren’t short on tools.",
  "They’re short on time",
  "And clarity.",
  "And a team that truly gets it."
];
const paragraphText = [
  "At Urban Orbit, we exist for the human behind the hustle — the overwhelmed founder,",
  "the passionate creator, the visionary business owner. You're not just a project on our timeline.",
  "You’re a person with a dream that matters."
];

const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function Section3() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="min-h-screen py-16 px-4 md:px-12 bg-[#35378D] text-white rounded-[60px] md:rounded-[150px] w-[90%] mx-auto shadow-xl backdrop-blur-2xl bg-opacity-70"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={whywearehere}
            alt="Why we are here"
            className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          {/* Heading */}
          <div className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
            <div className="flex flex-wrap gap-4">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i}
                  initial="hidden"
                  animate={controls}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <div className="text-2xl md:text-3xl font-semibold mb-6 space-y-2">
            {subheadingText.map((text, i) => (
              <motion.div
                key={i}
                custom={i + headingWords.length}
                initial="hidden"
                animate={controls}
                variants={wordVariants}
              >
                {text}
              </motion.div>
            ))}
          </div>

          {/* Paragraph */}
          <div className="text-lg md:text-xl font-medium space-y-2">
            {paragraphText.map((text, i) => (
              <motion.p
                key={i}
                custom={i + headingWords.length + subheadingText.length}
                initial="hidden"
                animate={controls}
                variants={wordVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
