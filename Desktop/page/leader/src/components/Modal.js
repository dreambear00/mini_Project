import React from 'react';
import './style.css'; // Ensure you create a corresponding CSS file

const Modal = ({ isOpen, imgSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close modal"
        >
    

        <div class="image-container">
        <img src="https://cdn-icons-png.flaticon.com/128/83/83972.png" alt="Image description" class="custom-image" />
        </div>
        </button>
        <img src={imgSrc} alt="Enlarged content" />
      </div>
    </div>
  );
};

export default Modal;
