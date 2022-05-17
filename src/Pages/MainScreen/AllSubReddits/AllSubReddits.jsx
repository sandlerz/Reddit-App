/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  isLoadingAllSubReddits,
  selectAllSubReddits,
} from './AllSubRedditsSlice'
import SubReddits from '../../../Components/SubReddits'
import SkeletonSubReddits from '../../../Components/Skeleton/SkeletonSubReddits'
import { useEffect } from 'react'
import { getAllSubReddits } from './AllSubRedditsSlice'

export default function AllSubReddits() {
  const { subreddits, term, community } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const isLoading = useSelector(isLoadingAllSubReddits)
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
  }, [subreddits, term, community])

  if (!isLoading && mapSubReddits?.length === 0)
    return <main>There are no posts in this subreddit</main>

  return (
    <main>
      {mapSubReddits?.length > 0 ? mapSubReddits : <SkeletonSubReddits />}
    </main>
  )
}
