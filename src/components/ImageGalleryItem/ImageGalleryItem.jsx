import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showModal,
  imgInfo,
}) => (
  <li className="ImageGalleryItem" key={id} onClick={showModal}>
    <img
      className="ImageGalleryItem-image"
      src={webformatURL}
      alt={tags}
      onClick={() => {
        imgInfo(largeImageURL);
      }}
    />
  </li>
);
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  showModal: PropTypes.func,
};
