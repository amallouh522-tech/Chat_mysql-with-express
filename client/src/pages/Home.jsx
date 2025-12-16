import React from 'react';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar PageName={"Home"}
        First={["/logout", "Logout"]}
      />
    </div>
  );
};
