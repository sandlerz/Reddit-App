import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Fetch from '../../../Util/Fetch'

export const getSingleSubReddit = createAsyncThunk(
  'singleSubReddit/getSingleSubreddit',
  async ({ url }) => {
    const data = await Fetch.getSingleSubReddit(url)
    return data
  }
)

const singleSubReddit = createSlice({
  name: 'singleSubreddit',
  initialState: {
    data: {},
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSingleSubReddit.pending, state => {
        state.isLoading = true
      })
      .addCase(getSingleSubReddit.fulfilled, (state, action) => {
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getSingleSubReddit.rejected, state => {
        state.hasError = true
      })
  },
})

export default singleSubReddit.reducer
