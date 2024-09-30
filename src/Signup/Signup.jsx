import React, { useCallback, useState, useEffect } from 'react';
import _ from 'lodash'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Signup.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [ErrorConfirmMessage, setErrorConfirmMessage] = useState('')
  const [gender, setGender] = useState('')
  const [genderError, setGenderError] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [district, setDistrict] = useState('')
  const [pincode, setPincode] = useState('')
  const [street, setStreet] = useState('')
  const [userType, setUserType] = useState('')
  const [userTypeError, setUserTypeError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [selectedCountry,setSelectedCountry]=useState('select a country')
  const [countryError,setcountryError]=useState('')
  useEffect(() => {
    validatePasswords();
  }, [confirmPassword, password]);

  const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const evalutePasswordStrength = (psword) => {
    let strength = "weak;";
    const criteria =
      [{ regex: /.{8,}/, label: 'at least 8 characters' },
      { regex: /[A-Z]/, label: 'an uppercase letter' },
      { regex: /[a-z]/, label: 'a lowercase letter' },
      { regex: /\d/, label: 'a number' },
      { regex: /[!@#$%^&*]/, label: 'a special character' },]

    const passedCriteria = criteria.filter(criterion => criterion.regex.test(password))
    if (passedCriteria.length >= 4) {
      return strength = "Strong"
    }
    else if (passedCriteria.length >= 2) {
      return strength = "Medium"
    }
    return strength

  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword)
    const a = (evalutePasswordStrength(newPassword))
    console.log(a)
    // const {strength,passedCriteria}=evalutePasswordStrength(newPassword)
    setStrength(a)
    // console.log(strength)
  }


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (!emailRegrex.test(e.target.value)) {
      setErrorMessage('Invalid email address')
    }
    else {
      setErrorMessage('');
    }

  }
  const getStrengthColor = () => {
    if (strength === 'Strong' || strength === 'Medium') {
      return 'green';
    } else {
      return 'red';
    }
  }
  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setErrorConfirmMessage('Passwords do not match')
    }
    else {
      setErrorConfirmMessage('')
    }
  }

  const setConfirmedPassword = (value) => {
    setConfirmPassword(value)


  }
  const signUpRequest = (body) => {
    const url = "http://localhost:8000/auth/signup"
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    axios.post(url, body, config).then(response => {
      console.log('response', response.data)
      localStorage.setItem('bearerToken', response.data.bearerToken)
    })
      .catch(error => {
        console.log('ERROR', error)

      })
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!gender) {
      setGenderError('Please select a gender');
    } else {
      setGenderError('');
      // Handle form submission
      console.log(`Selected Gender: ${gender}`);
    }
    if (!userType) {
      setUserTypeError('Please select a gender');
    } else {
      setUserTypeError('');
    if(selectedCountry==='select a country')
    {
      setcountryError('please select a country')
    }
    }
    const body = {
      'emailId': email,
      'password': password,
      'firstName': firstName,
      'lastName': lastName,
      'pincode': pincode,
      'streetName': street,
      'district': district,
      'city': district,
      'state': gender,
      'country': selectedCountry,
      'roles': Array.from(new Set([userType])),
      
    }

    signUpRequest(body)

  }
const handleChangeCountry=(event)=>{
  const country=event.target.value;
  setSelectedCountry(country)

}
  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Power Mart Registration</h2>
        </div>
        <div className="row clearfix">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Email" required value={email} onChange={handleEmailChange} />
              </div>
              {errorMessage && <p style={{ color: 'red', }} className="validations">{errorMessage}</p>}

              <div className="input_field">
                <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Password" value={password} required onChange={handlePasswordChange} />
              </div>
              <p style={{ color: getStrengthColor() }} className="validations">{strength}</p>
              <div className="input_field">
                <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Re-type Password" required onChange={(e) => setConfirmedPassword(e.target.value)} />
              </div>
              {ErrorConfirmMessage && <p style={{ color: 'red' }}>{ErrorConfirmMessage}</p>}
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="Firtname" placeholder="First Name" required value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
              </div>
                <br />
              <input className="button" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
      <p className="credit">Developed by <a href="http://www.designtheway.com" target="_blank" rel="noopener noreferrer">Bhai team</a></p>
    </div>
  )
};



export default Signup