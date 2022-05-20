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
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSingleSubReddit.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        const { id, subReddit, comments } = action.payload
        state.data[id] = { subReddit, comments }
      }
    })
  },
})

export const selectSingleSubReddit = state => state.singleSubReddit.data

export default singleSubReddit.reducer
