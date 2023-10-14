import React, { useState } from 'react'
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"
const Questions = ({title,info}) => {
    const [showinfo, setShowInfo] = useState(false)
  return (
    <>
  <div className='flex items-center space-x-4 text-lg cursor-pointer'>
    <h1 className='font-xl font-bold'>{title}</h1>
<button onClick={()=>{setShowInfo(!showinfo)}}>
    {showinfo?<AiFillMinusCircle/>:<AiFillPlusCircle/>}
</button>
 </div>


  {showinfo&&
    <p className='font-lg font-semibold'>{info}</p>
  
  }
    </>
    

  )
}

export default Questions