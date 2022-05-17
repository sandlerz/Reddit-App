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
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSingleSubReddit.pending, state => {
        state.isLoading = true
      })
      .addCase(getSingleSubReddit.fulfilled, (state, action) => {
        const { id, subReddit, comments } = action.payload
        state.data[id] = { subReddit, comments }
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getSingleSubReddit.rejected, state => {
        state.hasError = true
      })
  },
})

export const selectSingleSubReddit = state => state.singleSubReddit.data
export const isLoadingSingleSubReddit = state => state.singleSubReddit.isLoading

export default singleSubReddit.reducer
