import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

// setting the chart data
export const acvSlice = createSlice({
  name: 'acvData',
  initialState,
  reducers: {
    setAcvData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAcvData } = acvSlice.actions
export default acvSlice.reducer