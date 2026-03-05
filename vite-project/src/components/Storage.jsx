// Both LocalStorage and SessionStorage are part of the Web Storage API. They allow you to save key-value pairs in the browser so that data persists even if the user refreshes the page.

// The Key Difference
// LocalStorage: Data persists forever (or until the cache is cleared). Even if you close the browser and come back tomorrow, the data stays.

// SessionStorage: Data persists only for the duration of the page session. If you close the tab or the window, the data is deleted.





import React, { useState } from 'react'

function Storage() {
    // let [data,setData] = useState(2);
    // sessionStorage.setItem("z",data);
    let q = sessionStorage.getItem('ss');
    let num = localStorage.getItem('ls');

    localStorage.removeItem('ls');
    // localStorage.removeItem('data');
  return (
    <div>Storage
        <h1>ss: {q}</h1>
        <h1>ls:{num}</h1>
    </div>
  )
}

export default Storage;


