import React, { useEffect, useRef, useState } from 'react'
const digitCount = 5;
const App = () => {
  const [inputArr,setInputArr] = useState(new Array(digitCount).fill(""));
  const refArr = useRef([]);
  useEffect(()=>{
      refArr.current[0]?.focus();
  },[])
  function handleOnChnage(value,index){
         if(isNaN(value))
         {
            return;
         }
        const newArray =[...inputArr];
        const newValue = value.trim();
        newArray[index]=newValue.slice(-1)
        setInputArr(newArray);
        newValue && refArr.current[index+1]?.focus();

  }
  function handleOnKeyDown(e,index){
     if(!e.target.value && e.key=='Backspace')
     {
         refArr.current[index-1]?.focus();
     }

  }
  return (
    <div>
       <h1 className='flex justify-content justify-center items-center text-lg font-medium'>Validate Input</h1>
        <div className='flex gap-2 justify-center mt-4 text-lg'>
        {inputArr.map((input, index) => (
          <input
            key={index}
            type='text'
            value={input}
            ref = {(input)=>{refArr.current[index]=input}}
            className='border rounded-sm border-gray-300 w-12 h-12 text-center'
            onChange={(e)=>handleOnChnage(e.target.value,index)}
            onKeyDown={(e)=>{handleOnKeyDown(e,index)}}
           
          />
        ))}
        </div>
    </div>
  )
}

export default App
