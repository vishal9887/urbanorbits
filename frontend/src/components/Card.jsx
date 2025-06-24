import React, { useState, useEffect } from 'react';

const Card = () => {
  const destinations = [
    {
      id: 1,
      title: 'Bali, Indonesia',
      description: 'Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      price: '$1200',
      duration: '7 days'
    },
    {
      id: 2,
      title: 'Santorini, Greece',
      description: 'Famous for its white-washed houses, blue domed churches and breathtaking sunsets.',
      imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      price: '$1500',
      duration: '5 days'
    },
    {
      id: 3,
      title: 'Kyoto, Japan',
      description: 'Famous for its numerous classical Buddhist temples, gardens, imperial palaces and traditional wooden houses.',
      imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      price: '$1800',
      duration: '10 days'
    },
    {
      id: 4,
      title: 'Paris, France',
      description: 'Renowned for its art, fashion, gastronomy and culture, with landmarks like the Eiffel Tower.',
      imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      price: '$1600',
      duration: '6 days'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 1000); // Animation duration
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [destinations.length]);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Popular Destinations</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Explore these amazing places with us</p>
        
        <div className="relative h-96 md:h-[32rem] flex items-center justify-center">
          {destinations.map((destination, index) => {
            // Calculate position and z-index
            let positionClass = '';
            let zIndex = 0;
            let scale = 1;
            let opacity = 1;
            
            if (index === activeIndex) {
              positionClass = 'translate-x-0 z-30';
              scale = isAnimating ? 1.05 : 1;
            } else if (index === (activeIndex + 1) % destinations.length) {
              positionClass = 'translate-x-12 md:translate-x-24 z-20';
              scale = 0.95;
              opacity = 0.9;
            } else if (index === (activeIndex + 2) % destinations.length) {
              positionClass = 'translate-x-24 md:translate-x-48 z-10';
              scale = 0.9;
              opacity = 0.8;
            } else {
              positionClass = 'translate-x-0 opacity-0 z-0';
              scale = 0.8;
              opacity = 0;
            }
            
            // If card is the previous one (going to back)
            if (index === (activeIndex - 1 + destinations.length) % destinations.length && isAnimating) {
              positionClass = '-translate-x-full opacity-0 z-0';
              scale = 0.8;
              opacity = 0;
            }

            return (
              <div
                key={destination.id}
                className={`absolute w-full max-w-sm transition-all duration-1000 ${positionClass}`}
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src={destination.imageUrl} 
                      alt={destination.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-md">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-800 font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.title}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-900 font-bold text-lg">{destination.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/ person</span>
                      </div>
                      <div className="text-gray-500 text-sm">
                        {destination.duration}
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;