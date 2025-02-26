import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]); // Array to store multiple errors
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                setErrors(json.errors.map(error => error.msg)); // Store all error messages
            } else {
                setErrors([json.error]); // Store single error message
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        {errors.length > 0 && (
                            <div className="err" style={{ color: 'red' }}>
                                {errors.map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;