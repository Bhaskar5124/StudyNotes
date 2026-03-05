import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../utils/slice.js';


// The Data Flow (How it actually moves)
// An interviewer will often ask, "Walk me through what happens when a user clicks a button."

// Action Dispatched: The user clicks "Add to Cart." The component calls dispatch(addItem(product)).

// Reducer Runs: The Store receives the action. It finds the specific Slice (CartSlice) and runs the corresponding Reducer function.

// State Updated: The reducer calculates the new state (e.g., adding the product to the array).

// UI Re-renders: Because the state changed, any component using useSelector to watch the cart will automatically get the new data and update the screen.


// Analogy to remember:

// State: The current "truth" of the app (The Bank Balance).

// Action: A description of what happened (A "Withdrawal" slip).

// Reducer: The Bank Teller who processes the slip and updates the balance.

// Store: The Bank itself.


// The Slice (createSlice) — The MVP
// This is the most important part to explain in an interview. A "Slice" is a collection of Redux logic for a single feature (e.g., "User" or "Cart").

// What it does: It combines Initial State, Reducers, and Actions into one place.


// The Hooks (useSelector & useDispatch)
// These are the "connectors" between your React components and the Redux factory.

// useDispatch: Your component uses this to "send an order" (an action) to the store.

// useSelector: Your component uses this to "read" specific data from the store.


function CounterRedux() {
    let [num,SetNum] = useState();
    const count = useSelector((state)=>state.counter.value);
    
    const dispatch = useDispatch();

    function handleInc(){
        dispatch(increment());
    }

    function handleDec(){
        dispatch(decrement());
    }

    function handleReset(){
        dispatch(reset());
    }

    function handleIncbyAmount(){
        dispatch(incrementByAmount(num));
    }
  return (
    <div>CounterRedux
        <br/>
        <button onClick={handleInc}>+</button>
        <h1>Value: {count}</h1>
        <button onClick={handleDec}>-</button>
        <br/> <br/>
        <button onClick={handleReset}>Reset</button>
        <br/> <br/>
        <input placeholder='Enter Amount' type='number' value={num} 
        onChange={(e)=>SetNum(e.target.value) }/>
        <br/> <br/>
        <button onClick={handleIncbyAmount}>Inc by Amount</button>
    </div>
  )
}

export default CounterRedux;