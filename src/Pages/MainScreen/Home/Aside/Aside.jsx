/* eslint-disable react-hooks/exhaustive-deps */
import About from '../../../../Containers/About'
import SkeletonCommunities from '../../../../Components/Skeleton/SkeletonCommunities'
import { isLoadingCommunities, selectCommunities } from '../Aside/AsideSlice'
import { useSelector, useDispatch } from 'react-redux'
import NavCommunities from '../../../../Components/NavLinkCommunities'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getCommunities } from './AsideSlice'
import { getSearch } from '../HomeSlices'

export default function Aside() {
  const { term, community } = useParams()
  const loadingCommunities = useSelector(isLoadingCommunities)
  const communities = useSelector(selectCommunities)
  const dispatch = useDispatch()

  const dataCommunities = communities[community || term || 'home']?.slice(0, 10)
  const mapCommunities = dataCommunities?.map((community, index) => (
    <NavCommunities data={community} key={community.id} index={index + 1} />
  ))

  useEffect(() => {
    if (communities[community] === undefined) {
      dispatch(getSearch({ term: community, type: 'sr' }))
    }
    if (communities.home.length === 0) {
      dispatch(getCommunities())
    }
  }, [community])

  return (
    <aside className="aside">
      <div className="aside__sticky">
        <div className="aside__communities">
          <h2 className="aside__communities__title">Communities</h2>
          <div className="aside__communities__container">
            {loadingCommunities ? <SkeletonCommunities /> : mapCommunities}
          </div>
        </div>
        <div className="aside__about">
          <About />
        </div>
      </div>
    </aside>
  )
}
