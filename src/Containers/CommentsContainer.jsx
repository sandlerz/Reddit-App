import Parce from 'html-react-parser'
import { useEffect, useState } from 'react'
import { getTextToHTML } from '../Util/util'

export default function CommentsContainer({ data }) {
  const [repliesComments, setRepliesComments] = useState(false)
  const mapComments = []
  const stateObj = {}

  const handleClick = id => {
    setRepliesComments(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const mapFunction = array => {
    if (typeof array === 'undefined') return null
    return array.map(comment => {
      if (comment.kind === 'more') return null
      stateObj[comment.data.id] = false
      return (
        <div
          key={comment.data.id}
          style={{ margin: '20px 0 0 20px', color: 'white' }}
        >
          {Parce(getTextToHTML(comment.data.body_html))}
          {comment.data.replies.data?.children &&
            comment.data.replies.data?.children[0].kind !== 'more' && (
              <button onClick={() => handleClick(comment.data.id)}>
                MORE COMMENTS
              </button>
            )}

          {repliesComments[comment.data.id] && (
            <div>{mapFunction(comment.data.replies.data?.children)}</div>
          )}
        </div>
      )
    })
  }

  for (let i = 0; i < data.length - 1; i++) {
    stateObj[data[i].data?.id] = true
    mapComments.push(
      <div
        key={data[i].data?.id}
        style={{ marginBottom: '20px', color: 'white' }}
      >
        {Parce(getTextToHTML(data[i].data?.body_html))}
        {data[i].data.replies.data?.children &&
          data[i].data.replies.data?.children !== 'more' && (
            <button onClick={() => handleClick(data[i].data?.id)}>
              MORE COMMENTS
            </button>
          )}
        {repliesComments[data[i].data?.id] && (
          <div>{mapFunction(data[i].data.replies.data?.children)}</div>
        )}
      </div>
    )
  }

  useEffect(() => {
    setRepliesComments(stateObj)
  }, [])

  return (
    <div>
      <h1>Comments</h1>
      {mapComments}
    </div>
  )
}
