import { useLocation, useParams } from 'react-router-dom'
import { getSingleSubReddit } from './SingleSubRedditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SubReddit from '../../../Components/SubReddit'
import { selectSingleSubReddit } from './SingleSubRedditSlice'
import SkeletonSingleSubReddit from '../../../Components/Skeleton/SkeletonSingleSubReddit'
import CommentsContainer from '../../../Containers/CommentsContainer'
import SkeletonComments from '../../../Components/Skeleton/SkeletonComments'

export default function SingleSubReddit() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const data = useSelector(selectSingleSubReddit)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data[id] === undefined) {
      dispatch(getSingleSubReddit({ url: pathname }))
    }
  }, [pathname, id, data, dispatch])

  return (
    <main>
      {data[id] ? (
        <SubReddit data={data[id].subReddit} />
      ) : (
        <SkeletonSingleSubReddit />
      )}
      <div>
        {data[id] ? (
          <CommentsContainer data={data[id]?.comments} />
        ) : (
          <SkeletonComments />
        )}
      </div>
    </main>
  )
}
