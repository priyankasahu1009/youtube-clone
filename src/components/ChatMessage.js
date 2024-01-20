import React from 'react'

const ChatMessage = ({name,message}) => {
  return (

    <div className='flex items-center p-2 shadow-sm'>
        <img class="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
        
            <span className='font-medium text-gray-400 px-2 mr-2'>{name}</span>
            <span className='font-xs'>{message}</span>
        
    </div>
  )
}

export default ChatMessage