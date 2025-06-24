import React, { useState, useRef, useEffect } from 'react';
import guidance from '../assets/guidance.png';
import approach from '../assets/approach.png';
import hustle from '../assets/hustle.png';
import delivered from '../assets/delivered.png'

const ThreeDCarousel = () => {
  const [paused, setPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Human Before Hustle",
      description: `
        Behind every strategy, there’s a human — often overwhelmed, juggling decisions, and running on little rest.
        We don’t show up to add to your pressure. We’re here to lighten the load.
        With calm clarity and real compassion, we make business feel less like burnout — and more like belonging.
      `,
      src: hustle,
    },
    {
      id: 2,
      title: "Genuine Guidance, Not Gatekeeping",
      description: `
        We believe knowledge is power — not a power play.
        No jargon, no ego. Just clear, actionable insight that makes sense.
        From funnels to conversions, we walk you through the why, the how, and the impact — so you grow with confidence, not confusion.
      `,
      src: guidance,
    },
    {
      id: 3,
      title: "Emotional Ownership",
      description: `
        Your vision isn’t just another deliverable — we carry it like it’s our own.
        While you lead clients and life, we’re in the background strengthening your systems with care, foresight, and loyalty.
        It’s not outsourcing. It’s co-building your dream.
      `,
      src: approach,
    },
    {
      id: 4,
      title: "Human-Delivered in an AI World",
      description: `
        In a sea of AI templates and cookie-cutter content, standing out means staying human.
        Our strategies don’t come off an assembly line — they’re shaped with intuition, context, and care.
        Because what works for everyone often connects with no one.
      `,
      src: delivered,
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id);
    setPaused(true);
  };

  useEffect(() => {
    if (!paused) {
      rotationIntervalRef.current = setInterval(() => {
        setRotation((prev) => prev + 0.5);
      }, 16);
    } else {
      clearInterval(rotationIntervalRef.current);
    }

    return () => clearInterval(rotationIntervalRef.current);
  }, [paused]);

  return (
    <div className="min-h-screen text-black dark:text-white pb-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] ">
      <h1 className="font-bold text-5xl text-center mt-10 mb-16" data-aos="fade-up">
        CORE VALUES
      </h1>
      <p className="w-[90%] sm:w-[70%] font-medium text-lg sm:text-xl mx-auto mt-6 text-center mb-44" data-aos="fade-up">
        At Urban Orbit, values aren’t just words — they’re the quiet principles behind every decision, strategy, and system.
      </p>

      {/* 3D Carousel */}
      <div className="relative w-[320px] h-[320px] mx-auto perspective-[1000px]">
        <div
          ref={carouselRef}
          className="absolute w-full h-full transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: paused ? "none" : "transform 0.1s",
          }}
        >
          {slides.map((slide, index) => {
            const angle = index * (360 / slides.length);
            return (
              <div
                key={slide.id}
                className="absolute w-[280px] h-[280px] flex items-center justify-center"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(500px)`,
                }}
              >
                <div
                  className={`relative group cursor-pointer text-center w-full h-full transition-transform duration-300 ${
                    selectedCard === slide.id ? 'scale-110 z-10' : ''
                  }`}
                  onClick={() => handleCardClick(slide.id)}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-[280px] h-[280px] object-cover border-4 border-blue-400 shadow-xl rounded-full"
                  />
                  {!selectedCard && (
                    <div className="absolute bottom-[-100px] w-full opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
                      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-4 text-sm">
                        <h3 className="font-bold text-lg">{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Card Content Below Carousel */}
      {selectedCard && (
        <div className="mt-10 mx-auto w-[90%] max-w-2xl text-center bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">
            {slides.find((slide) => slide.id === selectedCard).title}
          </h2>
          <p className="mt-2 text-md whitespace-pre-line">
            {slides.find((slide) => slide.id === selectedCard).description}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            onClick={() => {
              setSelectedCard(null);
              setPaused(false);
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        body {
          background-color: #0F172A;
        }
      `}</style>
    </div>
  );
};

export default ThreeDCarousel;
