import React from 'react'
import SuggestionCard from './SuggestionCard'
const VideoPage = () => {
  return (
    <div className='VideoPage'>
      <div className='videoItem'>

      <iframe className="iframe-video" src="https://www.youtube.com/embed/jGBj55PMihM?si=VFSJgaB_YGfYvauR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
    <div className="suggestionBar">
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    
    </div>
   </div>
  )
}

export default VideoPage
