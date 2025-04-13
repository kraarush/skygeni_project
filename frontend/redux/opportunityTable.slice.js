import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tableData: [],
  totalValue: 0,
};

export const OpportunitySlice = createSlice({
  name: 'opportunityTableData',
  initialState,
  reducers: {
    setOpportunityTableData: (state, action) => {
      state.tableData =  action.payload;
    },

    setOpportunityTotalValue: (state, action) => {
      state.totalValue = action.payload
    }
  },
});

export const { setOpportunityTableData , setOpportunityTotalValue} = OpportunitySlice.actions
export default OpportunitySlice.reducer