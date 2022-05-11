import { useEffect } from 'react'
import SubReddits from '../../../Container/SubReddits'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubReddits } from './HomeSlice'
import { useParams } from 'react-router-dom'
import { selectAllSubReddits } from './HomeSlice'

export default function Home() {
  const { popular } = useParams()
  const data = useSelector(selectAllSubReddits)
  const dispatch = useDispatch()

  const reddits = data[popular || 'best'].map(subReddit => (
    <SubReddits data={subReddit} key={subReddit.id} />
  ))

  useEffect(() => {
    if (data[popular || 'best'].length > 0) return
    dispatch(getAllSubReddits({ category: popular }))
  }, [popular])

  return (
    <div className="home">
      <main>{reddits}</main>
      <aside>Aside</aside>
    </div>
  )
}
