import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tableData: [],
  totalValue: 0,
};

export const acvSlice = createSlice({
  name: 'acvTableData',
  initialState,
  reducers: {
    setAcvTableData: (state, action) => {
      state.tableData =  action.payload;
    },

    setAcvTotalValue: (state, action) => {
      state.totalValue = action.payload
    }
  },
});

export const { setAcvTableData, setAcvTotalValue } = acvSlice.actions
export default acvSlice.reducer