import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  let [active,setActive] = useState(false);

  return (
    <nav>
      <ul className='flex items-center'>
        <li className='m-4 p-2'><Link to="/">Home</Link></li>
        <li className='m-4 p-2'><Link to="/contact">Contact</Link></li>
        <li className='m-4 p-2'><Link to="/about">About</Link></li>
        <li className='m-4 p-2'><Link to="/books">Books</Link></li>

        <li 
        onMouseEnter={()=>setActive(true)}
        onMouseLeave={()=>setActive(false)} 
        className='m-4 p-2 relative cursor-pointer'>Dropdown

        {active && 
        <div className='absolute top-10 left-0 w-40 bg-amber-800'>
          <ul className='flex flex-col'>
            <li><Link>option 1</Link></li>
            <li>option 2</li>
            <li>option 3</li>
          </ul>
        </div>
}
</li>
      </ul>
    </nav>
  )
}

export default Header;