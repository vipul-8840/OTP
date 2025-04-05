import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    function IncrementOne() {
        setCounterOne(counterOne + 1);
    }

    function IncrementTwo() {
        setCounterTwo(counterTwo + 1);
    }

   const isEven = useMemo(()=>{
      let i=0;
      while(i<20000)i++;
      return counterOne%2==0;
   },[counterOne]);
    return (
        <div>
            <button className='border rounded-md p-2 m-1' onClick={IncrementOne}>
                CounterOne - {counterOne}
            </button>
            <button className='border rounded-md p-2 m-2' onClick={IncrementTwo}>
                CounterTwo - {counterTwo}
            </button>
            <div>
                {isEven ? "Even" : "Odd"}
            </div>
            <h1>hello </h1>
        </div>
    );
}

export default Memo;
