const API_URL = 'https://www.reddit.com'

export const getAllSubReddits = async (category = '') => {
  try {
    const response = await fetch(`${API_URL}/${category}.json`)
    if (response.ok) {
      const data = await response.json()
      const refactoredData = data.data.children.map(({ data }) => ({
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
  } catch (error) {
    console.log(error)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllSubReddits,
}
