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

function Button({ type, className, disabled, onClick, children }) {
    return (
        <button
            type={type || 'button'}
            className={`${styleClasses.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
