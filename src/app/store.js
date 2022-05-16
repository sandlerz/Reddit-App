import { configureStore } from '@reduxjs/toolkit'
import allSubReddits from '../Pages/MainScreen/AllSubReddits/AllSubRedditsSlice'
import communities from '../Pages/MainScreen/Aside/AsideSlice'
import singleSubReddit from '../Pages/MainScreen/SingleSubReddit/SingleSubRedditSlice'

const store = configureStore({
  reducer: {
    allSubReddits: allSubReddits,
    communities: communities,
    singleSubReddit: singleSubReddit,
  },
})

export default store
