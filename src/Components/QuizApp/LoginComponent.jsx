import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom' 


const LoginComponent = () => {

    const navigate=useNavigate()

    const [showSuccessMessage,setShowSuccessMesage]=useState(false)
    const[showErrorMessage,setShowErrorMessage]=useState(false)
    const[username,setUsername]=useState('CodeSite')
    const[password,setPassword]=useState('dummy')

    function handleSubmit(){
        if(username==='CodeSite' && password==='dummy'){
            setShowSuccessMesage(true);
            setShowErrorMessage(false);
            navigate(`/welcome`)
        }else{
            setShowErrorMessage(true)
            setShowSuccessMesage(false)
        }
    }
    function handleUsername(event){
        setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
  return (
    <div>
        <h1>Time To Login now!</h1>
        {showSuccessMessage && <div className='alert'>User Authentication Successfull !!</div>}
        {showErrorMessage && <div className='alert'>User Authentication failed. Check Your Credentials</div>}
        <div>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={handleUsername}></input>
        </div>
       <div>
       <label>password</label>
        <input type='password' name='password' value={password} onChange={handlePassword}></input>
       </div>
       <div>
        <button className='btn btn-success m-5 ' onClick={handleSubmit}>Login</button>
       </div>
    </div>
  )
}

export default LoginComponent