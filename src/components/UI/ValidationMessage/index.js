import React from 'react';
import PropTypes from 'prop-types';

import styleClasses from './ValidationMessage.module.css';

ValidationMessage.propTypes = {
    isVisible: PropTypes.bool,
    message: PropTypes.string
};

function ValidationMessage({ isVisible, message }) {
    if (!isVisible) {
        return;
    }

    return (
        <div className={styleClasses['validation-message']}>
            {message}
        </div>
    );
}

export default ValidationMessage;