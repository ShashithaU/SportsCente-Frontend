import React from 'react';
import style from './CartItem.module.css';

const Cart = ({ product, price, image, isClicked, id }) => {
    return (
        <div className={style.cartContainer}>
            <input type="checkbox" onChange={(e) => isClicked(id, e.target.checked)} />
            
            <div className={style.productImag}>
                <img src={image} alt={product} />
            </div>

            <div className={style.productName}>
                <p>{product}</p>
            </div>

            <div className={style.productPrice}>
                <p>{price}</p>
            </div>
        </div>
    );
};

Cart.defaultProps = { 
    product: 'Product',
    price: '00.00',
    image: 'https://via.placeholder.com/150'
};

export default Cart;
