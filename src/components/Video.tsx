import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from './VIdeos'
import { loadVideos } from "../utilis/fetchData";
import { Item, VideoList } from "../Types/types";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<Item>();
  const [videos, setVideos] = useState<VideoList>();
  const { id } = useParams();

  useEffect(() => {
    loadVideos(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    loadVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader/>

  const { snippet: {  channelId, channelTitle }, statistics  } = videoDetail;

  return (
    <Container>
      <Stack direction={{sm:"row",xs:"column"}} gap={3}>
      <Box style={{flex:1 ,padding:2,marginTop:6}} >
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

      </Box>

      <div className="suggestion_list">
        <Videos direction="column" videos={videos}/>

      </div>


    
      </Stack>
    </Container>
  );
};

export default VideoDetail;