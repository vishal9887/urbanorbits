import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const heading = "OUR VISION : Built with purpose";
const paragraphText = [
  "To define digital growth by building emotionally intelligent, culturally resonant, and automation-empowered brand ecosystems — crafted for timeless relevance.",
  "At Urban Orbit, we blend the precision of data, the power of AI, and the soul of storytelling to ensure every brand feels distinct, scales with purpose, and leaves a legacy in an era of algorithmic sameness."
];

const fadeSlideVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export default function Section5() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="transition-opacity min-h-[70vh] mt-44 duration-1000 ease-out  bg-[#35378D] rounded-[170px] w-[70%] mx-auto bg-opacity-50 py-1 bg-chat-gradient backdrop-blur-3xl"
      data-aos="fade-up"
    >
      {/* Heading */}
      <motion.h1
        className="font-bold text-7xl text-center my-10"
        custom={0}
        initial="hidden"
        animate={controls}
        variants={fadeSlideVariant}
      >
        {heading}
      </motion.h1>

      {/* Paragraph */}
      <div className="w-[70%] font-medium text-3xl mx-auto mt-10 mb-20 text-start">
        {paragraphText.map((text, i) => (
          <motion.p
            key={i}
            className="my-4"
            custom={i + 1}
            initial="hidden"
            animate={controls}
            variants={fadeSlideVariant}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}