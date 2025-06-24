import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Split the paragraph text into smaller parts to apply the animation
const headingText = "OUR MISSION- BEYOND TEMPLATES";
const paragraphText = [
  "In a world where AI templates risk turning brands into digital duplicates, we step in with a hybrid approach — combining smart automation, intuitive tools, and emotionally intelligent strategy.",
  "At Urban Orbit, we don’t just build brands — we architect ecosystems. Rooted in your unique identity, scaled through data, and crafted with soul, our mission is to ensure that every brand we touch is as distinct as the person behind it.",
  "We do this by embedding deep into your vision, designing systems that convert quietly, creating content that resonates deeply, and shaping experiences that grow your business with intention — not imitation."
];

const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4, // Slight delay for each word
      duration: 0.3,   // Duration for the word animation
      ease: 'easeOut',
    },
  }),
};

export default function Section4() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="min-h-[80vh] mt-[8%] transition-opacity duration-1000 ease-out bg-[#35378D] rounded-[170px] w-[70%] mx-auto bg-opacity-50 py-1 bg-chat-gradient backdrop-blur-3xl"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h1 className="text-7xl font-bold text-center my-12">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={wordVariants}
          custom={0}
        >
          {headingText}
        </motion.span>
      </h1>

      {/* Paragraph Text */}
      <div className="w-[70%] font-medium text-3xl mx-auto mt-10 ">
        {paragraphText.map((text, i) => (
          <motion.p
            key={i}
            className="text-start my-4"
            custom={i + headingText.split(" ").length}
            initial="hidden"
            animate={controls}
            variants={wordVariants}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}