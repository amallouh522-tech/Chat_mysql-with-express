import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from 'react';


export default function SignUp() {

  const [massege, setmassege] = useState(null)

  const usernameRef = useRef();
  const EmailRef = useRef();
  const passwordRef = useRef();

  async function RegisterFetch() {
    const username = usernameRef.current.value;
    const Email = EmailRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !Email || !password) {
      return setmassege(["please Enter Data", "red"])
    } else {
      try {
        const response = await axios.post("/api/register", {
          username,
          Email,
          password
        });

        const result = await response.data;
        if (result.succ) {
          setmassege(["Sign is Succesed", "green"]);
        } else {
          setmassege(["Sign is not Succesed", "red"]);
        };
      } catch {
        setmassege(["server dosent response", "red"])
      }
    }
  };

  return (
    <div className='Login'>
      <div className="head">
        <h2>Sign UP - Anizy Store</h2>
      </div>
      <div className="inputs">
        <h2 style={{ color: massege ? massege[1] : "black" }}>{massege ? massege[0] : <br />}</h2>
        <input type="text" placeholder='Enter username' ref={usernameRef} className="inp" />
        <input type="email" placeholder='Enter Email' ref={EmailRef} className="inp" />
        <input type="password" placeholder='Enter password' ref={passwordRef} className="inp" />
        <button onClick={RegisterFetch} className="btn">Sign Up</button>
        <p>You already have Accout ? <Link to={"/"}>Go To Sign In</Link></p>
      </div>
    </div>
  )
}
