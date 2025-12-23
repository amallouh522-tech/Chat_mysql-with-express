import React from 'react';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';

export default function NavBar({ PageName, First , Scond , third}) {
  return (
    <div className='NavBar'>
      <nav>
        <Chip label={PageName} variant="outlined" />
        <ul>
          <li><Link to={Scond[0]}>{Scond[1]}</Link></li>
          <li><Link to={third[0]}>{third[1]}</Link></li>
          <li><Link to={First[0]}>{First[1]}</Link></li>
        </ul>
      </nav>
    </div>
  );
};
