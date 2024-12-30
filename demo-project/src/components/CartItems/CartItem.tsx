import style from "./CartItem.module.css"
import React, {useState} from "react";

interface CartItemProps {
    id: number,
    product: string,
    price: number,
    image: string,
    isClicked: (id: number, checked: boolean) => void
}

const Cart = ({product, price, image, isClicked, id}: CartItemProps) => {

    // const {product, price, image, isClicked} = props;

    return(
        <div className={style.cartContainer}>
            <input type="checkbox" onChange={(e) => isClicked(id, e.target.checked)}/>
            
            <div className={style.productImag}>
                <img src={image} />
            </div>

            <div className={style.productName}>
                <p>{product}</p>
            </div>

            <div className={style.productPrice}>
                <p>{price}</p>
            </div>
        </div>
    );
}
Cart.defaultProps = { 
    product: 'Product',
    price: '00.00',
    image: 'https://via.placeholder.com/150'
}
Cart.type ={
    product: String,
    price: String,
    image: String
}
export default Cart;