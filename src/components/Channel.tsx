import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import  Videos from "./VIdeos"
import ChannelCard from "./ChannelCard";
import { loadVideos} from "../utilis/fetchData";
import { Item, VideoList } from "../Types/types";
import ChannelVideo from "./ChannelVideo";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState<VideoList>();
  console.log(videos)

  const { id } = useParams();

  console.log(id)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await loadVideos(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await loadVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      console.log(videosData?.items)
      
      setVideos(videosData);

    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard item={channelDetail} marginTop="-93px" />
      </Box>
      {/* <ChannelVideo videos={videos} /> */}
      <Box sx={{p:2}}  >
      <Videos videos={videos} />
      </Box>
    
      
    </Box>
  );
};

export default ChannelDetail;