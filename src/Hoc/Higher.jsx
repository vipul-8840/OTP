import { useState } from "react";

export const withCounter = (OlderComponent)=>
{
    return function  Higher() {
         const [count,setCount]= useState(0);
        
         return (
              <OlderComponent   count = {count} setCount={setCount}/>
         )

    }
}
