import { configureStore } from '@reduxjs/toolkit'
import homeSliceReducer from '../Pages/MainScreen/Home/HomeSlices'

const store = configureStore({
  reducer: {
    allSubReddits: homeSliceReducer.allSubReddits,
    communities: homeSliceReducer.communities,
  },
})

export default store
