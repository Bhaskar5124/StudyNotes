import React, { memo, useEffect } from 'react'

function Prop({name,num}) {
    useEffect(()=>{
        console.log("Prop component rendered");
    })
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Val: {num}</h1>
    </div>
  )
}
// export default memo(Prop);
export default React.memo(Prop);
// export default Prop;


//react.memo - not a hook
// only loads when props change
// contains whole component
