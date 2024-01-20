import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='   '>
     <div className='w-44  border-b p-2 mr-2 pt-4 pb-4 '>
   <div className='flex font-medium '><img alt='img' className='h-10  ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWziKg89GHK59UYKAw752KPa0RWFBEBj-fKmz6EVAszg&s'/><Link to="/" className=' mt-2 ml-1'>Home</Link></div> 
    <div className='flex'> <img alt='img' className='h-10 ml-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RMcerT1b9QYvj6BNGV173gWjXkdaRWR8zDGsnn4ndi_fJ_eLN_yyZV6Mo9gtACGOATE&usqp=CAU'/><h1 className='mt-2 ml-2'>Shorts</h1></div>
    <div className='flex'> <img alt='img' className='h-6 ml-4 mt-2' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png'/><h1 className='ml-4 mt-2'>Subscriptions</h1></div>
    </div>
    <div className='w-44  border-b p-2 mr-2 pt-4 pb-4 '>
        <h1 className='font-medium text-lg ml-4 mb-1'>You</h1>
   <div className='flex '><img alt='img' className='h-6  ml-4 mt-2 mr-2 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD6FOA-PJ-ieDwrEn5oj43tAHU-jfBfR2raw9DnZ5FIZr94eT95UdDsqjnN3a1lfYQVw&usqp=CAU'/><h1 className=' mt-2 ml-2 '>Your channel</h1></div> 
    <div className='flex'> <img alt='img' className='h-6 mt-2 mr-2  ml-4' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/recent-2030401-1712660.png'/><h1 className='mt-2  ml-2 '>History</h1></div>
    <div className='flex'> <img alt='img' className='h-6 ml-4 mt-2' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png'/><h1 className='ml-4 mt-2'>Your videos</h1></div>
    <div className='flex'> <img alt='img' className='h-10 ml-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQJlD9YigGqj8-Un_q_2kIz07Q-Dd28Ir2L9PLp-LnTO8f9u--OpSlGdanqpQtLmDcOM&usqp=CAU'/><h1 className='mt-2  ml-2 '>Watch Later</h1></div>
    <div className='flex'> <img alt='img' className='h-5  mr-2 mt-2 ml-4' src='https://freepngimg.com/thumb/youtube/77754-like-icons-signal-youtube-computer-button-thumb.png'/><h1 className='mt-2  ml-2 '>Liked videos</h1></div>
    </div>


    </div> 
  )
}

export default Sidebar