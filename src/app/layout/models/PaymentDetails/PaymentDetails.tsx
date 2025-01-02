import React from "react";
import style from './PaymentDetails.module.css';

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
                    <button type="button">Back</button>
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentDetails;
