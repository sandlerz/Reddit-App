import { useLocation, useParams } from 'react-router-dom'
import {
  getSingleSubReddit,
  isLoadingSingleSubReddit,
} from './SingleSubRedditSlice'
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
  const isLoading = useSelector(isLoadingSingleSubReddit)
  const data = useSelector(selectSingleSubReddit)
  const dispatch = useDispatch()

  console.log(data[id])

  useEffect(() => {
    if (data[id] === undefined) {
      dispatch(getSingleSubReddit({ url: pathname }))
    }
  }, [])

  return (
    <main>
      {!isLoading && data[id] ? (
        <SubReddit data={data[id].subReddit} />
      ) : (
        <SkeletonSingleSubReddit />
      )}
      <div>
        {!isLoading && data[id] ? (
          <CommentsContainer data={data[id]?.comments} />
        ) : (
          <SkeletonComments />
        )}
      </div>
    </main>
  )
}
