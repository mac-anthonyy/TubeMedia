import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';








const SearchBar = () => {
  const [searchTerm, setSearchTerm] =  useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // this is to restrict the page from reloading after each submit

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={ {
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5},
        mt: { xs: 2, sm: 0}
    }}
    >
        <input 
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /> 
        <IconButton type='submit' sx={{p: '10px', color: 'red'}} >
            <Search />
        </IconButton>

    </Paper>
  )
}

export default SearchBar