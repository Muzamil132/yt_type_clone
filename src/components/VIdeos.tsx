import { Box, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { VideoList } from '../Types/types'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'


interface IProps{
    videos:VideoList | undefined 
    direction?:string
}


const Videos = ({videos,direction}:IProps) => {

    console.log(videos)


    return (
            
           direction==="column"? <Stack 
             direction="column"
           
          
           >
             {
                typeof videos!=='undefined' && videos?.items.map((item,id)=>(

                <Box sx={{width:{sm:"250px",xs:'100%',
                
                 
                },
            
                mt:2
               
               
                
                }}  >
                  <VideoCard item={item} />
                </Box>
               
               
                      
               
               ))

             }
            
           </Stack>
           :


           
               <Grid container spacing={2} >

              {
               
                  typeof videos!=='undefined' && videos?.items.map((item,id)=>(

             
                     <Grid key={id}  item xs={12} sm={4} md={3}>
                  
                         {
                            item.id.videoId && <VideoCard item={item}/>

                         }
                            {
                            item.id.channelId && <ChannelCard marginTop={2}  item={item}/>
                            
                         }
                           </Grid>
                  
                  ))

                        }
              
            
            </Grid>

             
        )


}
   
export default Videos