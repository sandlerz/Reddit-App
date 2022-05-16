/* eslint-disable import/no-anonymous-default-export */
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

export const getSearch = createAsyncThunk(
  'allSubreddits/getSearch',
  async ({ term, type }) => {
    const data = await Fetch.getSearch(term, type)
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
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder // Default subReddit Chunk!
      .addCase(getAllSubReddits.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllSubReddits.fulfilled, (state, action) => {
        const { category, refactoredData } = action.payload
        state.data[category] = refactoredData
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getAllSubReddits.rejected, state => {
        state.hasError = true
      })
      // Search chunk!
      .addCase(getSearch.pending, state => {
        state.isLoading = true
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        const { payload } = action
        if (payload[0]?.type === 't3') {
          state.data[payload[0].term] = action.payload
          state.isLoading = false
          state.hasError = false
        }
      })
      .addCase(getSearch.rejected, state => {
        state.hasError = true
      })
  },
})

export const selectAllSubReddits = state => state.allSubReddits.data
export const isLoadingSubReddits = state => state.allSubReddits.isLoading

export default allSubReddits.reducer
