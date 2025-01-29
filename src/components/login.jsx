import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="page-container">
      <h1 className="main-title">SilAI</h1>
    
      
      <div className="login-container">
        <div className="login-card">
          <form className="login-form">
            <div className="form-group">
              <label>Login</label>
              <input
                type="email"
                placeholder="Email"
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
              />
            </div>
            
            <button className="login-button">LOGIN</button>
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
        </div>
      </div>
    </div>
  );
};

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default Login;
