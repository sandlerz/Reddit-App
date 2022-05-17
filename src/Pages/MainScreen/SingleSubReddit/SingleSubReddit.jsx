import { useLocation, useParams } from 'react-router-dom'
import {
  getSingleSubReddit,
  isLoadingSingleSubReddit,
} from './SingleSubRedditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SingleSubReddit from '../../../Components/SingleSubReddit'
import { selectSingleSubReddit } from './SingleSubRedditSlice'

export default function Comments() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const isLoading = useSelector(isLoadingSingleSubReddit)
  const data = useSelector(selectSingleSubReddit)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data[id] === undefined) {
      dispatch(getSingleSubReddit({ url: pathname }))
    }
  }, [])

  return (
    <main>
      {!isLoading && data[id] ? (
        <SingleSubReddit data={data[id].subReddit} />
      ) : (
        'Is Loading... wait!'
      )}
    </main>
  )
}
