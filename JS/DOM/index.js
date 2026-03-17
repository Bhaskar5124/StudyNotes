// let redEl = document.querySelector('#red')
// let blueEl = document.querySelector('#blue')
// let greenEl = document.querySelector('#green')

// let bodyEl = document.querySelector('body');

// function handleRed(){ 
//     bodyEl.style.backgroundColor = "red"
// }

// function handleBlue(){ 
//     bodyEl.style.backgroundColor = "blue"
// }

// function handleGreen(){ 
//     bodyEl.style.backgroundColor = "green"
// }

// function handleReset(){ 
//     bodyEl.style.backgroundColor = ""
// }



//Selectors
// 2 steps -> 1.selection    2.manipulation

// 1. getElementsByTagName() -> array
// let heading1 = document.getElementsByTagName("h1");
// console.log(heading1);
// // console.log(heading1[0]);
// // console.log(heading1[1]);
// heading1[0].style.color = "black"
// heading1[1].style.color = "orange"


// -----------------------------------
// 2. getElementById() -> single
// let samId = document.getElementById("sam")
// console.log(samId);
// samId.style.color = "red"
// samId.style.backgroundColor = "yellow"
// samId.style.fontSize = "60px"

// console.log(samId);




// -----------------------------------
// 3. getElementsByClassName() -> array

// let classArr = document.getElementsByClassName("feb")

// console.log(classArr);

// for(let item of classArr){
//     item.style.color = "blue"
//     item.style.backgroundColor = "green"
// }

// dry
// for(let item of classArr){
//     item.style.cssText = `
//         color: red;
//         background-color: green;
//         font-size: 50px
//     `
// }


// -----------------------------------
// 4. querySelector() -> single

// let tag  = document.querySelector('h1')
// let idd  = document.querySelector('#sam')
// let clas = document.querySelector('.feb')
// console.log(clas);
// console.log(tag , idd , clas);




// -----------------------------------
// 5. querySelectorAll() -> array

// let tag  = document.querySelectorAll('h1')
// let idd  = document.querySelectorAll('#sam')
// let clas = document.querySelectorAll('.feb')
// console.log(clas);
// console.log(tag , idd , clas);
//----------------------------------------------------------------------------------------------




//Set and Get attribute

// let h1 = document.querySelector('h1');  //only for single element

// h1.setAttribute('class' , 'class1', 'class2', 'class3') //❌
// h1.setAttribute('class' , 'class1 class2 class3');


// ----------------------
// classList
// 1. add()
// h1.classList.add('class1', 'class2', 'class3');

// ----------------------
// 2. remove()
// h1.classList.remove('class1' , 'class3')

// ----------------------
// 3. toggle()
// h1.classList.toggle('class1')

// ----------------------
// 4. contains()
// console.log( h1.classList.contains('class1') );
// console.log( h1.classList.contains('punjab') );




// let an = document.querySelector('a')
// getter

// let googleLink = an.getAttribute('href');
// console.log("googleLink",googleLink);

// setter
// let instaLink = "http://instagram.com"
// an.setAttribute('href' , instaLink);
// an.setAttribute('target',"_blank");

//---------------------------------------------------------------------------------------





//innerHTML, textContent and innerText
// let h2 = document.querySelector('h2')


// console.log(h2);

// what is text inside it?

// getters
// console.log("innertext",h2.innerText);    // only the UI part (ignores what is in css)
// console.log("textContent",h2.textContent);  // shows everything except tags (even css ignored part too)
// console.log("innerHTML",h2.innerHTML);    // shows html + text 



// setters
// h2.innerText = "my name is don"
// h2.textContent = "<span> my name is don </span>"
// h2.innerHTML = "<span> my name is don </span>"
//-------------------------------------------------------------------------------------






//All appends

// let parentElement = document.getElementById("parent");
// let h3 = document.createElement('h3');
// h3.textContent = "I am h3";

// let h2 = document.querySelector('h2');

// let appendedChild = parentElement.append(h3,h2); //before h2
// console.log(appendedChild);
// parentElement.append(h3);



// // appendChild: Needs an object
// let span = document.createElement('span');
// span.textContent = "I am span";
// let appendedChild =  parentElement.appendChild(span); 
// console.log(appendedChild);
// // parent.appendChild("Hello"); // Error!


// Feature,             append(),                                                appendChild()
// Simplicity,          Extremely simple: parent.append(child,reference),       "Verbose: parent.appendChild(child)"
// Positioning,         Always adds to the End,(depending on the reference)      Always adds to the End,  .
// Multiple Items,      "Yes, you can append many at once.",                     "No, only one node at a time."
// Accepts Strings,     Yes (automatically creates Text Nodes).,                 No (only accepts Node objects).
// Return Value,        undefined,                                               The inserted Node.
// Browser Support      Modern browsers (No IE support).,                        All browsers (including Internet Explorer).




//prepend
// let h3 = document.createElement('h3');
// h3.textContent = 'I am h3 by prepend'
// parentElement.prepend(h3);


// insertBefore

