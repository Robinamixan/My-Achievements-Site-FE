import React from 'react';
import PropTypes from 'prop-types';

import styleClasses from './Button.module.css';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`${styleClasses.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
