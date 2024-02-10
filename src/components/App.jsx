import React, { useState } from 'react';
import VideoSlider from './Slider/Slider';
import VideoModal from './Modal/Modal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [, setCurrentVideoIndex] = useState(0);

  const openVideoModal = index => {
    setCurrentVideoIndex(index);
    setModalIsOpen(true);
  };

  const closeVideoModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <VideoSlider openVideoModal={openVideoModal} />
      <VideoModal
        videoUrl={`https://player.vimeo.com/video/824804225`}
        isOpen={modalIsOpen}
        onRequestClose={closeVideoModal}
      />
    </div>
  );
};

export default App;
