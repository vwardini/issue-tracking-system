import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/user_icon.jpg'

export const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");


  return (
    <div className='container'>
        <div className='header'>
            <div class="text">{action}</div>
            <div class="underline"></div>
        </div>
        <div class="inputs">
            {action === "Login"?<div></div>:<div class="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div class="input">
                <img src={user_icon} alt=""/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div class="input">
                <img src={user_icon} alt=""/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp
