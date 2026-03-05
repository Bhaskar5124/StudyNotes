import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice.js'

export const store = configureStore({
  reducer: {
    counter:countReducer},
})