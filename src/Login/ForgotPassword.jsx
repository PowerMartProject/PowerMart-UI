import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordDispatcher } from '../redux/LoginAction';

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forgotPasswordFun = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(ForgotPasswordDispatcher(forgotPassword));

    const url = `http://localhost:8000/user/forgotpassword?email=${forgotPassword}`;
    axios.post(url)
      .then(response => {
        if (response.status === 200) {
          navigate("/GenerateOtp");
        } else {
          setError("Please enter a valid email ID");
        }
      })
      .catch(error => {
        console.error('ERROR', error);
       setError("Please enter a valid email ID")
      });
  };

  const handleChangeForgotPassword = (e) => {
    setForgotPassword(e.target.value);
  };

  return (
    <div className='forgot-password'>
      <p>Forgot password</p>
      <p>Please enter your email to reset your password</p>
      <label>Email</label>
      <br />
      <input
        type='email'
        placeholder='Email'
        value={forgotPassword}
        onChange={handleChangeForgotPassword}
      />
      <div>
        <button onClick={forgotPasswordFun} className='forgot-password-color'>
          Forgot Password
        </button>
        <button onClick={()=>{
          navigate('/Login')
        }} className='forgot-password-color' style={{marginLeft:'5px'}}>
          Back To Login
        </button>
      </div>
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
