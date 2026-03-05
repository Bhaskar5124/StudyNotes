import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  let [time,setTime] = useState(0);
  let [timerid, setTimerId] = useState(null);
  let [active, setActive] = useState(false);

  // useEffect(()=>{
  //   if(active){
  //     let timer = setInterval(()=>{
  //       setTime(x=>x+1);
  //     },1000)
  //     setTimerId(timer);
  //   }else{
  //     clearInterval(timerid);
  //   }
  // },[active])

  function handleStart(){
    
    if(active){
      window.alert("Timer is already runnning");
      return;}

    setActive(true);
    let timer = setInterval(()=>{
      setTime(x=>x+1);
    },1000)
    setTimerId(timer);

  }

  function handleStop(){
    clearInterval(timerid);
    setActive(false);
  }

  function handleReset(){
    setTime(0);
    clearInterval(timerid);
    setActive(false);
  }

  return (
    <div>
      <h1>Timer in seconds: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;