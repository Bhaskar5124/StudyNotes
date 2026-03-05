import React, { useState } from 'react'
import Prop from './Prop';

function Counter() {
    let [a,seta] = useState(0);

    let [num,setNum] = useState(0);


    function handleIncrement(){
      //Batching
      //Batching: React groups multiple state changes into single re-render to optimize performance,
      //waits until entire event handler is finished
      // seta(a+1); //Initail State =  0
      // seta(a+1); //Initail State =  0
      // seta(a+1); //Initail State =  0
      // seta(a+3);
      // seta(a+1);
      seta(kul=>kul+3);
      // seta(kul=>kul+1);
      // seta(kul=>kul+1);
    }

    function handleDec(){
      setNum(prev=>prev-1);
    }
  return (
    <div>Counter
        <h1>A : {a}</h1>
        <button onClick={handleIncrement}>Inc</button>

        <h1>Num : {num}</h1>
        <button onClick={handleDec}>Dec</button>
        {/* <Prop name="Irfan khan" num={num}/> */}
    </div>
  )
}

export default Counter;

// Batching : Batched more than 1 rerender into 1 for performance optimization