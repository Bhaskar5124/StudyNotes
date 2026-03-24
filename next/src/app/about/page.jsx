import React from 'react'

async function page() {
  let pdata = await fetch('https://dummyjson.com/products');
  let fdata = await pdata.json();
  let data = fdata.products;
  return (
    <div>
      <h1>About Page</h1>
      {data.map((item)=>(
        <div key={item.id}>
          <img src={item.images[0]}/>
          <h1>Title: {item.title}</h1>
          <p>Desc: {item.description}</p>
        </div>))}
    </div>
  )
}

export default page