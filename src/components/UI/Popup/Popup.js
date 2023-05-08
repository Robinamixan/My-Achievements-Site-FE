import React from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

Popup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onBackdropClick: PropTypes.func,
};

function Popup(props) {
    const {className, onBackdropClick, children, ...childProps} = props;
    const classes = className + ' popup-box';

    return (
        <React.Fragment>
            <div className={'popup-backdrop'} onClick={onBackdropClick}></div>
            <div {...childProps} className={classes}>{children}</div>
        </React.Fragment>
    );
}

export default Popup;