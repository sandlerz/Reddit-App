/* eslint-disable import/no-anonymous-default-export */
const API_URL = 'https://www.reddit.com'

export const getAllSubReddits = async (category = 'best') => {
  try {
    const response = await fetch(`${API_URL}/${category}.json`)

    if (response.ok) {
      const { data } = await response.json()
      const refactoredData = data.children.map(({ data }) => ({
        title: data.title,
        subRedditName: data.subreddit_name_prefixed,
        author: data.author,
        score: data.score,
        comments: data.num_comments,
        thumbnail: data.thumbnail,
        id: data.id,
      }))
      return {
        category: category ? category : 'best',
        refactoredData,
      }
    }

    throw new Error('All subreddits Request failed!')
  } catch (error) {
    console.log(error)
  }
}

const getAllCommunities = async () => {
  try {
    const response = await fetch(`${API_URL}/subreddits.json`)

    if (response.ok) {
      const { data } = await response.json()
      const refactoredData = data.children.map(({ data }) => ({
        icon: data.icon_img,
        communityName: data.display_name_prefixed,
        subscribers: data.subscribers,
        id: data.id,
      }))
      return refactoredData
    }

    throw new Error('All Communities Request failed!')
  } catch (error) {
    console.log(error)
  }
}

const getSearch = async (term, type) => {
  try {
    const response = await fetch(
      `${API_URL}/search/.json?q=${term}&type=${type}`
    )
    if (response.ok) {
      const { data } = await response.json()
      const refactoredData = data.children.map(({ data, kind }) => ({
        title: data.title,
        subRedditName: data.subreddit_name_prefixed,
        author: data.author,
        score: data.score,
        comments: data.num_comments,
        thumbnail: data.thumbnail,
        icon: data.icon_img,
        communityName: data.display_name_prefixed,
        subscribers: data.subscribers,
        id: data.id,
        type: kind,
        term: term,
      }))
      return refactoredData
    }

    throw new Error('Search request failed!')
  } catch (error) {
    console.log(error)
  }
}

export default {
  getAllSubReddits,
  getAllCommunities,
  getSearch,
}
