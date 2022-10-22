import React , {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

 const Signin = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })


    const submithandle = async ()=>{
      // console.log(name,email,password);
      let result = await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
          'Content-Type':'application/json'
        },
      });
      result = await result.json();
      console.log(result);
      navigate('/')
      localStorage.setItem("user",JSON.stringify(result));      
    }
  return (
    <div className='signin-container'>
      <h1>Register</h1>
      <input className='input-box-signin' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input className='input-box-signin' type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <input className='input-box-signin' type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <button className='input-box-signin' onClick={submithandle}>Submit</button>
    </div>
  )
}

export default Signin;