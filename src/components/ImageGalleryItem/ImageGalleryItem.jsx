export const ImageGalleryItem = ({ key, webformatURL, largeImageURL, alt}) => {
    return(
<li >
  <img src={webformatURL} alt={alt} />
</li>
    );
};