import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import axios from 'axios';

const GenerateOtp = () => {
  const [otp, setOtp] = useState('');
  const[error,setError]=useState('')
  const navigate=useNavigate()

  const forgotPassword = useSelector((state) => state.login.forgotPassword);
  console.log(forgotPassword);

  const handleChangeOtp = (otp) => {
    setOtp(otp);
    console.log(otp);
  };

  const verifyCode=()=>{
    //navigate("/ConfirmPasswordPage")
    //need to send otp to backend
    const url = 'http://localhost:8000/user/validate'
    const config={
        headers:{
			'Content-Type':'application/json',
			'Authorization':'Bearer'+localStorage.getItem('bearerToken')

		}
    }
    const data={
        "emailId":forgotPassword,
        "otp":otp
    }
    axios.post(url,data,config).then(
        response=>{
            if(response.status===200)
            {
                navigate("/ConfirmPasswordPage")
            }
            else{
                setError('Please enter a valid OTP')
            }
        }
    )
    //send email and otp in payload
    /* {
  "emailId": "string",
  "otp": "string"
}*/
    console.log(otp)
  
    // navigate to new password entry page
    /* url = http:localhost:8000/resetpassword
    {
  "emailId": "string",
  "password": "string"
}
if status is ok then redirect to Login page
    */
  }
  return (
    <div className='mail-invitation'>
      <p>Check your email</p>
      <p>We sent a reset link to <span>{forgotPassword}</span></p>
      <p>Enter the 5-digit code mentioned in the email</p>
      <OtpInput
        value={otp}
        onChange={handleChangeOtp} // Pass the function itself, not the result of calling it
        numInputs={6}
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
      {error&&<p className='error-message'>{error}</p>}
    </div>
  );
};

export default GenerateOtp;
