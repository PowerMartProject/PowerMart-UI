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
			console.log('response',response.data)
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
				</div>
				<div>
					<Link  to="/ForgotPassword">
						Forgot Password
					</Link>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>	
		<div>

		</div>	
	</div>
</div>
    )
}
export default Login