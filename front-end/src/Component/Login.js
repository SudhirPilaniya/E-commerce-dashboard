import React, { useState , useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
 
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  const loginhandle = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/')
    }
    else{
      alert("Please enter correct details")
    }
  };
  return (
    <div className="signin-container">
      <h1>LogIn</h1>
      <input
        className="input-box-signin"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="input-box-signin"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="input-box-signin" onClick={loginhandle}>
        Submit
      </button>
    </div>
  );
};

export default Login;
