import React,{Component} from 'react';
//import {Switch,Route} from 'react-router-dom';
import {  Route ,Routes,BrowserRouter} from 'react-router-dom';
import ForgotPassword from '../Login/ForgotPassword';
import Login from '../Login/Login';
import Signup from '../Signup/Signup'
import GenerateOtp from '../Login/GenerateOtp'
import ConfirmPasswordPage from '../Login/ConfirmPasswordPage';

//import { connect } from 'react-redux';


function Start()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route  path='/Signup' element={<Signup/>}/>
            <Route  path='/Login' element={<Login/>}/>
            <Route path='/Forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/generateOtp' element={<GenerateOtp/>}/>
            <Route path='/ConfirmPasswordPage' element={<ConfirmPasswordPage/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}
export default Start