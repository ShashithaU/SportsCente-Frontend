import React, { ReactNode } from 'react';
import BucketSummery from '../BucketSummary/BucketSummery';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';

interface CartProps {
    children: ReactNode;
    totalPrice: number;
    totShipping: number;
    total: number;
}

const Cart: React.FC<CartProps> = ({ children, totalPrice, totShipping, total }) => {
    return (
        <div className={style.cart}>
            <div className={style.CartItem}>
                {children}
            </div>
            <BucketSummery>
                <p>Subtotal: {totalPrice}</p>
                <p>Shipping: {totShipping}</p>
                <p>Total: {total}</p>
            </BucketSummery>
            <div className={style.CartButton}>
                <button><Link to = '/'>Back</Link></button>
                <button><Link to = '/paymaent'>next</Link></button>
            </div>
        </div>
    );
};

export default Cart;
