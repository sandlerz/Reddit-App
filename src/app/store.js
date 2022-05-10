import { configureStore, createSlice } from '@reduxjs/toolkit'
import fetchSubreddits from '../Util/fetchSubreddits'

const subRedditsData = createSlice({
  name: 'subRedditData',
  initialState: {
    data: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isLoading = false
        state.hasError = false
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.isLoading = false
        state.hasError = true
      })
  }
})

const store = configureStore({
  reducer: {
    data: subRedditsData
  }
})

export default store