// let h2 = document.querySelector('h2');
// let h3 = document.createElement('h3');
// h3.textContent = 'I am h3 by insertBefore';
// parentElement.insertBefore(h3,h2);
// parentElement.prepend(h3,h2);

//prepend and insertBefore

// Feature,             prepend(),                                     insertBefore()
// Simplicity,          Extremely simple: parent.prepend(child),       "Verbose: parent.insertBefore(child, reference)"
// Positioning,         Always adds to the very beginning.,            Can add anywhere (depending on the reference).
// Multiple Items,      "Yes, you can prepend many at once.",          "No, only one node at a time."
// Accepts Strings,     Yes (automatically creates Text Nodes).,        No (only accepts Node objects).
// Return Value,        undefined,                                      The inserted Node.
// Browser Support      Modern browsers (No IE support).,               All browsers (including Internet Explorer).
//-----------------------------------------------------------------------------------------------------------------------------------




//Carousel

// let arrImg = [
//     "https://images.unsplash.com/photo-1739987752520-f8da640d1b2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1740121565887-efe5b47fe9fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1739992115892-36453a241b5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1735348061620-81cf27a5b6ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
// ]


// let imgEl = document.querySelector('img');
// let n = 0;

// let idd = setInterval(function(){
//     imgEl.src = arrImg[n]
//     n = (n+1)%arrImg.length;
// } , 2000)
//-----------------------------------------------------------------------------------------------------------------------------------


//Events/Actions Handling

// 2nd way
// let divEl = document.querySelector('div');

// function sam1(){
//     console.log("hello from sam1"); 
// }

// function sam2(){
//     console.log("hello from sam2"); 
// }

// divEl.onclick = sam1;

// divEl.onclick = sam2;
// divEl.onclick = sam3;


// -------------------------------------

// // 3rd way
// let divEl = document.querySelector('div');

// function sam1(){
//     console.log("hello from div"); 
// }

// // function sam2(){
// //     console.log("hello from sam2"); 
// // }

// // // divEl.addEventLiwstener('click' , function(){})
// divEl.addEventListener('click' , sam1)
// divEl.addEventListener('click' , sam2)



   // <!-- Form Events ---------------------------------->

//    let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , function(event){
//     event.preventDefault(); //reload
//     console.log(event.target[0].value);
//     console.log(event.target[1].value);
// })






    //<!-- Input Events -------------------------------------------->

// let inpEl = document.querySelector('input');


// inpEl.addEventListener('input' , function(event){
//     console.log(event);
//     console.log(event.data);
//     console.log(event.target.value);
//     console.log(inpEl.value);
// })





//Events

// In JavaScript, events are the heartbeat of interactive web applications. When anything happens on your page—a user clicks, a key is pressed, or a page finishes loading—the browser generates an "Event Object."

// These events are generally categorized based on the type of interaction or the part of the system they affect.

// 1. Mouse Events
// These are triggered when the user interacts with a pointing device.

// click: Fired when an element is clicked.

// dblclick: Fired on a double-click.

// mousedown / mouseup: Fired when a mouse button is pressed or released.

// mouseover / mouseout: Fired when the cursor enters or leaves an element's boundaries.

// mousemove: Fired continuously as the mouse moves over an element.

// contextmenu: Fired when the user tries to open a right-click menu.

// 2. Keyboard Events
// Used to capture user input from the physical keyboard.

// keydown: Fired the moment a key is pressed down (repeated if held).

// keyup: Fired when the user releases the key.

// keypress: (Deprecated) Formerly used for character-producing keys; use keydown instead in modern JS.

// 3. Form Events
// Crucial for data validation and submission logic.

// submit: Fired when a <form> is submitted (usually where you call e.preventDefault()).

// change: Fired when the value of an input, select, or textarea changes and loses focus.

// input: Fired synchronously every time the value of an input changes (perfect for real-time search).

// focus / blur: Fired when an element (like an input) gains or loses focus.

// 4. Window & Document Events
// These relate to the state of the browser or the page itself.

// DOMContentLoaded: Fired when the HTML is completely loaded and the DOM tree is built (does not wait for images).

// load: Fired when the whole page, including CSS, images, and external scripts, has finished loading.

// resize: Fired when the browser window is resized.

// scroll: Fired when the document or an element is scrolled.

// 5. UI & Resource Events
// error: Fired when a resource (like an image) fails to load.

// select: Fired when a user selects text within an input or textarea.

// 6. CSS & Animation Events
// Used to trigger JS logic exactly when a visual change finishes.

// transitionend: Fired when a CSS transition completes.

// animationstart / animationend: Fired when a CSS animation begins or finishes.

// Pro-Tip: The Event Object (e)
// When you use addEventListener, the browser automatically passes an event object to your function. This object contains vital data:

// e.target: The exact element that triggered the event.

// e.type: The name of the event (e.g., "click").

// e.key: For keyboard events, the specific key pressed (e.g., "Enter").

// e.clientX / e.clientY: The coordinates of the mouse click.
// let h1El = document.querySelector('h1');
// inpEl.addEventListener('input' , function(event){
//     // h1El.innerText = event.target.value
//     h1El.innerHTML = inpEl.value
// })

