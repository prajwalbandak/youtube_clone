import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import  Feed  from "./components/Feed";
import Navabar from "./components/Navabar";
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from "./components/SearchFeed";



function App() {
  return (
    <BrowserRouter>
    <Box sx= {{backgroundColor:'#000'}}>
      <Navabar/>
      <Routes>
      <Route path = "/" exact element= {<Feed />} />
      <Route path = "/video/:id" exact element= {<VideoDetail/>} />
        <Route path = "/channel/:id" exact element= {<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
    </BrowserRouter>
  );
} 

export default App;
