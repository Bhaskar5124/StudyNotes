import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value:0
},
  reducers: {
    increment(state, action) {
        state.value = state.value + 1;
    },
    decrement(state, action) {
        state.value = state.value - 1;
    },
    reset(state, action) {
        state.value = 0;
    },
    incrementByAmount(state, action) {
        state.value = state.value + Number(action.payload);
    },
  }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer