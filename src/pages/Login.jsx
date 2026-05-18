import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      "http://localhost:5000/api/auth/login",
      formData
    );

    console.log("FULL RESPONSE:", res.data);   
    console.log("TOKEN:", res.data.token);     

    localStorage.setItem("token", res.data.token);

    setMessage(res.data.message);

    setTimeout(() => {
      navigate("/profile");
    }, 1500);

  } catch (error) {
    console.log("ERROR:", error); // 
    setMessage(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="form">
        <h2>Login</h2>

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

        <button type="submit">Login</button>
    {/*  Added Signup Link */}
        <p className="login-link">
          Don’t have an account?{" "}
          <Link to="/">Register</Link>
        </p>
        <p className="message">{message}</p>

    
      </form>
    </div>
  );
};

export default Login;