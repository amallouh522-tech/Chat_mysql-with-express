import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import socket from '../JS/socket';
import PostDt from './PostDt'

export default function Posts() {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        socket.emit("loadposts");
        socket.on("reversposts", (result) => {
            setposts(result);
        })
    }, [])

    function PostsMap() {
        if (posts.length > 0) {
            posts.map((post, index) => (
                <PostDt key={index} id={post.id} username={post.user} title={post.title} text={post.Text} Likes={post.Likes} />
            ))
        }else{
            return(
                <h2 style={{textAlign: "center" , color:"red"}}>No posts right now</h2>
            );
        };
    }

    return (
        <Stack className='posts'>
            <PostsMap/>
        </Stack>
    )
}
