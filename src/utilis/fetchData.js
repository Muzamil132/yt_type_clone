import { VideoList } from "../Types/types";
import axios from 'axios'



const options = {

  params: {
  
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'dc67fcf835msh46da8b5a16662d3p194d16jsn9f80422a892f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const URL =process.env.REACT_APP_BASE_URL
console.log(URL)



export const loadVideos=async(url)=>{
  const {data} = await  axios.get(`${URL}/${url}`,options)

  return data
 

}
