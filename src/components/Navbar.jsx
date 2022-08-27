import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { logo } from '../constant'
import { SearchBar } from '../components'


const Navbar = () => {
    return (
        <Stack 
            direction='row' 
            alignItems='center' 
            p={2}
            sx={{ position: 'sticky', top: 0, justifyContent: 'space-between', backgroundColor: '#141414' }}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt='logo' height={40} />
            </Link>
            <SearchBar />

        </Stack>
    )
}

export default Navbar

