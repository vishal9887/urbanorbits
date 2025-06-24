import React, { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Blogs from '../components/Blogs'
 
import DreamSection from '../components/DreamSection';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

const services = [
  {
    title: 'Branding & Identity Systems',
    desc: "We go way beyond just designing logos. We craft the soul of your brand — its tone, presence, and emotional footprint.",
  },
  {
    title: 'Website Creation & Management',
    desc: "Your website isn't a brochure — it's your best salesperson. We design modern, intuitive sites that guide and convert.",
  },
  {
    title: 'Email & Funnel Automation',
    desc: "We build automated email ecosystems that nurture leads, boost retention, and move people through your funnel.",
  },
  {
    title: 'Digital Marketing Strategy',
    desc: "Forget vanity metrics. We mix human insight with marketing science to create clear, compelling campaigns.",
  },
  {
    title: 'E-commerce Setup & Growth',
    desc: "We help you from building your online store to optimizing the experience for conversions.",
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  };

  const leftIdx = (currentIndex - 1 + services.length) % services.length;
  const centerIdx = currentIndex;
  const rightIdx = (currentIndex + 1) % services.length;

  const transitionClass = isTransitioning
    ? direction === 'left'
      ? 'translate-x-[-50px] opacity-0 scale-95'
      : 'translate-x-[50px] opacity-0 scale-95'
    : 'translate-x-0 opacity-100 scale-100';

  return (
    <div className="bg-white pb-1 text-white">
      <DreamSection />
      <Section3 />
      <Section4 />
      <Section5 />

      <div
        className="flex flex-col items-center justify-center min-h-screen mb-24 text-white overflow-hidden pt-[80px] ease-out"
        data-aos="fade-up"
      >
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold mb-3 text-black">What We Do</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-black text-xl max-w-2xl mx-auto">
            Explore our comprehensive suite of services designed to elevate your digital presence
          </p>
        </div>

        <div className="relative w-full max-w-7xl h-[520px] px-8 overflow-hidden transition-opacity duration-1000 ease-out" data-aos="fade-up">
          <div className="relative h-full flex items-center justify-center">

            {/* Left Card */}
            <div
              className={`absolute w-[400px] h-[460px] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/30 rounded-xl px-8 py-6 transition-all duration-500 ease-out hidden md:block ${transitionClass}`}
              style={{
                transform: 'translateX(-300px) scale(0.94)',
                zIndex: 1,
                opacity: 0.8,
              }}
            >
              <div className="h-1 w-12 bg-indigo-500 mb-3 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">{services[leftIdx].title}</h3>
              <p className="text-gray-300 line-clamp-4">{services[leftIdx].desc}</p>
            </div>

            {/* Right Card */}
            <div
              className={`absolute w-[400px] h-[460px] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/30 rounded-xl px-12 py-8 transition-all duration-500 ease-out hidden md:block ${transitionClass}`}
              style={{
                transform: 'translateX(410px) scale(0.94)',
                zIndex: 4,
                opacity: 1,
                maskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 56%)',
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 56%)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="overflow-hidden h-full rounded-xl">
                <div className="h-1 w-12 bg-indigo-500 mb-3 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">{services[rightIdx].title}</h3>
                <p className="text-gray-300 line-clamp-4">{services[rightIdx].desc}</p>
              </div>
            </div>

            {/* Center Card */}
            <div
              key={centerIdx}
              className={`relative w-[500px] h-[500px] z-20 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600/50 p-8 rounded-2xl shadow-2xl transition-all duration-500 ease-out transform ${transitionClass}`}
            >
              <div className="h-2 w-16 bg-indigo-500 mb-4 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-4">{services[centerIdx].title}</h3>
              <div className="text-gray-300 leading-relaxed">{services[centerIdx].desc}</div>
              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 left-4 right-4 -mt-6 flex justify-between z-20 sm:hidden md:flex">
            <button
              onClick={handlePrev}
              className="group bg-black hover:bg-indigo-600/70 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300"
            >
              <ArrowLeftCircle size={32} className="text-gray-400 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="group bg-black hover:bg-indigo-600/70 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300"
            >
              <ArrowRightCircle size={32} className="text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isTransitioning) return;
                  setDirection(idx > currentIndex ? 'right' : 'left');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }, 100);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-3 bg-indigo-500'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Section6 />

      <div
        className="transition-opacity duration-1000 mt-44 ease-out min-h-[60vh] bg-[#35378D] rounded-[170px] w-[70%] mx-auto bg-opacity-50 py-1 bg-chat-gradient backdrop-blur-3xl"
        data-aos="fade-up"
      >
        <h1 className="font-bold text-7xl text-center my-8">BRAND ETHOS</h1>
        <div className="w-[100%] font-medium text-3xl text-center mt-10 mb-24">
          <p>
            Business should feel like belonging. <br />
            Growth shouldn’t come with burnout. <br />
            Digital shouldn’t feel distant.
          </p>
        </div>
      </div>

      <div className="w-full">
        <Blogs/>
      </div>

      <div
        className="transition-opacity min-h-[80vh] mt-96 duration-1000 ease-out text-center my-20"
        data-aos="fade-up"
      >
        <h1 className="font-bold text-8xl leading-tight mb-8">Still Scrolling?</h1>
        <p className="text-lg sm:text-5xl font-semibold text-gray-700 mb-6">That's either love or curiosity</p>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600">
          Either way, let's turn it into something meaningful
        </p>
        <button className="mt-10 bg-blue-800 text-white text-2xl px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
          Let's Explore Together
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
