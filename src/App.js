import React,{useReducer} from 'react'

const initialState = 0;
const reducer = (state,action)=>{
  if(action.type==="increment"){
    return state+1;
  }
  if(action.type==="decrement"){
    return state-1;
  }
  return state;

}
const App = () => {
   

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='text-center flex justify-center items-center flex-col my-20'>
    <p className='font-semibold mb-3'>BY USING USE REDUCER HOOK</p>
      <p className='text-3xl font-bold '>{state}</p>
      <div className='space-x-5 my-6'>
        <button className='p-3 bg-sky-600 text-white' onClick={()=>dispatch({type:"increment"})}>INCREMENT</button>
        <button className='p-3 bg-sky-600 text-white' onClick={()=>dispatch({type:"decrement"})}>DECREMENT</button>
      </div>
    </div>
  )
}

export default App