/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SubReddits from '../../../Components/SubReddits'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubReddits, getSearch } from './HomeSlices'
import { selectAllSubReddits, isLoadingSubReddits } from './HomeSlices'
import SkeletonSubReddits from '../../../Components/Skeleton/SkeletonSubReddits'
import Aside from './Aside/Aside'

export default function Home() {
  const { subreddits, term, community } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const loadingSubReddits = useSelector(isLoadingSubReddits)
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
    if (allSubReddits[term] === undefined) {
      dispatch(getSearch({ term: term, type: 'link' }))
      dispatch(getSearch({ term: term, type: 'sr' }))
    }
    if (allSubReddits[subreddits || 'best']?.length === 0) {
      dispatch(getAllSubReddits({ subreddits: subreddits }))
    }
    if (allSubReddits[`r/${community}`] === undefined && community) {
      dispatch(getAllSubReddits({ subreddits: `r/${community}` }))
    }
  }, [subreddits, term, community])

  return (
    <div className="home">
      <main>{loadingSubReddits ? <SkeletonSubReddits /> : mapSubReddits}</main>
      <Aside />
    </div>
  )
}
