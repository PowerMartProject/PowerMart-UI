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
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <input className="state" style={{ textAlign: 'center' }} value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter State' />
                </div>
                <br />
                <div style={{ marginBottom: '5px' }}>
                  <input className="pincode" style={{ textAlign: 'center' }} value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter Pincode' />
                </div>
                <br />
                <div style={{ marginBottom: '5px' }}>
                  <input className="district" style={{ textAlign: 'center' }} value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter district' />
                </div>
                <br />
                <div style={{ marginBottom: '5px' }}>
                  <input className="street" style={{ textAlign: 'center' }} value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Enter Street' />
                </div>
                <br />
              </div>

              <div style={{ display: 'flex' }}>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1" value="Male" onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="rd1">Male</label>
                </div>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd2" value="Female" onChange={((e) => setGender(e.target.value))} />
                  <label htmlFor="rd2">Female</label>
                </div>
                {genderError && <p style={{ color: 'red' }}>{genderError}</p>}
              </div>
              <div className="input_field select_option">
                <label>Country</label>
                <select id="countrySelect" value={selectedCountry} onChange={handleChangeCountry}>
                  <option>Select a country</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>The Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Brazil</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Cabo Verde</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Congo, Democratic Republic of the</option>
                  <option>Congo, Republic of the</option>
                  <option>Costa Rica</option>
                  <option>Côte d'Ivoire</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czech Republic</option>
                  <option>Denmark</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>East Timor (Timor-Leste)</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Eswatini</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Gabon</option>
                  <option>The Gambia</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Korea, North</option>
                  <option>Korea, South</option>
                  <option>Kosovo</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mexico</option>
                  <option>Micronesia, Federated States of</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Morocco</option>
                  <option>Mozambique</option>
                  <option>Myanmar (Burma)</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>North Macedonia</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palau</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Sudan, South</option>
                  <option>Suriname</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Taiwan</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Vatican City</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
                {countryError?<p style={{ color: 'red' }}>please select a country</p>:""}
                <div className="select_arrow"></div>
              </div>
              <div style={{ display: 'flex' }}>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup2" id="rd3" value="User" onChange={(e) => setUserType(e.target.value)} />
                  <label htmlFor="rd3">User</label>
                </div>
                <div className="input_field radio_option">
                  <input type="radio" name="radiogroup2" id="rd4" value="Electrician" onChange={(e) => setUserType(e.target.value)} />
                  <label htmlFor="rd4">Electrician</label>
                </div>
                {userTypeError && <p style={{ color: 'red' }}>{userTypeError}</p>}
              </div>
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