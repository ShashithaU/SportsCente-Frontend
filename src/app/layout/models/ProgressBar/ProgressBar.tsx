import React from 'react';
import style from './ProgressBar.module.css';
import PropTypes from 'prop-types';

interface ProgressBarProps {
    check01: boolean;
    check02: boolean;
    check03: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    return (
        <div className={style.progressBar}>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: props.check01 ? 'red' : 'transparent'}}/>
                <p>Shipping Details</p>
            </div>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: props.check02 ? 'red' : 'transparent'}}/>
                <p>Conform Order</p>
            </div>
            <div className={style.ProgressContainer}>
                <div className={style.checkBox} 
                    style={{backgroundColor: props.check03 ? 'red' : 'transparent'}}/>
                <p>Place Order</p>
            </div>
        </div>
    );
}

ProgressBar.defaultProps = {
    check01: false,
    check02: false,
    check03: false
};

ProgressBar.propTypes = {
    check01: PropTypes.bool.isRequired,
    check02: PropTypes.bool.isRequired,
    check03: PropTypes.bool.isRequired
};

export default ProgressBar;
