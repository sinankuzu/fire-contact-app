import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { getDatabase, get } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
useEffect(() => {
   onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
   });
}, [])

// useEffect(()=>{
//   get(
//     `https://console.firebase.google.com/u/0/project/fire-contact-app-427ea/database/fire-contact-app-427ea-default-rtdb/data/~2F`
//   )
// })
 
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
     await signOut(auth);
  };

  return (
    <div>
      <h1>register</h1>
      <label htmlFor="">Email</label>
      <input type="text" onChange={(e) => setRegisterEmail(e.target.value)} />

      <label htmlFor="">Password</label>
      <input
        type="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>

      <h1>login</h1>
      <label htmlFor="">Email</label>
      <input type="text" onChange={(e) => setLoginEmail(e.target.value)} />

      <label htmlFor="">Password</label>
      <input
        type="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <button onClick={logout}>Logout</button>

      <h1>user logged in:</h1>
      {user?.email}
    </div>
  );
};

export default Login;
