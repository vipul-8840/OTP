import React, { useRef } from 'react'

const Ref = () => {
    const inputRef = useRef();
    
  return (
    <div className='flex flex-col justify-items-center items-center text-sm'>
         <h1 className='mb-4'>UseRef</h1>
         <div className='text-sm font-medium'>
         <label htmlFor='1'>valueField :  </label>
         <input id='1'
          className='border rounded-sm border-black-300 w-115 h-12 text-center'
           ref={inputRef}
          type="text" 
          onChange ={(e)=>
            {
                inputRef.current = e.target.value;
                console.log(inputRef);
           }
        }
         />
         </div>
         
    </div>
  )
}

export default Ref;
