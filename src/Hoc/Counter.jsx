import { withCounter } from "./Higher"

function Counter ({count,setCount})
{
   
      return (
           <div className="flex flex-col justify-center items-center min-h-screen">
             <h1>Count:{count}</h1>
             <button className="mt-2 p-5 border rounded-md bg-amber-400" onClick={()=> setCount(count+1)}>Increment</button>
              
           </div>
      )
} 
export default withCounter(Counter);