import { useEffect } from 'react'
import SubReddits from '../../../Components/SubReddits'
import About from '../../../Components/About'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubReddits, getCommunities } from './HomeSlices'
import { useParams } from 'react-router-dom'
import { selectAllSubReddits, selectCommunities } from './HomeSlices'
import NavCommunities from '../../../Components/NavCommunities'

export default function Home() {
  const { popular } = useParams()
  const allSubReddits = useSelector(selectAllSubReddits)
  const communities = useSelector(selectCommunities)
  const dispatch = useDispatch()

  const mapSubReddits = allSubReddits[popular || 'best'].map(subReddit => (
    <SubReddits data={subReddit} key={subReddit.id} />
  ))

  const dataCommunities = communities.slice(0, 10)
  const mapCommunities = dataCommunities.map((community, index) => (
    <NavCommunities data={community} key={community.id} index={index + 1} />
  ))

  useEffect(() => {
    if (allSubReddits[popular || 'best'].length > 0) return
    dispatch(getAllSubReddits({ category: popular }))
    if (communities.length > 0) return
    dispatch(getCommunities())
  }, [popular])

  return (
    <div className="home">
      <main>{mapSubReddits}</main>
      <aside className="aside">
        <div className="aside__communities">
          <h2 className="aside__communities__title">Communities</h2>
          <div className="aside__communities__container">{mapCommunities}</div>
        </div>
        <div className="aside__about">
          <About />
        </div>
      </aside>
    </div>
  )
}
