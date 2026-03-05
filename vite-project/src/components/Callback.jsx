import React, { useState, useEffect, useCallback } from 'react';

function Callback() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // This function is "re-built" from scratch every time count changes
  // const printHello = () => {
  //   console.log("Hello!");
  // };
  const printHello = useCallback(() => {
    console.log("Hello!");
  }, [num]);

  // This effect runs whenever 'printHello' is a "new" object
  useEffect(() => {
    console.log("The printHello function was RE-CREATED!");
  }, [printHello]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <h1>NUM : {num}</h1>
      <button onClick={()=>setNum(num+1)}>Increment NUM</button>
      <p>Check the console. Every click creates a new function!</p>
    </div>
  );
}

export default Callback;