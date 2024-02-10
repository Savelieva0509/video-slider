import React, { useState } from 'react';
import VideoSlider from '../Slider/Slider';
import VideoModal from '../Modal/Modal';
import styles from './App.module.css';

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
    <div className={styles.container}>
      {modalIsOpen && (
        <div className={styles.modalBackdrop} onClick={closeVideoModal} />
      )}
      <VideoModal
        videoUrl={`https://player.vimeo.com/video/824804225`}
        isOpen={modalIsOpen}
        onRequestClose={closeVideoModal}
        className={styles.videoModal}
      />
      <VideoSlider openVideoModal={openVideoModal} />
    </div>
  );
};

export default App;
