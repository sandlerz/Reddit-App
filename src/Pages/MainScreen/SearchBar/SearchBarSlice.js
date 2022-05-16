import { createAsyncThunk } from '@reduxjs/toolkit'
import Fetch from '../../../Util/Fetch'

export const getSearch = createAsyncThunk(
  'allSubreddits/getSearch',
  async ({ term, type }) => {
    const data = await Fetch.getSearch(term, type)
    return data
  }
)
