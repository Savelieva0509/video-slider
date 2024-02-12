import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import styles from './Slider.module.css';

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
  
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 4,
  },
};

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.sliderContainer}
      breakpoints={breakpoints}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div
            className="video-thumbnail"
            onClick={() => openVideoModal(index)}
          >
            <img
              className={styles.sliderImg}
              src={`https://vumbnail.com/${video.split('/').pop()}.jpg`}
              alt={`Video ${index}`}
              width={200}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSlider;
