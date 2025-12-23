import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


export default function PostDt({ id, username, title, text, Likes }) {
  return (
    <Stack id={id} className='post'>
      <Chip className='h2' label={username} variant='outlined' />
      <Stack className='PostContent'>
        <Typography className='h4' variant='h4'>{title}</Typography>
        <Typography className='hp' variant='p'>{text}</Typography>
        <button className='LikeBtn'> ❤️ {Likes}</button>
      </Stack>
    </Stack>
  )
}
