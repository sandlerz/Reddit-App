import SkeletonElement from './SkeletonElement'

export default function SkeletonSingleSubReddit() {
  return (
    <section className="single-subreddit">
      <div className="single-subreddit__top">
        <div className="single-subreddit__top__score-container">
          <SkeletonElement type="score" />
        </div>
        <div className="single-subreddit__top__img">
          <SkeletonElement type="img__big" />
        </div>
        <div className="single-subreddit__top__body-container">
          <SkeletonElement type="title" />
          <div className="single-subreddit__top__body-container__author-container">
            <SkeletonElement type="avatar__small" />
            <SkeletonElement type="text" />
          </div>
          <SkeletonElement type="dashboard" />
        </div>
      </div>
      <div className="single-subreddit__bottom">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </section>
  )
}
