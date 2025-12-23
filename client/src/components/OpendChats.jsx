import Stack from '@mui/material/Stack'
import React from 'react'
import Chats_id from './Chats_id'

export default function OpenedChats() {
    return (
        <Stack className='chatside'>
            <Stack className="head">
                <h2>Chats</h2>
            </Stack>
            <Stack className='chats'>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
                <Chats_id number={10}/>
            </Stack>
        </Stack>
    )
}
