import React, { useState } from 'react'
import List from './List'
import data from "./data";


const App = () => {
  const [people,setPeople]=useState(data);
  return (
    <>
      <h3>{people.length}Birthdays Today</h3>
      <List props={people} />
      <button on onClick={()=>{setPeople([])}}>clear all</button>
    </>
  )
}

export default App