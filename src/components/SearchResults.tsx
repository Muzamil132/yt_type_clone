import React from 'react'
import {useState,useEffect} from 'react'
import {Box,Typography,Stack} from '@mui/material'

import Videos from './VIdeos'
import { loadVideos } from '../utilis/fetchData'
import { VideoList } from '../Types/types'
import { useParams } from 'react-router-dom'
const SearchResults = () => {

    const {searchTerm} =useParams()
   
  const [videos,setVideos] =useState<VideoList| undefined >()
   

  useEffect(()=>{
    
    loadVideos(`search?part=snippet&q=${searchTerm}`).then(data=>{
      console.log("date is here",data)
      setVideos(data)
    }
      )
  },[searchTerm])

  
  
  return (
   <Stack
    sx={{ flexDirection:{sm:'column',md:"row"}}}>

   <Box sx={{p:2,overflowY:"auto",height:'90vh',flex:2}} >
    <Typography variant="h4" fontWeight="bold" mb={2}  sx={{color:"white"}}   >
      Search Results for <span style={{color:"#F31503"}}>
        Videos
      </span>
    </Typography>
    <Videos   videos={videos}/>
   </Box>


   </Stack>
  )
}

export default SearchResults