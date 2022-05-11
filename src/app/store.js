import { configureStore } from '@reduxjs/toolkit'
import allSubRedditsReducer from '../Pages/MainScreen/Home/HomeSlice'

const store = configureStore({
  reducer: {
    allSubReddits: allSubRedditsReducer,
  },
})

export default store
