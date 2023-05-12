import React from 'react';
import PropTypes from 'prop-types';

import styleClasses from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = React.useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  React.useImperativeHandle(ref, () => {
    return {
      focus: focus,
    };
  });

  const classNames = `${styleClasses['form-input']} ${
      props.isValid === false ? styleClasses.invalid : ''
  }`;

  return (
      <div className={classNames}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
      </div>
  );
});

Input.displayName = 'Input';
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;