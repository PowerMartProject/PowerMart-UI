import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const ConfirmPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const email = useSelector((state) => state.login.forgotPassword);

  const handleConfirmPassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const url = "http://localhost:8000/resetpassword";
    const data = {
      email: email,
      password: password
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    axios.post(url, data, config).then(
      response => {
        if (response.status === 200) {
          navigate('/Login');
        }
      }
    );
  };

  return (
    <div className="confirm-password-container">
      <label>Password</label>
      <br/>
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your new password" 
      />
            <br/>
      <label>Confirm Password</label>
      <br/>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter Password"
      />
            <br/>
      {error && <p className="error-message">{error}</p>}
      <br/>
      <button className="verify-confirm-password"
        onClick={handleConfirmPassword}>Update Password</button>
    </div>
  );
};

export default ConfirmPasswordPage;
