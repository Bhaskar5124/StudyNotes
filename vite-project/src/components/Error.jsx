import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Error() {
  let navigate = useNavigate();

  function handleHome(){
    // complex logic
    navigate("/");
  }
  return (
    <div>Error
        <Link to="/">Go Home</Link>
        <button onClick={handleHome}>Go to Home</button>
    </div>
  )
}

export default Error