import React from 'react';

const Video = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Watch Our Story</h2>
      <div className="max-w-5xl mx-auto aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/mxT233EdY5c?autoplay=1&mute=1&loop=1&playlist=mxT233EdY5c"
          title="Tech Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
