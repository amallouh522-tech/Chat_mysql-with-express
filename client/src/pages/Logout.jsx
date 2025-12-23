import React, { useEffect, useState } from 'react'
import { LogoutFetch } from '../JS/functions'
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';

export default function Logout() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [massege, setmassege] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function check() {
      const result = await LogoutFetch();
      if (result) {
        setLoading(false);
        navigate("/");
      } else {
        setmassege("error while logout");
        setTimeout(() => navigate("/home"), 6000);
      }
    };
    check();
  }, []);

  return (
    <Stack>
      <h2>{Loading ? true : "loading"}</h2>
      <h2>{massege}</h2>
    </Stack>
  );
};
