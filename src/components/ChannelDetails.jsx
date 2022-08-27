import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`);

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '275px',
                    background: 'linear-gradient(90deg, rgba(255,184,0,1) 0%, rgba(229,11,217,0.9946901123730743) 100%)',
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-97px" />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;

