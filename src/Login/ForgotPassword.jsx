import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordDispatcher } from '../redux/LoginAction';

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forgotPasswordFun = (e) => {
    e.stopPropagation();
    dispatch(ForgotPasswordDispatcher(forgotPassword));
    navigate("/generateOtp");
  };

  const handleChangeForgotPassword = (e) => {
    setForgotPassword(e.target.value);
    console.log(forgotPassword)
  };

  return (
    <div className='forgot-password'>
      <p>Forgot password</p>
      <p>Please enter your email to reset your password</p>
      <label>Email</label>
      <br />
      <input
        placeholder='Email'
        value={forgotPassword}
        onChange={handleChangeForgotPassword}
      />
      <div>
        <button onClick={forgotPasswordFun} className='forgot-password-color'>
          Forgot Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
