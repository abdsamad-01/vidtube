import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"


const Searchbar = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{ 
                    borderRadius: 20, 
                    border: '1px solid #757575', 
                    pl: 2, 
                    mr: { sm:5 }, 
                    boxShadow: 'none',
                    // backgroundColor: 'transparent'
                }}
            >
            <input 
                class='search-bar'
                placeholder='Search...'
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                sx={{ fontFamily: 'DM Sans', fontWeight: '700', backgroundColor: 'red', border: 'none' }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default Searchbar



