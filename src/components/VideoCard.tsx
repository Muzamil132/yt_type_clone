
import React from 'react'
import { Item } from '../Types/types'
import {CardMedia,Card,CardActions,CardContent,Typography} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl ,demoProfilePicture,demoThumbnailUrl,demoVideoTitle,demoVideoUrl} from '../utilis/contants'


interface IProps{
    item:Item
}

const VideoCard = ({item:{id:{videoId},snippet }}:IProps) => {
  return (
    <Card 
  
    >
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
      <img className='videoimage'  alt={snippet?.title} src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}  />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
    </Card>

  )
}

export default VideoCard
