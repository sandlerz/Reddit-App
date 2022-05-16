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
  const { popular, term } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const loadingSubReddits = useSelector(isLoadingSubReddits)
  const dispatch = useDispatch()

  const mapSubReddits = allSubReddits[term || popular || 'best']?.map(
    subReddit => <SubReddits data={subReddit} key={subReddit.id} />
  )

  useEffect(() => {
    if (allSubReddits[term]) return
    if (term) {
      dispatch(getSearch({ term: term, type: 'link' }))
      dispatch(getSearch({ term: term, type: 'sr' }))
    }
    if (allSubReddits[popular || 'best']?.length > 0) return
    dispatch(getAllSubReddits({ category: popular }))
  }, [popular, term])

  return (
    <div className="home">
      <main>{loadingSubReddits ? <SkeletonSubReddits /> : mapSubReddits}</main>
      <Aside />
    </div>
  )
}
