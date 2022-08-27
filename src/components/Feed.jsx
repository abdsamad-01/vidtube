import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))

    }, [selectedCategory])

    return (
        <Stack sx={{
            flexDirection: { sx: 'column', md: 'row'},
        }}>
            <Box sx={{
                marginTop: {xs: '10px'},
                height: { sx: 'auto', md: '92vh' },
                borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography 
                    className='copyright'
                    sx={{ mt: 2, color: '#fff'}}
                    variant='body-2'
                >
                    &copy; Copyright 2022 Samad Musiliu
                </Typography>
            </Box>

            <Box p={1} sx={{ fontFamily: 'DM Sans', overflowY: 'auto', flex: 2, marginLeft: {md: '10px'}, marginTop: {xs: '10px'}}}>
                <Typography variant="h4" mb={2} fontWeight="600" sx={{ color: 'white', fontSize: '27px' }}>
                    {selectedCategory} <span style={{ color: '#f52a34' }}>videos</span>
                </Typography>
                <Videos 
                    videos={videos}
                />
            </Box>
        </Stack>
    )
}

export default Feed

