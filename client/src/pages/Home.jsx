import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Getusername, mustLoginFetch } from '../JS/functions';
import { useNavigate } from 'react-router-dom';
import Posts from '../components/Posts';
import socket from '../JS/socket';
import Chatside from '../components/Chatside';
import axios from 'axios';



export default function Home() {
  const [username, setusername] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (!result) {
        navigate("/");
      }
    };

    socket.on("connect", () => {
      
    });
    Check();

    async function Setusername() {
      const username = await Getusername();
      setusername(username);
    };

    Setusername();

  }, []);


  return (
    <div className='home'>
      <NavBar PageName={`Hello ${username}`}
        First={["/logout", "Logout"]}
        Scond={["/addpost", "Add new Post"]}
        third={["/chat" , "chat"]}
      />
      <div className='content'>
        <Chatside />
        <Posts />
      </div>
    </div>
  );
};
