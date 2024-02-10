// VideoSlider.js
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const VideoSlider = ({ openVideoModal }) => {
  const videos = [
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
    'https://player.vimeo.com/video/824804225',
  ];


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div
            className="video-thumbnail"
            onClick={() => openVideoModal(index)}
          >
            <img
              src={`https://vumbnail.com/${video.split('/').pop()}.jpg`}
              alt={`Video ${index}`}
              width={300}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSlider;
