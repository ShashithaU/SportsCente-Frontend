import React from "react";
import style from './PaymentDetails.module.css';
import { Link } from "react-router-dom";

const PaymentDetails = () => {
    return (
        <div className={style.PaymentDetails}>
            <h2>Payment Details</h2>
            <form>
                <div className={style.inputGroup}>
                    <div className={style.inputBlock}>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' required />
                    </div>
                    <div className={style.inputBlock}>
                        <label>Card Number</label>
                        <input type="text" placeholder='Enter Card Number' required />
                    </div>
                </div>
                <div className={style.inputGroup}>
                    <div className={style.inputBlock}>
                        <label>Expiry Date</label>
                        <input type="month" placeholder='Enter Expiry Date' required />
                    </div>
                    <div className={style.inputBlock}>
                        <label>CVV</label>
                        <input type="text" placeholder='Enter 3 Digit Code' required />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button type="button"><Link to = '/cart'>back</Link></button>
                    <button type="submit">Place Oder</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentDetails;
const sendPaymentDetails = async (paymentDetails: any) => {
    try {
        const response = await fetch('http://localhost:8080/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentDetails),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Payment successful:', data);
    } catch (error) {
        console.error('Error sending payment details:', error);
    }
};