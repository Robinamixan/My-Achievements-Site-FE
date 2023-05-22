import React from 'react';
import PropTypes from 'prop-types';

import styleClasses from './Input.module.css';

const Input = React.forwardRef(
    ({ id, label, type, value, isValid, onChange, onBlur }, ref) => {
        const inputRef = React.useRef();

        const focus = () => {
            inputRef.current.focus();
        };

        React.useImperativeHandle(ref, () => {
            return {
                focus: focus,
            };
        });

        const classNames = `${styleClasses['form-input']} ${isValid === false ? styleClasses.invalid : ''}`;

        return (
            <div className={classNames}>
                <label htmlFor={id}>{label}</label>
                <input
                    ref={inputRef}
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        );
    }
);

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