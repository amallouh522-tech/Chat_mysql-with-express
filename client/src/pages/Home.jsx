import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { mustLoginFetch } from '../JS/functions';
import { useNavigate } from 'react-router-dom';
import Posts from '../components/Posts';
import socket from '../JS/socket';

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (!result) {
        navigate("/");
      }
    };

    socket.on("connect", () => {
      console.log("connected");
    });
    Check()
  }, []);

  return (
    <div>
      <NavBar PageName={"Home"}
        First={["/logout", "Logout"]}
        Scond={["/addpost", "Add new Post"]}
      />
      <Posts />
    </div>
  );
};
