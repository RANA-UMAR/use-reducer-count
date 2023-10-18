import React, { useEffect, useState } from 'react'


const url = "https://course-api.com/react-tabs-project"

const App = () => {
  const [loading,setLoading] = useState(true);
  const [job ,setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () =>{
    const response = await fetch(url);
    const newJobs  = await response.json();
    setJob(newJobs);
    setLoading(false);
  }
  useEffect(()=>{
fetchJobs();
  },[])

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  const {company,dates,duties,title} = job[value];
  return (
    <div className=''>
    <h1 className='text-center font-bold text-3xl'>EXPERIENCE</h1>
{job.map((item,index)=>{
return(
  /* set button values */
  <button className=' px-5 py-3 font-semibold text-lg flex' 
  key={item.id} 
  onClick={()=>setValue(index)
  
  }>
<div className='bg-gray-600 w-32 text-center text-white p-2 font-medium'>{item.company}</div>


  </button>
  
)
  
})}
  {/* set info   */}
  <h1 className=' font-medium'>{title}</h1>
  <h1 className=' font-medium'>{company}</h1>
  <p className=' font-medium'>{dates}</p>
  {duties.map((item,index)=>{
return(
<div key={item}>
{item}
</div>
)
  })}

    </div>
  )
}

export default App