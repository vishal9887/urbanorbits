import React, { useEffect, useRef } from 'react';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section2 from './Section2';
import branding from '../assets/branding.png'

// Sentence for Section 2
const sentence = `your vision becomes our mission. With emotional ownership and quiet precision, we help you build brands, systems, and stories that perform — and last.`;
const words = sentence.split(" ");

// Word animation variants
const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Animated word component
const AnimatedWord = ({ word, index, controls }) => (
  <motion.span
    key={index}
    className="inline-block mr-2"
    custom={index}
    initial="hidden"
    animate={controls}
    variants={wordVariants}
  >
    {word}
  </motion.span>
);

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.0,
        zoom: 1.0,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Framer Motion Section 2 controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="overflow-hidden w-full">
      {/* Section 1 */}
      <section
        id="section1"
        ref={vantaRef}
        className="text-black flex items-center justify-start min-h-screen px-6 scroll-snap-start w-full transition-opacity duration-1000 ease-out"
        data-aos="fade-up"
      >
        <div className="w-full max-w-screen-lg text-left pt-16">
          <div className="text-8xl font-extrabold leading-tight text-center">
            <div className='text-left'>DIGITAL SOLUTIONS,</div>
            <div className="mt-3 text-left ">SIMPLIFIED.</div>
          </div>
        </div>
      </section>

      {/* Section 2 - Animate when in view
      <section
        id="section2"
        ref={ref}
        className="bg-[#B488F1] text-white flex items-center justify-center min-h-screen scroll-snap-start w-full transition-opacity duration-1000 ease-out"
        data-aos="fade-up"
      >
        <h1 className="text-7xl font-bold leading-tight max-w-[85%] mx-auto my-8 text-center flex flex-wrap justify-center">
          {words.map((word, i) => (
            <AnimatedWord key={i} word={word} index={i} controls={controls} />
          ))}
        </h1>
      </section> */}

      <Section2/>

      {/* Section 3 */}
     {/* Section 3 */}
<section
  id="section3 "
  className="text-black flex items-center justify-center min-h-screen scroll-snap-start w-full transition-opacity duration-1000 ease-out"
  data-aos="fade-up"
>
  <div className="flex flex-col md:flex-row bg-[#F3F3E9] w-full p-6 md:p-12 rounded-lg gap-8">
    
    {/* Text Content */}
    <div className="md:w-1/2 flex flex-col justify-center">
      <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
        BUILDING BRANDS <br />
        <span className="text-black">WITH INTENTION</span>
      </h2>
      <p className="text-lg lg:text-2xl text-gray-700 mb-6">
        We step in not just with strategy decks, but with intention. Not just with plans, but with presence. Not just to execute, but to evolve your business with you — quietly, mindfully, and without pressure. Because when you win, we win. It’s personal like that.
      </p>
      <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-md font-semibold px-6 py-3 rounded-full w-fit">
        Know More
      </button>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <img
        src={branding}
        alt="branding"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  </div>
</section>

      {/* Section 4 */}
      <section
        id="section4"
        className="bg-[radial-gradient(circle,_#d1d5db,_#7e22ce)] text-black flex items-center justify-center min-h-screen px-6 scroll-snap-start w-full transition-opacity duration-1000 ease-out"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-xl sm:text-6xl md:text-7xl leading-tight mb-8">Still Scrolling?</h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">That's either love or curiosity</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600">Either way, let's turn it into something meaningful</p>
          <button className="mt-10 bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
            Let's Explore Together
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
