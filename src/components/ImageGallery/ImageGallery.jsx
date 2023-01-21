import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import { PropTypes } from 'prop-types';

export const ImageGallery = ({images}) => {
return (
    <>
    <Gallery>
  {images.map(({id, webformatURL, largeImageURL, tags}) => {
    return(
        <ImageGalleryItem 
        key={id}
        id={id}
        webformatURL={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        ></ImageGalleryItem>
    )
  })}
</Gallery>
</>
)
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};