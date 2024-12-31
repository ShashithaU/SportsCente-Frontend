import React from 'react';
import style from './UserDetails.module.css'

function UserDetails() {

  return (
    <div
        className={style.container}>
                   
            <div
                className={style.nameInput}>

                <div 
                    className={style.inputBlock}>
                    <label>name</label>
                    <hr />
                    <input type="text" 
                        placeholder='enter first name'/>
                </div>
        
                <div 
                    className={style.inputBlock}>
                    <label>name</label>
                    <hr />
                    <input type="text"
                    placeholder='enter first name'/>
                </div>
            </div>

            <div>

                <div
                    className={style.addressLine}>

                    <div 
                        className={style.inputBlock}>
                        <label>name</label>
                        <hr />
                        <input type="text" 
                        placeholder='enter first name'/>
                    </div>

                    <div 
                        className={style.inputBlock}>
                        <label>name</label>
                        <hr />
                        <input type="text" 
                        placeholder='enter first name'/>
                    </div>
                </div>

                <div>
                    <div
                        className={style.cityStreet}>

                        <div 
                            className={style.inputBlock}>
                            <label>name</label>
                            <hr />
                            <input type="text" 
                            placeholder='enter first name'/>
                        </div>

                        <div 
                            className={style.inputBlock}>
                            <label>name</label>
                            <hr />
                            <input type="text" 
                            placeholder='enter first name'/>
                        </div>
                    </div>

                    <div
                        className={style.postal}>

                        <div 
                            className={style.inputBlock}>
                            <label>name</label>
                            <hr />
                            <input type="text" 
                            placeholder='enter first name'/>
                        </div>

                        <div 
                            className={style.inputBlock}>
                            <label>name</label>
                            <hr />
                            <input type="text" 
                            placeholder='enter first name'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.message}>
                <p>message sdguylgwisyh d9yhdgp2e8dy</p>
                <button className={style.nextButton}>Next</button>
            </div>
    </div>
  );
}

export default UserDetails;