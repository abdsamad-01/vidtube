import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl, demoProfilePicture } from '../constant';


const VideoCard = ({ video: { id: { videoId },  snippet } }) => {
  
    return (
        <Card sx={{ width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={snippet?.name}
                    sx={{ width: '358px', height: '180px'}}
                />
            </Link>
            <CardContent
                sx={{ height: '65px', backgroundColor: '#1e1e1e'}}>
                <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl } >
                    <Typography variant='subtitle1' fontWeight='bold' color='white' fontFamily='DM Sans'>
                        {snippet?.title.slice(0, 60) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl } >
                    <Typography variant='subtitle2' fontWeight='bold' color='gray' marginTop='5px' sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}} fontFamily='DM Sans'>
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: '12px', color: 'gray', marginLeft: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>     
        </Card>
    )
}

export default VideoCard

