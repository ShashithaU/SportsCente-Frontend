import React from 'react';
import style from './BucketSummery.module.css';

const BucketSummery = ({ children }) => {
    return (
        <div className={style.BucketSummeryContainer}>
            <h3>Bucket Summery</h3>
            <div className={style.BucketSummery}>
                {children}
            </div>
        </div>
    );
}

export default BucketSummery;
