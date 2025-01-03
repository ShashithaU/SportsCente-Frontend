import React from 'react';
import style from './UserDetails.module.css';

function UserDetails() {
    return (
        <div className={style.container}>
            <h2>User Details</h2>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter first name' />
                </div>
                <div className={style.inputBlock}>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter last name' />
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Address Line 1</label>
                    <input type="text" placeholder='Enter address line 1' />
                </div>
                <div className={style.inputBlock}>
                    <label>Address Line 2</label>
                    <input type="text" placeholder='Enter address line 2' />
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>City</label>
                    <input type="text" placeholder='Enter city' />
                </div>
                <div className={style.inputBlock}>
                    <label>Street/Province/Region</label>
                    <input type="text" placeholder='Enter street/province/region' />
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Country</label>
                    <input type="text" placeholder='Enter country' />
                </div>
                <div className={style.inputBlock}>
                    <label>Zip/Postal Code</label>
                    <input type="text" placeholder='Enter zip/postal code' />
                </div>
            </div>
            <div className={style.message}>
                <p>Please ensure all details are correct before proceeding.</p>
                <button className={style.nextButton}>Next</button>
            </div>
        </div>
    );
}

export default UserDetails;
