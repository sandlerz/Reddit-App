import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Fetch from '../../../Util/Fetch'

export const getAllSubReddits = createAsyncThunk(
  'allSubReddits/getAllSubReddits',
  async ({ category }) => {
    const data = await Fetch.getAllSubReddits(category)
    return data
  }
)

const initialState = {
  data: {
    best: [],
    top: [],
    new: [],
    rising: [],
  },
  isLoading: false,
  hasError: false,
}

const subRedditsData = createSlice({
  name: 'allSubReddits',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllSubReddits.pending, state => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getAllSubReddits.fulfilled, (state, action) => {
        const { category, refactoredData } = action.payload
        state.data[category] = refactoredData
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getAllSubReddits.rejected, state => {
        state.isLoading = false
        state.hasError = true
      })
  },
})

export const selectAllSubReddits = state => state.allSubReddits.data
export default subRedditsData.reducer
