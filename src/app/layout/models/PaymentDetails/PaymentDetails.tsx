import React, { useState } from "react";
import style from './PaymentDetails.module.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PaymentDetails = () => {
    const param = useParams();
    const [paymentDetails, setPaymentDetails] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const jsonData  = JSON.stringify(paymentDetails);
        console.log("Payment Data in JSON:", jsonData);
        await sendPaymentDetails(paymentDetails);
    };

    return (
        <div className={style.PaymentDetails}>
            <h2>Payment Details {param.paymentId}</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                    <div className={style.inputBlock}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Enter Name' required onChange={handleChange} />
                    </div>
                    <div className={style.inputBlock}>
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" placeholder='Enter Card Number' required onChange={handleChange} />
                    </div>
                </div>
                <div className={style.inputGroup}>
                    <div className={style.inputBlock}>
                        <label>Expiry Date</label>
                        <input type="month" name="expiryDate" placeholder='Enter Expiry Date' required onChange={handleChange} />
                    </div>
                    <div className={style.inputBlock}>
                        <label>CVV</label>
                        <input type="text" name="cvv" placeholder='Enter 3 Digit Code' required onChange={handleChange} />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button type="button"><Link to='/cart'>Back</Link></button>
                    <button type="submit">Place Order</button>
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