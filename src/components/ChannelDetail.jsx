import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {

    const [ ChannelDetail, setChannelDetail] = useState(null);
    const [ videos, setVideos] = useState([]);
    const { id } = useParams();
    console.log("deiiiiii CHANNELDETAILS",ChannelDetail);

    useEffect(() =>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data))
        

        fetchFromAPI(`search?channelID=${id}part=snippet&order=date`)
        .then((data) => setVideos(data?.items))

    }, [id])

  return (
   <Box minHeight="95vh">

    <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'}} />
    </Box>

   </Box>
  )
}

export default ChannelDetail