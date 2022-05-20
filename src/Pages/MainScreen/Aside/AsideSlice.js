import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Fetch from '../../../Util/Fetch'
import { getSearch } from '../SearchBar/SearchBarSlice'

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
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.data.home = action.payload
      })
      // Search Chuck!
      .addCase(getSearch.fulfilled, (state, action) => {
        const { payload } = action
        if (payload[0]?.type === 't5') {
          state.data[payload[0].term] = action.payload
        }
      })
  },
})

export const selectCommunities = state => state.communities.data

export default communities.reducer
