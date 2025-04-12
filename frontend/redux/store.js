import { configureStore } from '@reduxjs/toolkit'
import opportunityDataReducer from "./opportunity.slice.js"
import acvDataReducer from "./acvData.slice.js"

export const store = configureStore({
  reducer: {
    opportunityData:opportunityDataReducer,
    acvData:acvDataReducer,
  },
})