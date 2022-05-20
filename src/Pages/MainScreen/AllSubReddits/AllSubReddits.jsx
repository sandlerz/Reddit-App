import { useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllSubReddits } from './AllSubRedditsSlice'
import SubReddits from '../../../Components/SubReddits'
import SkeletonSubReddits from '../../../Components/Skeleton/SkeletonSubReddits'
import { useEffect } from 'react'
import { getAllSubReddits } from './AllSubRedditsSlice'

export default function AllSubReddits() {
  const { subreddits, term, community } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const dispatch = useDispatch()

  let mapSubReddits = allSubReddits[term || subreddits || 'best']?.map(
    subReddit => <SubReddits data={subReddit} key={subReddit.id} />
  )

  if (community) {
    mapSubReddits = allSubReddits[`r/${community}`]?.map(subReddit => (
      <SubReddits data={subReddit} key={subReddit.id} />
    ))
  }

  useEffect(() => {
    if (allSubReddits[subreddits || 'best']?.length === 0) {
      dispatch(getAllSubReddits({ subreddits: subreddits || 'best' }))
    }
    if (allSubReddits[`r/${community}`] === undefined && community) {
      dispatch(getAllSubReddits({ subreddits: `r/${community}` }))
    }
  }, [subreddits, term, community, allSubReddits, dispatch])

  if (mapSubReddits === undefined) return <Navigate to="error" />

  return (
    <section>
      {mapSubReddits?.length > 0 ? mapSubReddits : <SkeletonSubReddits />}
    </section>
  )
}
