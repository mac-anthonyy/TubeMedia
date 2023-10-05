
import React from 'react';
import { Stack,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../assets/constants';
import SearchBar  from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction={{sm: 'row'}} alignItems="center" p={2} sx={ {position: "sticky", background: "#000", top: 0, justifyContent: "space-between"} }  >
      <Link to= "/" style={ {display: "flex", alignItems: "center"} }  >
          <img src={logo} alt="logo" height={45} /> <Typography variant='h1' sx={{color: 'white', fontSize: '30px', fontWeight: 'bold', marginLeft: '4px'}}>TubeMedia</Typography>
      </Link>
      <SearchBar  />
    </Stack>
  )
}

export default Navbar