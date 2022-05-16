import { configureStore } from '@reduxjs/toolkit'
import allSubReddits from '../Pages/MainScreen/AllSubReddits/AllSubRedditsSlice'
import communities from '../Pages/MainScreen/Aside/AsideSlice'

const store = configureStore({
  reducer: {
    allSubReddits: allSubReddits,
    communities: communities,
  },
})

export default store
