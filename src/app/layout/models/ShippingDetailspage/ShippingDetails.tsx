import React from 'react';
import style from './ShippingDetails.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import UserDetails from '../UserDetails/UserDetails';

const ShippingDetails: React.FC = () => {
    return (
        <div className={style.shippingDetails}>
            <ProgressBar 
                check01={true}
                check02={false}
                check03={false}/>
            <UserDetails />
        </div>
    );
};

export default ShippingDetails;