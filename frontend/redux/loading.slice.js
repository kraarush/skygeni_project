import { createSlice } from '@reduxjs/toolkit'

const initialState = true;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
        return action.payload;
      },
  },
});

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer