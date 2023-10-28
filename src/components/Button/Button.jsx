import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick }) => (
  <button className="Button" type="button" onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};
