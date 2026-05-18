import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
           <div className="bubbles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
      <form onSubmit={submitHandler} className="form">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={changeHandler}
        />

        <button type="submit">Register</button>

        <p className="message">{message}</p>

        {/* 👇 Login link */}
        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;