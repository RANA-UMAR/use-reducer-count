import React, { useState } from 'react'

const Tours = ({id,name,info,image,price,removeTours}) => {
    const [readmore,setReadmore] = useState(false);
  return (
    <>
    <div className='flex flex-col items-center justify-center '>
        <img src={image} alt={name} width="400px"/>
        <div className='m-10 w-96'>
        
        <p>
        {readmore?info:`${info.substring(0,200)}`}...
        </p>
        <button className='font-bold' onClick={()=>setReadmore(!readmore)}>
            {readmore?"Show less":"Read more"}
        </button>
        
        
        </div>
        <div className='flex space-x-6'>
        <h2 className='font-semibold'>{name}</h2>
        <h2 className='font-semibold'>{price}</h2>
        </div>
        <button className='delete my-4 px-10 py-2 border-2 border-red-500 text-red-500 font-semibold border-spacing-10 hover:bg-red-500 hover:text-white font-semibold' onClick={()=>{removeTours(id)}}>Not Interested</button>
</div>
    </>
  )
}

export default Tours