import React from 'react'
import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div className='Login'>
          <div className="head">
            <h2>Sign UP - Anizy Store</h2>
          </div>
          <div className="inputs">
            <input type="text" placeholder='Enter username' className="inp" />
            <input type="email" placeholder='Enter Email' className="inp" />
            <input type="password" placeholder='Enter password' className="inp" />
            <button className="btn">Sign Up</button>
            <p>You already have Accout ? <Link to={"/"}>Go To Sign In</Link></p>
          </div>
        </div>
  )
}
