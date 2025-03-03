import React from 'react';
import { AuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, microsoftProvider, appleProvider, facebookProvider } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../assets/img/google-logo.png';
import microsoftLogo from '../assets/img/microsoft-logo.png';
import appleLogo from '../assets/img/apple-logo.png';
import facebookLogo from '../assets/img/facebook-logo.png';

const SSOButtons = () => {
  const navigate = useNavigate();

  const handleSSOLogin = async (provider: AuthProvider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Signed in as ${result.user.displayName || result.user.email}`);
      navigate('/dashboard');
    } catch (error) {
      const err = error as Error;
      alert(`Sign-In failed: ${err.message}`);
    }
  };

  return (
    <div className="sso-buttons">
      
      <button className="sso-button google" onClick={() => handleSSOLogin(googleProvider)}>
        <img src={googleLogo} alt="Google Logo" className="sso-logo" />
        <span className="sso-text">Continue with Google</span>
      </button>

      <button className="sso-button microsoft" onClick={() => handleSSOLogin(microsoftProvider)}>
        <img src={microsoftLogo} alt="Microsoft Logo" className="sso-logo" />
        <span className="sso-text">Continue with Microsoft</span>
      </button>

      <button className="sso-button apple" onClick={() => handleSSOLogin(appleProvider)}>
        <img src={appleLogo} alt="Apple Logo" className="sso-logo" />
        <span className="sso-text">Continue with Apple</span>
      </button>

      <button className="sso-button facebook" onClick={() => handleSSOLogin(facebookProvider)}>
        <img src={facebookLogo} alt="Facebook Logo" className="sso-logo" />
        <span className="sso-text">Continue with Facebook</span>
      </button>
    </div>
  );
};

export default SSOButtons;
