import React, { useState } from 'react';
import './usestate.css';

const UseStateObject = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirm_password ||
            formData.password !== formData.confirm_password
        ) {
            alert('Please fill in all fields correctly and ensure passwords match.');
            return;
        }
        onSubmit(formData);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card__title">
                    <h2>Register</h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="card__item">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            id="username"
                            autoComplete="off"
                            value={formData.username}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="card__item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            value={formData.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="card__item">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            autoComplete="off"
                            value={formData.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="card__item">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            id="confirm_password"
                            autoComplete="off"
                            value={formData.confirm_password}
                            onChange={handleInput}
                        />
                    </div>
                    <button className="btn" style={{ cursor: 'pointer' }} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UseStateObject;
