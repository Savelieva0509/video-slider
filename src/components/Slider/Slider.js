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

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.sliderContainer}
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
              width={200}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default VideoSlider;
