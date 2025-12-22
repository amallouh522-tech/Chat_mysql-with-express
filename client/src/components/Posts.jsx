import React, {  } from 'react'
import Stack from '@mui/material/Stack';
import socket from '../JS/socket';
import PostDt from './PostDt'

export default function Posts() {
    return (
        <Stack className='posts'>
            <PostDt id={2} username="Aasdas" title={"heloo ketchen"} text={"dosgioberigarghre"} Likes={5} />
            <PostDt id={1} username="Aasdas" title={"heloo ketchen"} text={"dosgioberigarghre"} Likes={5} />
            <PostDt id={3} username="Aasdas" title={"heloo ketchen"} text={"dosgioberigarghre"} Likes={5} />
            <PostDt id={4} username="Aasdas" title={"heloo ketchen"} text={"dosgioberigarghre"} Likes={5} />
        </Stack>
    )
}
