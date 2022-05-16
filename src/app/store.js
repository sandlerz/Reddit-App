import { configureStore } from '@reduxjs/toolkit'
import allSubReddits from '../Pages/MainScreen/Home/HomeSlices'
import communities from '../Pages/MainScreen/Home/Aside/AsideSlice'

const store = configureStore({
  reducer: {
    allSubReddits: allSubReddits,
    communities: communities,
  },
})

export default store
