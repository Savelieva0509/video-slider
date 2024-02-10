import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const VideoSlider = ({ openVideoModal }) => {
  const videos = [
    'https://player.vimeo.com/video/824804225',
    // Додайте інші посилання на відео за необхідністю
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

    return (
     <div className="slider-container">
    <Slider {...settings}>
      {videos.map((video, index) => (
        <div key={index}>
          <div
            className="video-thumbnail"
            onClick={() => openVideoModal(index)}
          >
            <img
              src={`https://vumbnail.com/${video.split('/').pop()}.jpg`}
              alt={`Video ${index}`}
            />
          </div>
        </div>
      ))}
            </Slider>
            </div>
  );
};

export default VideoSlider;
