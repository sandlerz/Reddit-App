import Parce from 'html-react-parser'
import { useState } from 'react'
import { getTextToHTML } from '../Util/util'

export default function CommentsContainer({ data }) {
  const [repliesComments, setRepliesComments] = useState({})
  const mapComments = []

  const mapFunction = (array, id) => {
    const returnArray = array?.map(comment => {
      if (comment.kind === 'more') return null
      return (
        <div key={comment.data.id} style={{ margin: '10px 0 0 20px' }}>
          {getTextToHTML(comment.data.body)}
          {comment?.data?.replies?.data?.children &&
            comment?.data?.replies?.data?.children.kind !== 'more' && (
              <button
                onClick={e => {
                  mapFunction(
                    comment?.data?.replies?.data?.children,
                    comment.data.id
                  )
                }}
              >
                MORE COMMENTS
              </button>
            )}
          <div>{repliesComments[comment.data.id]}</div>
        </div>
      )
    })
    setRepliesComments(prev => ({
      ...prev,
      [id]: returnArray,
    }))
  }

  for (let i = 0; i < data.length / 3; i++) {
    mapComments.push(
      <div
        key={data[i].data.id}
        style={{ marginBottom: '20px', color: 'white' }}
      >
        {getTextToHTML(data[i].data.body)}
        {data[i]?.data?.replies?.data?.children && (
          <button
            onClick={() =>
              mapFunction(data[i].data.replies?.data.children, data[i].data.id)
            }
          >
            MORE COMMENTS
          </button>
        )}
        <div>{repliesComments[data[i].data.id]}</div>
      </div>
    )
  }

  return (
    <div>
      <h1>Comments</h1>
      {mapComments}
    </div>
  )
}
