// components/Login.js
import React from "react";
import { auth } from "../firebase/firebase";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
