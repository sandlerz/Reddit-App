import { useLocation } from 'react-router-dom'
import { getSingleSubReddit } from './SingleSubRedditSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function SingleSubReddit() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleSubReddit({ url: pathname }))
  })

  return <main>SingleSubReddit</main>
}
