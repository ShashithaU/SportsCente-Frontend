import React, {ReactNode} from 'react';
import BucketSummery from '../BucketSummary/BucketSummery';
import style from './Cart.module.css';
import { Link, useNavigate } from 'react-router-dom';

interface CartProps {
    children: ReactNode;
    totalPrice: number;
    totShipping: number;
    total: number
    checkedItemId: number[];
}

const Cart: React.FC<CartProps> = ({ children, totalPrice, totShipping, total, checkedItemId }) => {
    const navigate = useNavigate();
    const cartData = {
        totalPrice,
        totShipping,
        total,
        checkedItemId
    };

    const handleNextClick = async () => {
        
        if((cartData.checkedItemId.length === 0)){
            alert("Please select items to proceed");
        }
        else{
            console.log("Cart Data in JSON:", JSON.stringify(cartData));
            try {
                const response = await fetch('http://localhost:8085/api/store/saveCheckedItems', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cartData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Success:', data);
                navigate('/paymaent/123');

            } catch (error) {
                console.error('Error:', error);
            }
        }
        
    };


    return (
        <div className={style.cart}>
            <div className={style.CartItem}>
                {children}
            </div>
            <BucketSummery>
                <p>Subtotal: {cartData.totalPrice}</p>
                <p>Shipping: {cartData.totShipping}</p>
                <p>Total: {cartData.total}</p>
            </BucketSummery>
            <div className={style.CartButton}>
                <button><Link to='/'>Back</Link></button>
                <button onClick={handleNextClick}>next</button>
            </div>
        </div>
    );
};

export default Cart;
