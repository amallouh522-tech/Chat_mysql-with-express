import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { mustLoginFetch } from '../JS/functions';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    async function Check() {
      const result = await mustLoginFetch();
      if (!result) {
        navigate("/");
      }

    };
    Check()
  }, []);

  return (
    <div>
      <NavBar PageName={"Home"}
        First={["/logout", "Logout"]}
      />
    </div>
  );
};
