import React, { useState } from 'react';
// import { IconType } from 'react-icons';
// import { IoClose } from 'react-icons/io5';
import './Modal.scss';

type ModalProps = {
  iconUrl: string;
  title: string;
  description: string;
  qrCodeUrl?: string;
  isOpen: boolean;
  // handleOnClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  iconUrl,
  title,
  description,
  qrCodeUrl,
  isOpen,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggleOpen = () => {
    setOpen(true);
  };
  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className="modal-overlay">
          <div className="b2b-kiosk-modal">
            <div className="kiosk-modal-wrapper">

              <button className="modal-close" >
                <img src="./Icon.svg" alt="closing icon" onClick={handleOnClose} />
              </button>

              <div className="modal-icon">
                <img className='icon-image'  src={iconUrl} alt="image-icon"></img>
              </div>

             
                <p>{description}</p>
              

              <button className="modal-close-btn" onClick={handleOnClose}>CLOSE</button>
              
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleToggleOpen}>Open Modal</button>
      )}
    </>
  );
};

export default Modal;
