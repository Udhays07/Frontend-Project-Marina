import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    navigate('/Mainpage');
  };

  return (
    <div className="page-container">
      <h1 className="main-title">SilAI</h1>
      <div className="login-container">
        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Login</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">LOGIN</button>
            <p className="forget-pass">Forget Password?</p>
          </form>
          <div className="divider">or</div>
          <button className="google-button">
            <img 
              src="../src/assets/google.svg" 
              alt="Google" 
              className="google-icon"
            />
            <span>Sign in with Google</span>
          </button>

          <div className="new-user">New User <span>Sign In</span></div>
        </div>
      </div>
    </div>
  );
};

export default Login;