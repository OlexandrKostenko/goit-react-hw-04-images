import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import { PropTypes } from 'prop-types';

export const ImageGallery = ({images, onImageClick}) => {
return (
    <>
    <Gallery>
  {images.map(({id, webformatURL, tags}) => {
    return(
        <ImageGalleryItem 
        key={id}
        webformatURL={webformatURL}
        alt={tags}
        onClick={onImageClick}
        ></ImageGalleryItem>
    )
  })}
</Gallery>
</>
)
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};