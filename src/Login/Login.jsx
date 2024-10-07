import {useState,useDispatch} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
import './ForgotPassword'




function Login()
{
	const[email,setEmail]=useState('')
	const[password,setPassword]=useState('')
	const handleSubmit=(e)=>{
		e.preventDefault()
		const data={
			'emailId':email,
			'Password':password
		}
		console.log(data)
		const url='http://localhost:8000/auth/login'
		const config={
			headers:{
			'Content-Type':'application/json',
			'Authorization':'Bearer'+localStorage.getItem('bearerToken')

		}};
		axios.post(url,data,config).then(response=>{
			const data=response.json()
			localStorage.setItem('token',data.token);

		})
		.catch(error=>{
			console.log('ERROR',error)

		})

	}
    return(
        <div className="form_wrapper">
	<div className="form_container">
		<div className="screen__content">
			<form className="login" onClick={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" value={email} onChange={(e)=>{
						setEmail(e.target.value)
					}}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" value={password} onChange={(e)=>{
						setPassword(e.target.value)
					}}/>
					<div style={{marginTop:'7px'}}>
					<Link  to="/ForgotPassword">
						Forgot Password
					</Link>
				</div>
				</div>
				
				<input className="button" type="submit" value="Login" />	
				<div className="customer-confirmation">
		  
				<h6>Are you new customer?</h6>
			<h6>
			<a href='/Signup'>Start here</a>
			</h6></div>
			
			</form>
			  
		</div>
		<div>

		</div>	
	</div>
</div>
    )
}
export default Login