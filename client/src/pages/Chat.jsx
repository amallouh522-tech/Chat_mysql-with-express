import React, { useEffect } from 'react'
import { mustLoginFetch } from '../JS/functions'
import { useNavigate } from 'react-router-dom';
import ChatData from '../components/ChatData';
import NavBar from '../components/NavBar';
import OpenedChats from '../components/OpendChats';

export default function Chat() {
  const navigate = useNavigate()
  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (!result) {
        navigate("/")
      };
    };
    Check();
  }, [])
  return (
    <div className='chat'>
      <NavBar PageName={"Chat Page"}
        First={["/logout", "Logout"]}
        Scond={["/addpost", "Add new Post"]}
        third={["/home", "home"]}
      />
      <div className="content">
        <OpenedChats />
        <ChatData />
      </div>

    </div>
  )
}
