import React from 'react';
import { useNavigate } from 'react-router-dom';
import SSOButtons from '../components/SSOButtons';
// import logo from '../assets/img/pegasus-logo.svg';

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-container">
          {/* <img src={logo} alt="Logo" className="login-logo" /> */}
        </div>
        <h2 className="login-title">Login</h2>
        <div className="login-input-container">
          <label htmlFor="email" className="login-label">Email</label>
          <input type="email" id="email" className="login-input-field" placeholder="Enter your email" />
          <label htmlFor="password" className="login-label">Password</label>
          <input type="password" id="password" className="login-input-field" placeholder="Enter your password" />
          <a href="/forgot-password" className="login-forgot-password">Forgot password?</a>
        </div>
        <button className="login-button">Sign In</button>
        <p className="login-signup-link">
          I don't have an account. <a href="/signup">Sign up</a>
        </p>
        <div className="login-or-separator">or</div>
        <div className="login-sso-button-container">
          <SSOButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
