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

export const getCommunities = createAsyncThunk(
  'communities/getCommunities',
  async () => {
    const data = await Fetch.getAllCommunities()
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

const allSubReddits = createSlice({
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

const communities = createSlice({
  name: 'communities',
  initialState: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCommunities.pending, state => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getCommunities.rejected, state => {
        state.isLoading = false
        state.hasError = true
      })
  },
})

export const selectAllSubReddits = state => state.allSubReddits.data
export const selectCommunities = state => state.communities.data

export default {
  allSubReddits: allSubReddits.reducer,
  communities: communities.reducer,
}
