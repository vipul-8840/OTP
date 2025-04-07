import React, { useContext } from 'react'
import { incrementContext } from './Hooks/Context';


const Increment = () => {
    const {data,setData}=useContext(incrementContext);
    const increment = ()=> {
        setData((prev)=>prev+1);
   }
  return (

         <div className='flex flex-col justify-center  items-center min-h-screen'>
               <h1>Count:{data}</h1>
               
                   <button 
                    onClick={increment}
                   className='border rounded-md bg-gray-500 p-5'>
                    Increment</button>
               
         </div>
 
  )
}

export default Increment
