import React from 'react'

const CommentContainer = () => {
    const commentData=[{
        name:"Priyanka sahu",
        text:"hello",
        replies:[],

    },{
        name:"Priyanka sahu",
        text:"hello",
        replies:[
            {
                name:"Priyanka sahu",
                text:"hello",
                replies:[],
        
            },{
                name:"Priyanka sahu",
                text:"hello",
                replies:[],
        
            }
        ],

    },{
        name:"Priyanka sahu",
        text:"hello",
        replies:[],

    }]

    const Comment=({data})=>{
        const {name,text,replies}=data;
        return (
            <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
                <img className='w-12 h-12' alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
                <div className='px-3'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
    const CommentsList=({comments})=>{
        return comments.map((comment,index)=>(
            <div key={index} >
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
             <CommentsList comments={comment.replies}/>
            </div>
            </div>
        ))
    }
  return (
    <div className=' p-2'>
        <h1 className='text-2xl font-bold'> Comments:</h1>
        <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentContainer