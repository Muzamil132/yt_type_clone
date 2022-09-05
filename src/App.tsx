import React from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import VideoDetail from "./components/Video"
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed';
import ChannelScreen from './components/Channel';
import Navbar from './components/Navbar';
import SearchResult from './components/SearchResults';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
    
      <Navbar/>
      
      <Routes>
       <Route path="/"  element ={<Feed/>}/>
       <Route path="/video/:id"  element ={<VideoDetail/>}/>
       <Route path="/channel/:id"  element ={<ChannelScreen/>}/>
       <Route path="/search/:searchTerm"  element ={<SearchResult/>}/>
     
      </Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
