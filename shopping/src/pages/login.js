  import React from 'react' 
import './css/login.css'

  const Login = () => {
    return(
        <div className="login">
        <div className='login-container'>
            <h1>Signup</h1>
            <div className='login-fields'>
                <input type='text'placeholder='Your Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='password'placeholder='Password'/>
            </div>
            <button>Continue</button>
      <p className='login-login'>Already  have an account? <span>Login here</span>   </p>  
      <div className='login-agree'>
        <input type='checkbox' name='' id=''/>
       <p>By continuning ,i agree to the terms of use &privacy policy.</p> 
      </div>
      
      
        </div>
        </div>
    )
}
 export default Login