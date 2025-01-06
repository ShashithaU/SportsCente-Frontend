import React, { useState } from 'react';
import style from './UserDetails.module.css';
import { useNavigate } from 'react-router-dom';
function UserDetails() {

    const [errorMessage, setErrorMessage] = useState('');
    const navigete = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        region: '',
        country: '',
        postalCode: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        city: '',
        region: '',
        country: '',
        postalCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors: any = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.addressLine1) newErrors.addressLine1 = 'Address Line 1 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.region) newErrors.region = 'Region is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        navigete('/cart');
        if (validate()) {
            // Proceed to the next step
            console.log('Form is valid');
            // Launch CartPage component
        } else {
            console.log('Form has errors');
            setErrorMessage('Please fill in all the required fields');
        }
    };

    return (
        <div className={style.container}>
            <h2>User Details</h2>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='Enter first name'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className={style.error}>{errors.firstName}</span>}
                </div>
                <div className={style.inputBlock}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Enter last name'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className={style.error}>{errors.lastName}</span>}
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        placeholder='Enter address line 1'
                        value={formData.addressLine1}
                        onChange={handleChange}
                    />
                    {errors.addressLine1 && <span className={style.error}>{errors.addressLine1}</span>}
                </div>
                <div className={style.inputBlock}>
                    <label>Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        placeholder='Enter address line 2'
                        value={formData.addressLine2}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder='Enter city'
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {errors.city && <span className={style.error}>{errors.city}</span>}
                </div>
                <div className={style.inputBlock}>
                    <label>Street/Province/Region</label>
                    <input
                        type="text"
                        name="region"
                        placeholder='Enter street/province/region'
                        value={formData.region}
                        onChange={handleChange}
                    />
                    {errors.region && <span className={style.error}>{errors.region}</span>}
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder='Enter country'
                        value={formData.country}
                        onChange={handleChange}
                    />
                    {errors.country && <span className={style.error}>{errors.country}</span>}
                </div>
                <div className={style.inputBlock}>
                    <label>Zip/Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder='Enter zip/postal code'
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                    {errors.postalCode && <span className={style.error}>{errors.postalCode}</span>}
                </div>
            </div>
            <div className={style.message}>
                <p>{errorMessage}</p>
                <button className={style.nextButton} onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
}

export default UserDetails;