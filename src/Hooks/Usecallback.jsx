import { useCallback, useEffect, useState } from "react";
import Child from "./Child";

function Callback() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const fun = useCallback(() => {
    console.log("hello vipul");
  }, [counterTwo]);


  useEffect(() => {
    fun(); 
  }, [fun]);

  return (
    <>
      <Child counterTwo={counterTwo} fun={fun} />

      <button className="border rounded-md p-2 m-1" onClick={IncrementOne}>
        CounterOne - {counterOne}
      </button>
      <button className="border rounded-md p-2 m-2" onClick={IncrementTwo}>
        CounterTwo - {counterTwo}
      </button>
    </>
  );
}

export default Callback;
