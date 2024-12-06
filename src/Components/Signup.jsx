import React,{useState} from 'react'

const Signup = () => {

    const [username,setuserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://basic-auth-6kzz.onrender.com/register",{
            method:"POST",
            body:JSON.stringify({
                username:username,
                email:email,
                password:password,
            }),
            headers:{
                "Content-type":"application/json",
            },

        })
        .then((res)=>res.json())
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));
        
    };
  return (
       
    <div className='signbox'>
    <form className='sign' onSubmit={handleSubmit}>
        <label>User name:</label>
        <input type="text" placeholder='enter user name'className='sign1' value={username} onChange={(e)=>setuserName(e.target.value)}/>
        <label>Email:</label>
        <input type="email" placeholder='enter email' className='sign2' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password:</label>
        <input type="password"   className='sign3' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        <input className='sub-btn'  type="submit" value={Signup}/>
    </form>
       </div>
   
  )
}

export default Signup