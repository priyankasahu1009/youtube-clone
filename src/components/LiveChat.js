import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessages,setLiveMessages]=useState("")
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("api pooling");
            dispatch(
                addMessage({
                    name:generateRandomName(),
                     message:makeRandomMessage(20),
                })
            )
        },2000)
        return ()=>clearInterval(i)
    },[])
  return (
    <div>
    <div className='w-full h-[50px]  ml-2 border p-3 bg-white flex'><h1>Top Chat </h1><img alt='img' className='h-5 ml-3 mt-1' src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'/></div>
    
    <div className='w-full h-[600px] ml-2 p-2 border bg-white overflow-y-scroll flex flex-col-reverse'>
    
      <div>
        {chatMessages.map((c,i)=>(<ChatMessage key={i} name={c.name} message={c.message} />))}
        </div>
    </div>
    <form className='w-full p-2 ml-2 border border-gray-100' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(
            addMessage({
                name:"Priyanka sahu",
                message:liveMessages,
            })
        )
        setLiveMessages("")
    }}>
        <input className='w-[250px] border border-gray-300 rounded-lg' type='text' value={liveMessages} onChange={(e)=>{
            setLiveMessages(e.target.value)
        }}/>
        <button className='px-2 mx-2 pl-6 pr-6 bg-gray-300 rounded-lg'>send</button>
    </form>
    </div>
  )
}

export default LiveChat