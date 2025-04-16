import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tableData: [],
  totalValue: 0,
};

export const acvSlice = createSlice({
  name: 'acvTableData',
  initialState,
  reducers: {
    // reducer function to set the table data
    setAcvTableData: (state, action) => {
      state.tableData =  action.payload;
    },
    // reducer function to set the total value
    setAcvTotalValue: (state, action) => {
      state.totalValue = action.payload
    }
  },
});

export const { setAcvTableData, setAcvTotalValue } = acvSlice.actions
export default acvSlice.reducer