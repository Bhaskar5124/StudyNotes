import React, { useState } from 'react'

function AndLogical() {
    let [active,setActive] = useState(false);

    // let [act,setact] = useState(false);

    function handleButton(){
        setActive((prev)=>!prev);
    }

  return (
    <div>
        <h1>AndLogical</h1>
        <button onClick={handleButton}>Show Data</button>

        {active && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime suscipit rem aliquam, sed delectus nostrum molestias laborum quod in fugit vero est! Exercitationem, praesentium possimus optio odit ab tempora ea.</p>}

    </div>
  )
}

export default AndLogical;