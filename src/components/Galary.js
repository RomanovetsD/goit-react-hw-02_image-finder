import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

const Galary = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(el => (
        <PhotoCard
          key={el.id}
          webformatURL={el.webformatURL}
          likes={el.likes}
          views={el.views}
          comments={el.comments}
          downloads={el.downloads}
          largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
};

Galary.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      likes: PropTypes.number,
      views: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
    }),
  ).isRequired,
};

export default Galary;
