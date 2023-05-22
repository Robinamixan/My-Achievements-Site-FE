import React from 'react';
import PropTypes from 'prop-types';

import styleClasses from './Popup.module.css';

Popup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onBackdropClick: PropTypes.func,
};

function Popup({ className, onBackdropClick, children, ...childProps }) {
    const classes = className + ' ' + styleClasses['popup-box'];

    return (
        <React.Fragment>
            <div className={styleClasses['popup-backdrop']} onClick={onBackdropClick}></div>
            <div {...childProps} className={classes}>{children}</div>
        </React.Fragment>
    );
}

export default Popup;