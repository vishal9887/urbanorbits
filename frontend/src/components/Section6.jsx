import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const heading = "OUR PHILOSOPHY: We’re Co-Dreamers";
const paragraphLines = [
  "We don’t just show up with deliverables. We show up with belief.",
  "When you invite us into your business, you’re inviting us into your dream. And we take that seriously. We take that personally.",
  "We don’t promise vanity metrics or outsource passion. We listen deeply and ask better questions.",
  "We’re not just service providers, we’re co-dreamers."
];

const fadeVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function Section6() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="transition-opacity duration-1000 ease-out  bg-[#35378D] rounded-[170px] w-[70%] mx-auto bg-opacity-50 py-1 bg-chat-gradient backdrop-blur-3xl"
      data-aos="fade-up"
    >
      <div className="min-h-[60vh] ease-out mt-12">
        {/* Heading */}
        <motion.h1
          className="font-bold text-7xl text-center mt-14 mb-9"
          custom={0}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
        >
          {heading}
        </motion.h1>

        {/* Paragraph */}
        <div className="w-[70%] font-medium text-3xl mx-auto my-10 text-start">
          {paragraphLines.map((text, i) => (
            <motion.p
              key={i}
              className="my-4"
              custom={i + 1}
              initial="hidden"
              animate={controls}
              variants={fadeVariant}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}