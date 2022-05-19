import { useEffect, useState } from 'react'
import Comment from '../Components/Comment'

export default function CommentsContainer({ data }) {
  const [repliesComments, setRepliesComments] = useState(false)
  const mapComments = []
  const stateObj = {}

  const handleShowReplies = id => {
    setRepliesComments(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const mapFunction = array => {
    if (typeof array === 'undefined') return null
    return array.map(({ data, kind }) => {
      if (kind === 'more') return null
      stateObj[data.id] = false
      return (
        <Comment
          key={data.id}
          id={data.id}
          body_html={data.body_html}
          author={data.author}
          score={data.score}
          created_utc={data.created_utc}
          children={data.replies.data?.children}
          kind={data.replies.data?.children[0].kind}
          handleClick={handleShowReplies}
          repliesComments={repliesComments}
          mapFunction={mapFunction}
        />
      )
    })
  }

  for (let i = 0; i < data.length - 1; i += 1) {
    stateObj[data[i].data?.id] = true
    mapComments.push(
      <Comment
        key={data[i].data?.id}
        id={data[i].data?.id}
        body_html={data[i].data?.body_html}
        author={data[i].data?.author}
        score={data[i].data?.score}
        created_utc={data[i].data?.created_utc}
        children={data[i].data.replies.data?.children}
        kind={data[i].data.replies.data?.children}
        handleClick={handleShowReplies}
        repliesComments={repliesComments}
        mapFunction={mapFunction}
      />
    )
  }

  useEffect(() => {
    setRepliesComments(stateObj)
  }, [])

  return (
    <div className="comments__container">
      <h1 className="comments__container__title">Comments</h1>
      <div className="comments__container__comments">{mapComments}</div>
    </div>
  )
}
