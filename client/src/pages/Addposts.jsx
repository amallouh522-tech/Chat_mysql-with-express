import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { mustLoginFetch } from '../JS/functions';
import NavBar from '../components/NavBar';

export default function Addposts() {
  const navigate = useNavigate();

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
        First={["/logout" , "Logout"]}
        Scond={["/home" , "Home"]}
      />
      <Stack className='inputs'>
        <input placeholder='Enter Post title' className='title' type="text" name="Title" />
        <textarea placeholder='Enter Post text' className='text' type="text" name="Text" />
        <button className="btn">Add post</button>
      </Stack>
    </Stack>
  );
};