import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";
import { mustLoginFetch } from '../JS/functions';
import Stack from '@mui/material/Stack';


export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [massege, setmassege] = useState(null)

  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (result) {
        navigate("/home");
      }
    };

    Check();
  }, []);


  async function LoginFetch() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      setmassege("Please Enter Data")
    } else {
      try {
        const response = await axios.post(
          "/api/login",
          { username, password },
          { withCredentials: true }
        );

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
    <Stack className='Login'>
      <Stack className="head">
        <h2>Login - Anizy Store</h2>
      </Stack>
      <Stack className="inputs">
        <h2 style={{ color: "red" }}>{massege} <br /></h2>
        <input name='username' ref={usernameRef} placeholder='Enter username' className="inp" type="text" />
        <input name='password' ref={passwordRef} placeholder='Enter password' className="inp" type="password" />
        <button onClick={LoginFetch} className="btn">Login</button>
        <p>You have not account yet ? <Link to={"/SignUp"}>Go To Sign UP</Link></p>
      </Stack>
    </Stack>
  )
}
