import React, { useRef, useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";


export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [massege, setmassege] = useState(null)

  async function LoginFetch() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      setmassege("Please Enter Data")
    } else {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username,
          password
        });
        const result = await response.data;
        if (result.Succ) {
          navigate("/home")
        } else {
          setmassege("User OR password Invalide");
        };
      } catch (error) {
        console.error(error);
      };
    }
  }

  return (
    <div className='Login'>
      <div className="head">
        <h2>Login - Anizy Store</h2>
      </div>
      <div className="inputs">
        <h2 style={{ color: "red" }}>{massege} <br /></h2>
        <input ref={passwordRef} placeholder='Enter username' className="inp" type="text" />
        <input ref={usernameRef} placeholder='Enter password' className="inp" type="password" />
        <button onClick={LoginFetch} className="btn">Login</button>
        <p>You have not account yet ? <Link to={"/SignUp"}>Go To Sign UP</Link></p>
      </div>
    </div>
  )
}
