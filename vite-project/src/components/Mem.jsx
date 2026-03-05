import React, { useMemo, useState } from 'react';

const Mem = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // This function simulates a heavy task (like sorting 10,000 items)
  const slowSquare = (n) => {
    console.log("Expensive calculation started");
    for (let i = 0; i < 1000000000; i++) {} // Fake delay
    console.log("Expensive calculation Ended");
    return n * n;
  };

  // PROBLEM: This runs every time 'count' changes, 
  // even though 'number' stayed the same!
  // when state changes, entire component re-renders,
  // meaning every line of code inside component re-runs


  //  const result = slowSquare(number); //result = 100

  const result = useMemo(() => {
    return slowSquare(number);
  }, [number]);

  //useMemo(()=>{},[])

  return (
    <div>
      <h1>Result: {result}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

        <h1>Number : {number}</h1>
      <button onClick={()=>setNumber(number+1)}>INC Number</button>
      <p>Notice the delay when clicking the button above.</p>
    </div>
  );
};

export default Mem;


//usememo -- remember/memoize value
//when value change, then re-renders