import React from 'react';

import VideoCard from './VideoCard';
const Homepage = () => {
  return (
  <div className='main-flex-container'>
   
    <div className='page'>
    <div className='sidebar'>
    <button class="sidebar button">Home</button>
    <button>Shorts</button>
    <button>Subscription</button>
    <button>You</button>
    <button>History</button>
   
    </div>
    <div className='main'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
       
       
    </div>
    </div>
  </div> 
  );
};

export default Homepage;