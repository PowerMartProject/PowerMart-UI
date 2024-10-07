import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'
import { LoggedIn } from '../LoginVerifiction/VerifyingJwt';


const Homepage = () => {
  const handleCart=()=>{
    if(!LoggedIn())
    {
      window.location.href='/Login'
    }
    else{
      window.location.href='/cart'
    }
  }
  const handleProfileSection=()=>{
    /*if(!LoggedIn())
    {
      window.location.href='/Login'
    }
    else{*/
      window.location.href='/MyProfile'
    // }
  }
  return (
    <div className="sidebar-container">
      <div className="logo">PowerMart.
      <label style={{fontSize:'10px'}}>in</label>
      </div>
      <input className="search-bar" type="text" placeholder="Search for products, brands and more" />
      <a className="login-title-container">
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img>
      <span style={{color:'black'}}>Login</span>
     
      <div className="hover-container-login">
        <div className='signup-and-profile-section'>
            <div className='cutomer-section'>
                <Link to="/Login" className='login-style'>Login</Link>
                <div className='signup-popup'>
                    <label>Are you new customer?</label>
                    <Link to ="/Signup" style={{marginLeft:'5px'}}>Start here</Link>
                </div>
                <hr/>
                <a className='profile-section' onClick={handleProfileSection}>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img>
                <span style={{marginLeft:'5px',color:'black'}}>My Profile</span>
                </a>
                <a className='order-section'>
                <img class="SFnind" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24"/>
                <span style={{marginLeft:'5px',color:'black'}}>Orders</span>
                </a>
                <a className='wishlist-section'>
                <img class="SFnind" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist" width="24" height="24"/>
                <span style={{marginLeft:'5px',color:'black'}}>Wishlist</span>
                </a>
            </div>
        </div>
      </div>
      </a>
      <a className='card-title-container' onClick={handleCart}>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" class="_1XmrCc" width="24" height="24"/>
      <span>Cart</span>
      </a>
     
      <div>
        <a className='three-dots'>
      <img class="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"/>
      <div className='hover-section-about'>
        <div>
        <span>About this website</span>
        <hr/>
        </div>
      </div>
      </a>
      </div>
    </div>
  );
};

export default Homepage;
