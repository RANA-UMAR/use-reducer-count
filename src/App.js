import React, { useState } from 'react'
import data from './data'
import Questions from './Questions';

const App = () => {

  const [question,setQuestion] = useState(data);

  return (
    <>
<h1>All Questions Mentioned Here</h1>
{question.map((question)=>{

  return(
  <Questions key={question.id}{...question} />
  )
})}

    
    </>
  )
}

export default App