import React, { useRef, useState } from 'react'

function ControlledInput() {
  // let [email,setEmail] = useState("");

  // return (
  //   <div>ControlledInput
  //     <input 
  //     value={email}
  //     name='email'
  //     placeholder='Enter email'
  //     onChange={(e)=>setEmail(e.target.value)}/>
  //     <h1>Useremail: {email}</h1>
  //   </div>
  // )


// function handleSubmit(e){
//   console.log("e",e);
//   e.preventDefault();
//   let name = e.target.elements.userName.value;

//   console.log('UserName:',name);
// }



const inputRef = useRef(null); // Create a "hook" to grab the DOM element

  const handleSubmit = () => {
    // We only ask for the value when the button is clicked
    alert("Input value is: " + inputRef.current.value);
  };



return(
  <div>

    {/* <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name='userName' type='text'/>
      <button type='submit'>Submit</button>
    </form> */}

    <input type="text" ref={inputRef} placeholder='Enter name' />
      <button onClick={handleSubmit}>Get Value</button>


  </div>
)
}

export default ControlledInput;