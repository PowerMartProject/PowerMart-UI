import React,{Component} from 'react';
//import {Switch,Route} from 'react-router-dom';
import {  Route ,Routes,BrowserRouter} from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup'
//import { connect } from 'react-redux';


function Start()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route  path='/Signup' element={<Signup/>}/>
            <Route  path='/Login' element={<Login/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}
export default Start