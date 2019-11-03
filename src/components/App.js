import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Galary from './Galary';
import * as imageAPI from '../services/image-api';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import SearchForm from './SearchForm';
import NotfoundImage from './NotfoundImage';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    pageNumber: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.fetchImage();
    }
    if (prevState.query !== query) {
      this.GoToTop();
    }
    window.scrollTo({
      top: document.body.scrollHeight,

      behavior: 'smooth',
    });
  }

  onSearch = query => {
    this.setState({ query, images: [], pageNumber: 1, isLoading: true });
  };

  fetchImage = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });
    imageAPI
      .fetchImages(query, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  GoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div className="App">
        <SearchForm onSearch={this.onSearch} />
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        {images.length <= 0 && <NotfoundImage />}
        <InfiniteScroll>
          {images.length > 0 && <Galary images={images} />}
        </InfiniteScroll>
        {images.length > 0 && (
          <button
            type="button"
            className="buttonLoadMore"
            onClick={this.fetchImage}
          >
            Load more
          </button>
        )}
        {images.length > 0 && (
          <button
            type="button"
            className="buttonGoToTop"
            onClick={this.GoToTop}
          >
            Go to top
          </button>
        )}
      </div>
    );
  }
}

export default App;
