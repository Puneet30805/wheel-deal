import React from 'react';

const Mainvideo = () => {
  return (
    <div className="w-full h-auto aspect-video overflow-hidden rounded-lg shadow-lg">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Mainvideo;
