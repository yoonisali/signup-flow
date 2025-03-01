import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import Firebase auth instance
import SSOButtons from '../components/SSOButtons';
import logo from '../assets/img/pegasus-logo.svg';

const InitialScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // Navigate to the dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <img src={logo} alt="Pegasus Forge Logo" className="login-logo" />

        {/* Heading */}
        <h2 className="login-title">Login</h2>

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            required
          />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="login-button">Sign In</button>
        </form>

        {/* Sign Up Link */}
        <p className="signup-text">
          I don't have an account. <a href="#">Sign up</a>
        </p>

        {/* OR Separator */}
        <div className="or-separator">or</div>

        {/* SSO Buttons */}
        <div className="sso-button-container">
          <SSOButtons />
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
