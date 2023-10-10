import React from 'react'
import Tours from './Tours'
const Tour = ({tours,removeTours}) => {
  return (
    <>
<h1 className='text-center text-3xl font-bold'>Our Tours</h1>
{tours.map((tour)=>{
return(
    <Tours key={tour.id}{...tour} removeTours={removeTours}></Tours>
)
})}
        
    </>
  )
}

export default Tour