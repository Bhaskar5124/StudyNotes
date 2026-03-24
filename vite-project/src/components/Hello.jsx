import { useState } from "react";


function Hello(){

    let [n,setn] = useState(0);
    // let n = 0;

    function handleButton(){
        setn(n+1);
        // n = n+1;
        console.log(n);
    }

    

    return(
        <div>
            <h1 className="text-amber-300">Hello world</h1>
            <h2>Number : {n}</h2>
            <button onClick={handleButton}>INC</button>
        </div>
        
    )
}

export default Hello; 


// function Hello(){
//     return(
//         <div>
//             <h1>Hello</h1>
//             <h1>Heading</h1>
//         </div>
        
//     )
// }


// export default Hello;


export function Hello2(){
    return(
        <div>
            <h1>Hello2</h1>
        </div>
    )
}

export function Hello3(){
    return(
        <div>
            <h1>Hello3</h1>
        </div>
    )
}
