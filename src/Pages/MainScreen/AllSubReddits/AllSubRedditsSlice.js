/* eslint-disable import/no-anonymous-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Fetch from '../../../Util/Fetch'
import { getSearch } from '../SearchBar/SearchBarSlice'

export const getAllSubReddits = createAsyncThunk(
  'allSubReddits/getAllSubReddits',
  async ({ subreddits }) => {
    const data = await Fetch.getAllSubReddits(subreddits)
    return data
  }
)

const allSubReddits = createSlice({
  name: 'allSubReddits',
  initialState: {
    data: {
      best: [],
      top: [],
      new: [],
      rising: [],
    },
  },
  reducers: {},
  extraReducers: builder => {
    builder // Default subReddit Chunk!
      .addCase(getAllSubReddits.fulfilled, (state, action) => {
        const { subreddits, refactoredData } = action.payload
        state.data[subreddits] = refactoredData
      })
      // Search chunk!
      .addCase(getSearch.fulfilled, (state, action) => {
        const { payload } = action
        if (payload[0]?.type === 't3') {
          state.data[payload[0].term] = action.payload
        }
      })
  },
})

export const selectAllSubReddits = state => state.allSubReddits.data

export default allSubReddits.reducer
