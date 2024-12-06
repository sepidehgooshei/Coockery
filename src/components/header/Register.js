

import React, { useState, useEffect } from "react";
export default function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmedPassword: "",
        isChecked: false,
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
             [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    useEffect(() => {
        const newErrors = {};
        if (formData.password && formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }
        if (formData.confirmedPassword && formData.password !== formData.confirmedPassword) {
            newErrors.confirmedPassword = "Passwords do not match!";
        }
        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        setErrors(newErrors);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted successfully:", formData);
        } else {
            console.log("Form has errors:", errors);
        }
    };

    return (
        <div className="container">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={formData.email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formData.password}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword1" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="confirmedPassword"
                            value={formData.confirmedPassword}
                            className="form-control"
                            id="confirmPassword1"
                        />
                        {errors.confirmedPassword && (
                            <p className="text-danger">{errors.confirmedPassword}</p>
                        )}
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            name="isChecked"
                            checked={formData.isChecked}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}


