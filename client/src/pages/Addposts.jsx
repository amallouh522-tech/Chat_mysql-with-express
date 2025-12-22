import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { mustLoginFetch } from '../JS/functions';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Alert from '@mui/material/Alert';

export default function Addposts() {
  const navigate = useNavigate();
  const [msg, setmsg] = useState(null);
  const titleRef = useRef();
  const TextRef = useRef();

  async function AddpostFetch() {
    const title = titleRef.current.value;
    const text = TextRef.current.value;

    if (!title || !text) {
      setmsg(["red" , "please Enter Data"]);
    } else {
      try {
        const response = await axios.post(
          "/api/addpost", 
          {title,text},
          { withCredentials: true }
        );
        const result = await response.data;
        if (result.succ) {
          setmsg(["green" , "post Added succ"]);
        }
      } catch (error) {
        console.log(error);
      };
    };
  };

  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (!result) {
        navigate("/");
      }
    };

    Check();
  }, []);

  return (
    <Stack className='Addpost'>
      <NavBar PageName={"Add new post"}
        First={["/logout", "Logout"]}
        Scond={["/home", "Home"]}
      />
      <Stack className='inputs'>
        <h2 style={{ color: msg ? msg[0] : "black" }}>{msg ? msg[1] : <br />}</h2>
        <input ref={titleRef} placeholder='Enter Post title' className='title' type="text" name="Title" />
        <textarea ref={TextRef} placeholder='Enter Post text' className='text' type="text" name="Text" />
        <button onClick={AddpostFetch} className="btn">Add post</button>
      </Stack>
    </Stack>
  );
};