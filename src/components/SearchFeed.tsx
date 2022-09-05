import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from "@mui/icons-material"

const SearchFeed = () => {

  const navigate=useNavigate()

  const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
    setSearchTerm("")
    
   
  }

  const [searchTerm,setSearchTerm]=useState('')
  return (
    <Paper component="form" 
    onSubmit={handleSubmit}
     sx={{borderRadius:20,border:"1px solid#e3e3e3" ,px:2, boxShadow:"none",mr:{sm:5}  }}  >
     <input  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}   placeholder='Search videos...' className='search-bar' />
     <IconButton>
       <Search/>
     </IconButton>
    </Paper>
  )
}

export default SearchFeed