import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, alt, onClick}) => {
    return(
<GalleryItem>
  <GalleryImage src={webformatURL} alt={alt} onClick={onClick}/>
</GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}