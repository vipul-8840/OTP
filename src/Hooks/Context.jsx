import React, { createContext, useState } from 'react'
import Increment from '../Increment';
export const incrementContext = createContext();


const Context = () => {
    const[data,setData]=useState(0);
  return (
     <incrementContext.Provider value ={{data,setData}}>
       <Increment/>
     </incrementContext.Provider>
  )
}

export default Context;
