import SkeletonElement from './SkeletonElement'

export default function SkeletonComments() {
  const mapSkeleton = [...Array(2).keys()].map(index => (
    <div className="comment" key={index}>
      <div className="comment__user">
        <div className="comment__user__avatar">
          <SkeletonElement type="avatar__small-medium" />
        </div>
        <SkeletonElement type="text" />
      </div>
      <div className="comment__body">
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="title" />
        </div>
        <div>
          <SkeletonElement type="text" />
        </div>
        <div className="comment__body__replies-container">
          <div className="comment">
            <div className="comment__user">
              <div className="comment__user__avatar">
                <SkeletonElement type="avatar__small-medium" />
              </div>
              <SkeletonElement type="text" />
            </div>
            <div className="comment__body">
              <div>
                <SkeletonElement type="title" />
                <SkeletonElement type="title" />
              </div>
              <div>
                <SkeletonElement type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  ))
  return (
    <div className="comments__container">
      <h1 className="comments__container__title">Comments</h1>
      <div className="comments__container__comments">{mapSkeleton}</div>
    </div>
  )
}
