import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import socket from '../JS/socket';
import PostDt from './PostDt'

export default function Posts() {

    useEffect(() => {
        socket.emit("loadposts")
    } , [])

    return (
        <div className='posts'>
        </div>
    )
}
