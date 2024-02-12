import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.css';

const VideoModal = ({ videoUrl, isOpen, onRequestClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={onRequestClose}>
      <div className={styles.videoModal}>
        <button className={styles.closeButton} onClick={onRequestClose}>
          <AiOutlineClose />
        </button>
        <iframe
          src={videoUrl}
          title="video"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
