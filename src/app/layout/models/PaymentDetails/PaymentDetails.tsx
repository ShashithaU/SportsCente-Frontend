import React from "react";

import style from './PaymentDetails.module.css';

const PaymentDetails = () => {
  return (
    <div className={style.PaymentDetails}>
        <div
            className={style.nameInput}>

            <div 
                className={style.inputBlock}>
                <label>Name</label>
                <hr />
                <input type="text" 
                    placeholder='enter Name'
                    required/>
            </div>
    
            <div 
                className={style.inputBlock}>
                <label>Card Number</label>
                <hr />
                <input type="text" 
                placeholder='enter card number'
                required/>
            </div>
        </div>

        <div
            className={style.nameInput}>

            <div 
                className={style.inputBlock}>
                <label>Ex Date</label>
                <hr />
                <input type="month"   
                    placeholder='enter ex date'
                    required/>
            </div>
    
            <div 
                className={style.inputBlock}>
                <label>CVV</label>
                <hr />
                <input type="text"
                placeholder='enter 3 digit code'
                required/>
            </div>
        </div>

        <div className={style.buttons}>

            <button>Back</button>
            <button>Next</button>
        </div>
    </div>
  );
};

export default PaymentDetails;