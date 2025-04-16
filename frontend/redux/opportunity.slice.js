import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

// setting the chart data
export const OpportunitySlice = createSlice({
  name: 'opportunityData',
  initialState,
  reducers: {
    setOpportunityData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setOpportunityData } = OpportunitySlice.actions
export default OpportunitySlice.reducer