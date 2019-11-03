import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = { query: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onSearch(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    const { handleKey, query, handleChange } = this.state;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <form className="search-form" onKeyPress={handleKey}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={query}
          onChange={handleChange}
        />
      </form>
    );
  }
}
