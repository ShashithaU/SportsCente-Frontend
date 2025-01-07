import React, { useState } from 'react';
import style from './UserDetails.module.css';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        Province: '',
        Destrict: '',
        country: '',
        postalCode: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        Province: '',
        Destrict: '',
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
        if (!formData.Province) newErrors.Province = 'City is required';
        if (!formData.Destrict) newErrors.Destrict = 'Region is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validate()) {
            const jsonData = JSON.stringify(formData);

            console.log("Form Data in JSON:", jsonData);
            
            navigate('/cart');
            // try {
            //     const response = await fetch('https://your-api-endpoint.com/user-details', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(formData)
            //     });

            //     if (response.ok) {
            //         navigate('/cart');
            //         console.log('Form is valid and data sent to API');
            //     } else {
            //         console.log('Failed to send data to API');
            //         setErrorMessage('Failed to send data to API');
            //     }
            // } catch (error) {
            //     console.error('Error:', error);
            //     setErrorMessage('An error occurred while sending data to API');
            // }
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
                        placeholder='Enter first name*'
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
                        placeholder='Enter last name*'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className={style.error}>{errors.lastName}</span>}
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
                    <label>Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        placeholder='Street, house/apartment/unit*'
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
                        placeholder='Apt, suite, unit, etc(optional)'
                        value={formData.addressLine2}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Province</label>
                    <input
                        type="text"
                        name="Province"
                        placeholder='Enter Province*'
                        value={formData.Province}
                        onChange={handleChange}
                    />
                    {errors.Province && <span className={style.error}>{errors.Province}</span>}
                </div>
                <div className={style.inputBlock}>
                    <label>Destrict</label>
                    <input
                        type="text"
                        name="Destrict"
                        placeholder='Enter Destrict*'
                        value={formData.Destrict}
                        onChange={handleChange}
                    />
                    {errors.Destrict && <span className={style.error}>{errors.Destrict}</span>}
                </div>
            </div>
            <div className={style.formGroup}>
                <div className={style.inputBlock}>
                    <label>Zip/Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder='Enter zip/postal code*'
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