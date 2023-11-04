import React, { useState } from 'react'; // Correct import statement
import Modal from './Modal'; // Import the Modal component once

export default function Profiles({ Leaderboard }) {

      const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

    return (
        <div id="profile">
            <div className="grid-container">
                <div className="card">
                    <div className="blue-box">
                        1
                    </div>
                </div>

                <div className="card">
                    <div className="blue-box">
                        2
                    </div>
                </div>

                <div className="card">
                    <div className="blue-box">
                        3
                    </div>
                </div>
            </div>
      {Item(Leaderboard, openModal)}
      <Modal isOpen={isModalOpen} imgSrc={selectedImg} onClose={closeModal} />
    </div>
    )
}

function Item(data, openModal){
  return (
    <>
      {
        data.map((value, index) => (
          <div className="flex" key={index}>
            <div className="item">
              <span className="blue-box">{index + 1}</span> {/* This will show the number */}
              {/* Image here that opens the modal when clicked */}
              <img src={value.img} alt="" onClick={() => openModal(value.img)} />
              <div className="info">
                <h3 className='name text-dark'>{value.name}</h3>    
                <span>{value.location}</span>
              </div>                
            </div>
            <div className="item">
              <span>{value.score}</span>
            </div>
          </div>
        ))
      }
    </>
  )
}
