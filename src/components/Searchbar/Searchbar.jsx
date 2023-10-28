import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    pictures: [],
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.name.trim() === '') {
      toast.error('Please, enter the word');
      return;
    }
    this.props.onSubmitForm(this.state.name);
    this.setState({ name: '' });
  };

  handleInputChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({ name: value.toLowerCase() });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BiSearch style={{ width: 30, height: 30 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </form>
      </header>
    );
  }
}
