import React from 'react';
import Modal from 'react-modal';

const VideoModal = ({ videoUrl, isOpen, onRequestClose }) => {
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
