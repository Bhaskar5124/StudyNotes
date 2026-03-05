import { useEffect, useState } from "react"

function Effect(){
    let [count,setCount] = useState(0);
    let [num,setNum] = useState(0);

    let [n,setn] = useState(0);

    useEffect(()=>{
        // console.log("I run everytime");
        // console.log("I run only once");
        console.log("I run only when variable change");

    },[n,num]);

    //setInterval
    //setTimeout
    

    // useEffect(()=>{
    //     // const timer = setInterval(()=>{
    //     //     setCount(x=>x+1)
    //     // },1000)

    //         const timer = setTimeout(()=>{
    //         setCount(x=>x+1)
    //     },1000)


    //     return ()=>{
    //         //clearInterval(timer); //used for setInterval
    //         clearTimeout(timer); //used for setTimeout
    //         console.log("component unmounted");
    //     } //cleanup function => 
    // },[]);

    

    function handleInc(){
        setNum(num+1);
    }

    function handleN(){
        setn(n-1);
    }


    
//useEffect is used for side effect
// For Example: Api calling, setInterval, setTimeout
// useEffect(()=>{},[n])
// When there is no dependency array, useEffect code will run on every render
// When there is a dependency array but blank, code inside useEffect will run only once
// When there is any variable, then useEffect code will run when that variable change

//Ui Condition &&

// SetTimeout and SetInterval
    return (
        <div>
            <h1>UseEffect</h1>
            <h1>Timer</h1>
            <h1>Secconds: {count}</h1>
            <button onClick={()=>setCount((k)=>k+1)}>INC count</button>
            <h3>Num : {num}</h3>
            <button onClick={handleInc}>INC</button>
            <h3 >N : {n}</h3>
            <button onClick={handleN}>Dec</button>
        </div>
    )
}

export default Effect;