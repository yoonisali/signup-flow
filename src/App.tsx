import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialScreen from './pages/InitialScreen';
// import EntryScreen from './pages/EntryScreen';
// import ConfirmationScreen from './pages/ConfirmationScreen';
import SS0Buttons from './components/SSOButtons';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import LoginScreen from "./pages/LoginScreen"; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        {/* <Route path="/entry" element={<EntryScreen />} /> */}
        {/* <Route path="/confirmation" element={<ConfirmationScreen />} /> */}
        <Route path="/sso" element={<SS0Buttons />} />
        <Route path="/dashboard" element={<div className="container"><h1>Welcome to the Dashboard!</h1></div>} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/login" element={<LoginScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
