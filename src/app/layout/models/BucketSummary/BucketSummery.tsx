import React, { ReactNode } from 'react';
import style from './BucketSummery.module.css';

interface BucketSummeryProps {
    children: ReactNode;
}

const BucketSummery: React.FC<BucketSummeryProps> = ({ children }) => {
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
