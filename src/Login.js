// src/Login.js

import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";


export default function Login() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
       
<div className="login-page">
  <div className="form">
    <div className="logologin"></div>
      
      
    
    
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button onClick={login}>Log in</button>
     
   
  </div>
</div>


    
  );
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};