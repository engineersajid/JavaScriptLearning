import React, { useState } from "react";
import axios from "axios"; // Axios import korlam
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- ASHOL CHANGES EKHANE ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // url thik kora: Login naki Register
      const url = isLogin
        ? "http://localhost:5000/login"
        : "http://localhost:5000/register";

      // Backend e data pathano
      const response = await axios.post(url, formData);

      // Success hole message dekhabe
      alert(response.data.message || "Success!");
      console.log("Response:", response.data);

      // Jodi login hoy, token ta save kora lagte pare (pore dekhabo)
      if (isLogin && response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      // Error handle kora
      const errorMsg = error.response?.data?.error || "Kothao bhul hoyeche!";
      alert(errorMsg);
    }
  };

  return (
    <div className="wrapper">
      <div className="auth-box">
        <div className="header">
          <h2>{isLogin ? "Login" : "Create Account"}</h2>
          <p>
            {isLogin
              ? "Welcome back! Please login."
              : "Join us today! It only takes a minute."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign In" : "Register Now"}
          </button>
        </form>

        <div className="footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Register" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
