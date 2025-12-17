import React, { useEffect } from 'react'
import { mustLoginFetch } from '../JS/functions'
import { useNavigate } from 'react-router-dom';

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
    } , [])
  return (
    <div className='chat'>
        
    </div>
  )
}
