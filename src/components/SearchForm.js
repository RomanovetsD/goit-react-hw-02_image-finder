import React, { Component } from 'react';

export default class SearchForm extends Component {
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
    return (
      <form className="search-form" onKeyPress={this.handleKey}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
