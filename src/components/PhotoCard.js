import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export default class PhotoCard extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };

  static defaultProps = {
    alt: 'image',
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      webformatURL,
      likes,
      views,
      downloads,
      comments,
      largeImageURL,
      alt,
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li>
        <div className="photo-card">
          <img src={webformatURL} alt={alt} />
          <div className="stats">
            <p className="stats-item">
              <i className="material-icons">thumb_up</i>
              {likes}
            </p>
            <p className="stats-item">
              <i className="material-icons">visibility</i>
              {views}
            </p>
            <p className="stats-item">
              <i className="material-icons">comment</i>
              {comments}
            </p>
            <p className="stats-item">
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>
          <button
            type="button"
            onClick={this.openModal}
            className="fullscreen-button"
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
          {isModalOpen && (
            <Modal onClose={this.closeModal}>
              <img src={largeImageURL} alt={alt} />
            </Modal>
          )}
        </div>
      </li>
    );
  }
}
