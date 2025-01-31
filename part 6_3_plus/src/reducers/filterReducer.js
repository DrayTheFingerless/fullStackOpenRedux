
import { createSlice } from "@reduxjs/toolkit"

var initialState = ''

const filterSlice = createSlice({  
  name: 'notes',
  initialState,
  reducers: {
    filterAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer
