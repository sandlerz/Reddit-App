import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async ({ category }) => {
  const response = await fetch(`https://www.reddit.com/r/popular/${category}/`)
  const json = await response.json()
  return json
})

export default fetchSubreddits
