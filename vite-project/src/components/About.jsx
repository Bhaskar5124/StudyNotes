import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  let [n,setn] = useState(0);
  let navigate = useNavigate();

  function handleHome(){
    setn(prev=>prev+1);
    // navigate("/");
    let time = setTimeout(()=>{
      navigate("/");
      clearTimeout(time);
    },3000)
    
  }

  return (
    <div>
      <h1>About</h1>
      <h1>Number: {n}</h1>
      <button onClick={handleHome}>Go to Home</button>
    </div>
    
  )
}

export default About