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
    <div>
      <center>
      <label>
      Nombre:
      <input type="text" name="nombre" />
      </label>
      &nbsp;
      <label>
      Password:
      <input type="text" name="pass" />
      </label>
      <p>
Debe iniciar sesión para ver la página en {from.pathname}</p>
      <button onClick={login}>Log in</button>
      </center>
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