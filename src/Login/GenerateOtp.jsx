import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const GenerateOtp = () => {
  const [otp, setOtp] = useState('');
  const navigate=useNavigate()

  const forgotPassword = useSelector((state) => state.login.forgotPassword);
  console.log(forgotPassword);

  const handleChangeOtp = (otp) => {
    setOtp(otp);
    console.log(otp);
  };

  const verifyCode=()=>{
    //need to send otp to backend
    console.log(otp)
    navigate("/Login")

  }
  return (
    <div className='mail-invitation'>
      <p>Check your email</p>
      <p>We sent a reset link to <span>{forgotPassword}</span></p>
      <p>Enter the 5-digit code mentioned in the email</p>
      <OtpInput
        value={otp}
        onChange={handleChangeOtp} // Pass the function itself, not the result of calling it
        numInputs={5}
        renderSeparator={<span style={{ width: '10px' }}></span>}
        renderInput={(props) => (
          <input
            {...props}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '18px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              margin: '10px',
            }}
          />
        )}
      />
      <button className="setting-verify-code" onClick={verifyCode}
      >Verify Code </button>
    </div>
  );
};

export default GenerateOtp;
