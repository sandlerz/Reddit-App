import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Fetch from '../../../../Util/Fetch'
import { getSearch } from '../HomeSlices'

export const getCommunities = createAsyncThunk(
  'communities/getCommunities',
  async () => {
    const data = await Fetch.getAllCommunities()
    return data
  }
)

const communities = createSlice({
  name: 'communities',
  initialState: {
    data: {
      home: [],
    },
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCommunities.pending, state => {
        state.isLoading = true
      })
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.data.home = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getCommunities.rejected, state => {
        state.hasError = true
      })
      // Search Chuck!
      .addCase(getSearch.pending, state => {
        state.isLoading = true
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        const { payload } = action
        if (payload[0]?.type === 't5') {
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

export const selectCommunities = state => state.communities.data
export const isLoadingCommunities = state => state.communities.isLoading

export default communities.reducer
