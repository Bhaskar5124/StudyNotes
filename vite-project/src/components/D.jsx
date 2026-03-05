import React, { useContext, useState } from 'react'
import { countContext } from '../utils/Context.js';


const E = () => {
    let [num, setNum] = useState(5);
  return (
    <countContext.Provider value={num}>
        <div>
            <h1>A</h1>
            <B/>
        </div>
    </countContext.Provider>

  )
}


const B = () => {
  return (
    <div>
        <h1>B</h1>
        <C />
    </div>
  )
}


const C = () => {
  // let don = useContext(countContext);
  return (
    <div>
      <h1>C</h1>
        {/* <h1>C : {don}</h1> */}
        <D /> 
    </div>
  )
}


const D = () => {
    let count = useContext(countContext);
  return (
    <div>
      <h1>D</h1>
    <h1>Count: {count}</h1>
    </div>

  )
}

export default E;