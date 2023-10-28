import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, showModal, imgInfo }) => {
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          webformatURL={img.webformatURL}
          tags={img.tags}
          largeImageURL={img.largeImageURL}
          showModal={showModal}
          imgInfo={imgInfo}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  showModal: PropTypes.func,
  imgInfo: PropTypes.func,
};
