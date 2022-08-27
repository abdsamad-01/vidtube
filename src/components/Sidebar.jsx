import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../constant'


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category, id) => (
                <button 
                    key={id} 
                    className='category-btn' 
                    style={{background: category.name === selectedCategory && '#f52a34', color: '#fff' }}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    <span style={{ color: category.name === selectedCategory ? '#fff' : '#f52a34' }}> {category.icon} </span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8', marginLeft: '12px' }}> {category.name} </span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar


