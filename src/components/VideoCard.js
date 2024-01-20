import React from 'react'

const VideoCard = ({info}) => {
    
     const {snippet,statistics}=info;
     const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='m-2 w-72 h-[330px] border rounded-lg shadow-lg '>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
        <ul >
            <li className='font-bold pt-2 pl-2'>{title}</li>
            <li className='pl-2'>{channelTitle}</li>
            <li className='pl-2'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard