import React,{useState} from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const Login = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://basic-auth-6kzz.onrender.com/login",{
            method:"POST",
            body:JSON.stringify({
              username:username,
              password,
            }),
            headers:{
                "Content-type":"application/json",  
              },
        })
        .then((res)=>res.json())
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error
          
        ));
        
        
        
    }

  return (
    <div className='loginbox'>
    <form className='login' onSubmit={handleSubmit}>
        <label >username:</label>
        <input type="text" placeholder='Enter  username id' className='login1' value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        <label>password:</label>
        <input type="password" placeholder='Enter password' className='login2' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input className='sub-btn' type="submit" onClick={handleSubmit} value={Login}/>
       
    </form>
    
    </div>
  )
}

export default Login