import Stack from '@mui/material/Stack'
import React from 'react'
import Chatsid from './Chatsid'

export default function Chatside() {
    return (
        <div className='chatside'>
            <div className="head">
                <h2>Chats</h2>
            </div>
            <Stack className='chats'>
            </Stack>
        </div>
    )
}
