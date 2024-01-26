import React, { useState } from 'react'
import './CSS/Loginsingup.css'

const LoginSignUp = () => {

  const [state,setState] = useState('Login');
  const [formData, setFormData] = useState({
    username:'',
    password: '',
    email:''
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  } 

  const login = async () => {
    console.log('Login good', formData);
    let responseData;
    await fetch('http://localhost:4000/api/users/login',{
      method: 'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data)=>responseData=data )

    if(responseData.success)
    {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else{
      alert(responseData.errors)
    }
  }

  const signUp = async () => {
    console.log('sign up good', formData);
    let responseData;
    await fetch('http://localhost:4000/api/users/signup',{
      method: 'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data)=>responseData=data )

    if(responseData.success)
    {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else{
      alert(responseData.errors)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fields">
          {state==='Sign up'?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Your Password'/>
        </div>
        <button onClick={() => {state==='Login'?login():signUp()}}>Continue</button>
        {state==='Sign up'?<p className="loginsingup-login">Already have an acount <span onClick={() => setState('Login')}>Login here</span></p>:<p className="loginsingup-login">Create an acount <span onClick={() => setState('Sign up')}>Click here</span></p>}
        <div className="liginsingup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , i agree polices</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp