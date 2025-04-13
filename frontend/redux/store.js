import { configureStore } from '@reduxjs/toolkit'
import opportunityDataReducer from "./opportunity.slice.js"
import acvDataReducer from "./acvData.slice.js"
import loadingReducer from "./loading.slice.js"
import acvTableReducer from "./acvTable.slice.js"
import opportunityTableReducer from "./opportunityTable.slice.js"

export const store = configureStore({
  reducer: {
    opportunityData:opportunityDataReducer,
    acvData:acvDataReducer,
    acvTableData: acvTableReducer,
    opportunityTableData: opportunityTableReducer,
    loading:loadingReducer
  },
})