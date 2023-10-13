import React, { useState } from 'react'
import {GrFormPrevious,GrFormNext} from "react-icons/gr"
import data from './data'
const Review = () => {
  const [index,setIndex] =useState(0);
  const {name,image,job,text} = data[index];
  console.log(data);

  const checkNumber =(number)=>{
    if(number>data.length-1){
return 0;
    }
    if(number<0){
      return data.length-1;
    }
    return number;
  }

  const nextBtn = ()=>{
  setIndex((index)=>{
    let newIndex = index + 1;
    return checkNumber(newIndex);
  }) 

  }

  const previousBtn = ()=>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const Random = ()=>{
const newNumber = Math.floor(Math.random()*data.length)
console.log(newNumber);
if(newNumber === index){
  newNumber = index+1;
}
setIndex(checkNumber(newNumber))
  }
  
  return (
    <>
    <h1 className='text-2xl'>OUR REVIEWS</h1>
<img src={image} alt="name" width="200px" />
<h2 className='text-xl font-bold'>{name}</h2>
<p className='text-lg font-semibold'>{job}</p>
<p className='w-96'>{text}</p>






<div className='flex py-5 space-x-5 text-2xl '>



<GrFormPrevious onClick={previousBtn}/>
<GrFormNext onClick={nextBtn}/>

<button onClick={Random} className='p-1 bg-sky-400'>Random</button>
</div>


    </>
  )
}

export default Review