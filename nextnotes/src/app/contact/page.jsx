'use client'

import React, { useState } from 'react'

function Contact() {
    let [err,setErr] = useState(false);
    
    if(err){
        throw new Error();
    }

    function handleError(){
        setErr(true);
    }
  return (
    <div>
        <h1>Contact</h1>
        <button onClick={handleError}>Throw Error</button>
    </div>
    
  )
}

export default Contact