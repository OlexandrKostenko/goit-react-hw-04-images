import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import { PropTypes } from 'prop-types';
import { Modal } from "components/Modal/Modal";
import { useState } from "react";

export const ImageGalleryItem = ({ webformatURL, alt, largeImageURL }) => {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const toggleModal = () => {
    setIsModalHidden(!isModalHidden);
  };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    };
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      toggleModal();
    };
  };

    return (
    <>
        <GalleryItem>
          <GalleryImage
            src={webformatURL}
            alt={alt}
            onClick={toggleModal} />
        </GalleryItem>
  {isModalHidden && <Modal src={largeImageURL} alt={alt} onClick={handleOverlayClick} onEscPress={handleKeyDown}></Modal>}
      </>
    );
  }


  ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };
