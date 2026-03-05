import React from 'react'

function SetStorage() {
    sessionStorage.setItem("ss",2);
    localStorage.setItem("ls",5);
  return (
    <div>SetStorage</div>
  )
}

export default SetStorage;