import {Link} from 'react-router-dom'
import React from 'react'


export default function Chatsid({number}) {
  return (
    <Link className='id'>
        <img src="/img/username.png" />
        <h2>username {number}</h2>
    </Link>
  )
}
