import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClickBackdrop}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="img" />
        </div>
      </div>
    );
  }
}
