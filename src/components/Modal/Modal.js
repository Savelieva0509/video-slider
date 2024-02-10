import React, { useEffect } from 'react';
import Modal from 'react-modal';

const VideoModal = ({ videoUrl, isOpen, onRequestClose }) => {
  useEffect(() => {
    Modal.setAppElement('#root'); // Змініть '#root' на відповідний селектор вашого кореневого елемента
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
    >
      <div className="video-container">
        <iframe
          src={videoUrl}
          title="video"
          width="800"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
