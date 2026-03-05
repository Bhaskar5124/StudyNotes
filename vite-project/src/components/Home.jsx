import React, { useState } from 'react'
import { Books } from '../utils/data.js'
import { Link } from 'react-router-dom';

function Home() {
  let [data,setdata] = useState(Books);
  return (
    <div>
      {data.map((item,index)=>(
        <Link to={`/bookdetail/${item.id}`}>
          <div key={item.id} className='flex flex-col justify-start items-start shadow-2xl h-90 w-90'>
            <img src={item.imageLink} className='h-50 w-50'/>
            <h1>{item.title}</h1>
            <h2>{item.author}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home